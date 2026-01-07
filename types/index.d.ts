interface Job {
  title: string;
  description: string;
  location: string;
  requiredSkills: string[];
}

interface Resume {
  id: string;
  companyName?: string;
  jobTitle?: string;
  imagePath: string;
  resumePath: string;
  feedback: Feedback;
}

interface Feedback {
  overall_score: number;
  ats_compatibility_score: number;
  ats_issues: string[];
  job_match_score: number;
  job_match_analysis: string;
  tone_and_style_score: number;
  content_score: number;
  structure_score: number;
  technical_skills_score: number;
  missing_elements: string[];
  recommendations: string[];
  strengths: string[];
  weaknesses: string[];
}