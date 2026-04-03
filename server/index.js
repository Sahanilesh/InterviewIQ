import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/connectDB.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import interviewRouter from './routes/interview.route.js';
import paymentRouter from './routes/payment.rounter.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;
connectDB();



app.use(cors({
    origin: [
    "http://localhost:5173",
    "https://interview-iq-vert.vercel.app/"
  ],
    credentials: true
}))


app.use(express.json())
app.use(cookieParser())


// app.get('/', (req, res) =>{
//     return res.json({message: "Server is running"});
// });
app.use("/api/auth", authRouter)
app.use("/api/user", userRouter)
app.use("/api/interview",interviewRouter)
app.use("/api/payment", paymentRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

