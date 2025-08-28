import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI!);
    console.log(`🚀 MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Error: ${error.message}`);
    } else {
      console.error(`❌ Unknown error:`, error);
    }
    process.exit(1);
  }
};

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Simple test route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from backend!" });
});

app.use("/api/task", taskRoutes);

app.use("/api/tasks", taskRoutes);

app.get("/", (_req, res) => res.send("API is running..."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
