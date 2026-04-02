import express from "express";
import isAuth from '../middlewares/isAuth.js'
import { upload } from "../middlewares/multer.js";
import { analyseResume, finishInterview, generateQuestions, getMyInterviews, getInterviewReport, submitAnswer } from "../controllers/interview.controller.js";

const interviewRouter = express.Router()
interviewRouter.post("/resume",isAuth,upload.single("resume"),analyseResume)
interviewRouter.post("/generate-question", isAuth,generateQuestions)
interviewRouter.post("/submit-answer",isAuth,submitAnswer)
interviewRouter.post("/finish", isAuth, finishInterview)

// interview History
interviewRouter.get("/get-interview", isAuth, getMyInterviews)
interviewRouter.get("/report/:id", isAuth, getInterviewReport)

export default interviewRouter