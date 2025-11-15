export interface PdfConversionResult {
    imageUrl: string;
    file: File | null;
    error?: string;
  }
  
  let pdfjsLib: any = null;
  let isLoading = false;
  let loadPromise: Promise<any> | null = null;
  
  async function loadPdfJs(): Promise<any> {
    if (pdfjsLib) return pdfjsLib;
    if (loadPromise) return loadPromise;
  
    isLoading = true;
    // @ts-expect-error - pdfjs-dist/build/pdf.mjs is not a module
    loadPromise = import("pdfjs-dist/build/pdf").then((lib) => {
      // Set the worker source to use local file
      lib.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;
      pdfjsLib = lib;
      isLoading = false;
      return lib;
    });
  
    return loadPromise;
  }
  
  export async function convertPdfToImage(
    file: File
  ): Promise<PdfConversionResult> {
    try {
      const lib = await loadPdfJs();
  
      const pdf = await lib.getDocument({
        data: await file.arrayBuffer(),
      }).promise;
  
      const page = await pdf.getPage(1);
  
      const viewport = page.getViewport({ scale: 2 });
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
  
      canvas.width = viewport.width;
      canvas.height = viewport.height;
  
      await page.render({
        canvasContext: ctx!,
        viewport,
      }).promise;
  
      return new Promise((resolve) => {
        canvas.toBlob((blob) => {
          if (!blob)
            return resolve({ imageUrl: "", file: null, error: "Blob failed" });
  
          const imageFile = new File([blob], "resume.png", { type: "image/png" });
  
          resolve({
            imageUrl: URL.createObjectURL(blob),
            file: imageFile,
          });
        });
      });
    } catch (err) {
      return {
        imageUrl: "",
        file: null,
        error: `Failed to convert PDF: ${err}`,
      };
    }
  }
  