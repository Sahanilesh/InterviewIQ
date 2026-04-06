# 🚀 InterviewIQ — Smart Mock Interview Platform 🎯

## 📌 Overview

**InterviewIQ** is a full-stack web platform designed to help candidates prepare for technical interviews through structured, AI-powered mock interview sessions.

It enables users to simulate real interview environments with timed sessions, resume-based question generation, AI-driven feedback, and detailed performance reports.

### 🎯 Purpose
- Help candidates practice and improve interview skills  
- Provide AI-based feedback and insights  
- Enable structured and realistic mock interview experiences  

### 👥 Target Users
- Job seekers preparing for technical interviews  
- Bootcamp graduates needing structured practice  
- Recruiters or teams looking for interview analytics  

---

## ✨ Features

- 🎤 **Mock Interviews**  
  Create timed interview sessions with configurable topics and difficulty levels  

- 📄 **Resume Upload**  
  Upload resumes to generate personalized interview questions  

- 🤖 **AI Questioning & Feedback**  
  Generate interview questions and detailed feedback using OpenRouter (LLM)  

- ⏱️ **Recording & Timer**  
  In-browser video/audio recording with automatic session tracking  

- 📊 **Interview Reports**  
  AI-generated reports with scoring, feedback, and improvement suggestions  

- 📁 **History & Retrieval**  
  Access past interviews and download reports  

- 💳 **Payments & Subscription**  
  Razorpay integration for premium features and credits  

- 🔐 **Authentication & Social Login**  
  Google Sign-in (Firebase) + JWT-based backend authentication  

- 📤 **File Uploads**  
  Secure resume uploads using multer  

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)  
- CSS  
- Component-based architecture  

Key Files:
- `ResumeUpload.jsx`  
- `firebase.js`  

---

### Backend
- Node.js  
- Express.js  

Key Files:
- `token.js` (JWT handling)  
- `openRouter.service.js` (AI integration)  

---

### Database
- MongoDB  
- Connection handled via `connectDB.js`  

---

### AI Integration
- OpenRouter (GPT-based models)  
- Used for question generation and feedback  

---

### Payments
- Razorpay (server integration + webhooks)  

---

### Other Tools & Libraries
- multer (file uploads)  
- JWT (authentication)  

---

## 🏗️ Project Architecture
User (React App)
↓
Firebase Google Sign-in (Client)
↓
JWT Authentication (Backend)
↓
Backend API (Node + Express)
↓
MongoDB (Users, Interviews, Reports)
↓
AI Service (OpenRouter)
↓
Razorpay (Payments)
↓
File Storage (multer / cloud-ready)


---

## 📂 Folder Structure

InterviewIQ/
│
├── client/                 # Frontend (React)
│   ├── components/
│   ├── pages/
│   ├── assets/
│   └── firebase.js
│
├── server/                 # Backend (Node + Express)
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── services/
│   └── config/
│
└── README.md

## 🔄 Functional Flow
1. User signs in via Google (Firebase authentication)
2. Client exchanges Firebase token for backend JWT
3. User uploads resume (stored and linked to profile)
4. User creates a mock interview session (topic/difficulty)
5. Interview starts with timer + recording
6. Session data is captured and sent to backend
7. Backend processes data via OpenRouter AI: 
    * Generates feedback
    * Scores performance
    * Suggests improvements
8. Report is stored and displayed to user
9. Premium features unlocked via Razorpay payments