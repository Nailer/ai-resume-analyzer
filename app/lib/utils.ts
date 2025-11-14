const KILOBYTE = 1024;
const UNITS = ["KB", "MB", "GB"] as const;

const formatValue = (value: number) => {
  if (value >= 100) {
    return value.toFixed(0);
  }
  if (value >= 10) {
    return value.toFixed(1);
  }
  return value.toFixed(2);
};

export const formatSize = (bytes: number): string => {
  if (!Number.isFinite(bytes) || bytes <= 0) {
    return "0 KB";
  }

  let size = bytes / KILOBYTE;
  let unitIndex = 0;

  while (size >= KILOBYTE && unitIndex < UNITS.length - 1) {
    size /= KILOBYTE;
    unitIndex += 1;
  }

  return `${formatValue(size)} ${UNITS[unitIndex]}`;
};

export const generateUUID = () => crypto.randomUUID();



