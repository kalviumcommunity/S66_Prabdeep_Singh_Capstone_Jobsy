import { Router } from "express";
import Job from "../models/job.model.js"; 

const router = Router();

// Mock data (for testing)
const jobs = [
  { id: 1, title: "Software Engineer", company: "Google", location: "Bangalore" },
  { id: 2, title: "Backend Developer", company: "Amazon", location: "Hyderabad" },
  { id: 3, title: "Frontend Intern", company: "Kalvium", location: "Remote" }
];

// GET all jobs
router.get("/api/jobs", (req, res) => {
  res.json(jobs);
});

// POST a new job
router.post("/jobs", async (req, res) => {
  try {
    // pass the whole request body
    const newJob = await Job.create(req.body);

    res.status(201).json(newJob);
  } catch (err) {``
    res.status(400).json({ error: err.message });
  }
});


export default router;
