import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";
import path from "path";

dotenv.config();

const port = process.env.PORT;
const __dirname = path.resolve(); 

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173", 
    credentials: true 
}));

app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../frontend/build'))); 

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html')); 
    })
}

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
    connectDB();
});
