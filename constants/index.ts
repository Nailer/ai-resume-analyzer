export const resumes: Resume[] = [
  {
    id: "1",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "public/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overall_score: 85,
      ats_compatibility_score: 90,
      ats_issues: ["Improve keyword optimization"],
      job_match_score: 85,
      job_match_analysis: "Strong alignment with job requirements",
      tone_and_style_score: 90,
      content_score: 90,
      structure_score: 90,
      technical_skills_score: 95,
      missing_elements: [],
      recommendations: ["Detail your impact in previous roles"],
      strengths: ["Strong technical skills"],
      weaknesses: [],
    },
  },
  {
    id: "2",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "public/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overall_score: 55,
      ats_compatibility_score: 60,
      ats_issues: ["Formatting issues detected"],
      job_match_score: 50,
      job_match_analysis: "Partial match, requires more cloud experience details",
      tone_and_style_score: 80,
      content_score: 60,
      structure_score: 70,
      technical_skills_score: 70,
      missing_elements: ["AWS certification"],
      recommendations: ["Add relevant certifications"],
      strengths: ["Clear layout"],
      weaknesses: ["Lack of specific metrics"],
    },
  },
  {
    id: "3",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "public/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overall_score: 75,
      ats_compatibility_score: 85,
      ats_issues: [],
      job_match_score: 75,
      job_match_analysis: "Good foundation, could be more specific",
      tone_and_style_score: 85,
      content_score: 80,
      structure_score: 90,
      technical_skills_score: 88,
      missing_elements: [],
      recommendations: ["Highlight Swift achievements"],
      strengths: ["Mobile development experience"],
      weaknesses: [],
    },
  },
  {
    id: "4",
    companyName: "Google",
    jobTitle: "Frontend Developer",
    imagePath: "public/images/resume_01.png",
    resumePath: "/resumes/resume-1.pdf",
    feedback: {
      overall_score: 85,
      ats_compatibility_score: 90,
      ats_issues: [],
      job_match_score: 85,
      job_match_analysis: "Good match",
      tone_and_style_score: 90,
      content_score: 90,
      structure_score: 90,
      technical_skills_score: 90,
      missing_elements: [],
      recommendations: [],
      strengths: [],
      weaknesses: [],
    },
  },
  {
    id: "5",
    companyName: "Microsoft",
    jobTitle: "Cloud Engineer",
    imagePath: "public/images/resume_02.png",
    resumePath: "/resumes/resume-2.pdf",
    feedback: {
      overall_score: 55,
      ats_compatibility_score: 60,
      ats_issues: [],
      job_match_score: 50,
      job_match_analysis: "Average match",
      tone_and_style_score: 80,
      content_score: 60,
      structure_score: 70,
      technical_skills_score: 70,
      missing_elements: [],
      recommendations: [],
      strengths: [],
      weaknesses: [],
    },
  },
  {
    id: "6",
    companyName: "Apple",
    jobTitle: "iOS Developer",
    imagePath: "public/images/resume_03.png",
    resumePath: "/resumes/resume-3.pdf",
    feedback: {
      overall_score: 75,
      ats_compatibility_score: 85,
      ats_issues: [],
      job_match_score: 75,
      job_match_analysis: "Good match",
      tone_and_style_score: 85,
      content_score: 80,
      structure_score: 90,
      technical_skills_score: 88,
      missing_elements: [],
      recommendations: [],
      strengths: [],
      weaknesses: [],
    },
  },
];

export const AIResponseFormat = `
interface Feedback {
  overall_score: number; // 0-100
  ats_compatibility_score: number; // 0-100
  ats_issues: string[]; // List of ATS-specific issues
  job_match_score: number; // 0-100
  job_match_analysis: string; // Brief analysis of resume vs job description
  tone_and_style_score: number; // 0-100
  content_score: number; // 0-100
  structure_score: number; // 0-100
  technical_skills_score: number; // 0-100
  missing_elements: string[]; // List of missing keywords or sections
  recommendations: string[]; // General improvement recommendations
  strengths: string[]; // List of strong points
  weaknesses: string[]; // List of weak points
}`;

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
  AIResponseFormat,
}: {
  jobTitle: string;
  jobDescription: string;
  AIResponseFormat: string;
}) =>
  `You are an expert in ATS(Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed.Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescription}
  Provide the feedback using the following JSON format: ${AIResponseFormat}

  IMPORTANT:
- Return the response as a valid, parseable JSON object.
  - Do NOT include markdown formatting(like \`\`\`json ... \`\`\`) or any other text.
  - Strictly follow the property names and structure defined above. 
  - Ensure all numeric scores are between 0 and 100.
  - Do not include comments in the final JSON output.`