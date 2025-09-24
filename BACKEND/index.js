import express from "express";
import jobsRouter from "./routes/jobRoute.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

const MONGO_URI = "mongodb://127.0.0.1:27017/capstone"; // local MongoDB
// or your MongoDB Atlas URI, e.g.:
// const MONGO_URI = "mongodb+srv://<username>:<password>@cluster0.mongodb.net/capstone";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Use routers
app.use(jobsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
