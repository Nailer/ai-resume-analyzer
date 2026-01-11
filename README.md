# On-Chain AI Resume Analyzer & Talent Matching Platform (Built on Lisk)

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)  
[![Lisk](https://img.shields.io/badge/Built%20on-Lisk-blueviolet)](https://lisk.com/)

---

## Table of Contents

- [Project Overview](#project-overview)  
- [Features](#features)  
- [How It Works](#how-it-works)  
- [Architecture](#architecture)  
- [Tech Stack](#tech-stack)  
- [Installation & Setup](#installation--setup)  
- [Usage](#usage)  
- [Future Plans](#future-plans)  
- [Challenges Faced](#challenges-faced)  
- [Contributing](#contributing)  
- [License](#license)  

---

## Project Overview

The **On-Chain AI Resume Analyzer & Talent Matching Platform** is a cutting-edge, decentralized application (dApp) designed to revolutionize the hiring process. It combines **AI-powered resume analysis** with **blockchain security and transparency**, allowing job seekers to assess how well their resumes match specific job descriptions and giving recruiters access to verified candidate scores.

This platform tackles a **global problem**: hiring inefficiencies and automated resume rejection by Applicant Tracking Systems (ATS), which affect millions of job seekers worldwide — including rapidly growing tech markets in **Southeast Asia**.

By leveraging the **Lisk blockchain**, the platform ensures **trust, security, and verifiable on-chain data storage**, making it the first step toward a transparent, decentralized recruitment ecosystem.

---

## Features

- **User Authentication**
  - Secure sign-in for users before accessing the platform.
- **Job & Resume Input**
  - Users can enter job titles, roles, job descriptions, and upload resumes.
- **AI Resume Analysis**
  - Smart AI engine evaluates resumes against job descriptions.
  - Generates detailed insights on **strengths, weaknesses**, and **improvement suggestions**.
- **ATS Compatibility Score**
  - Provides a clear percentage match with the job description.
  - Helps candidates understand how ATS-friendly their resume is.
- **On-Chain Storage**
  - Analysis results and scores are **saved securely on Lisk blockchain**.
  - Ensures **data integrity, ownership, and verifiability**.
- **Recruiter Dashboard (Future)**
  - Recruiters can access top candidates based on verified scores.
  - Simplifies candidate selection with transparent ranking.

---

## How It Works

1. **Sign-In**
   - Users authenticate securely to access the platform.
2. **Input Job & Resume**
   - Fill out a form with job title, role, job description, and upload your resume.
3. **Analyze**
   - The AI engine compares the resume against the job description.
   - Scores the resume for **ATS compatibility**.
4. **Receive Feedback**
   - Detailed insights about resume strengths, weaknesses, and improvement areas.
   - Results are stored on-chain for **transparency and verifiability**.
5. **Recruiter Access (Future)**
   - Recruiters can view candidate scores and select top matches based on verified results.

---

## Architecture

```text
+------------------+        +------------------------+
|   Frontend       |        |      Backend/AI        |
| (React + Tailwind)| <-->  |  Node.js + Express.js  |
+------------------+        +------------------------+
          |                          |
          | REST API / WebSocket     |
          v                          v
+------------------+        +------------------------+
| Lisk Blockchain  | <----> | AI Resume Analysis     |
| On-Chain Storage |        | Engine (NLP/ML)       |
+------------------+        +------------------------+
