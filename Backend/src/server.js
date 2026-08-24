import express from "express";
import noteRoutes from "./Routes/noteRoutes.js";
import { connectDB } from "./confi/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 5050;

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter)


app.use("/api/notes", noteRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`http://localhost:${PORT}`);
    });
});