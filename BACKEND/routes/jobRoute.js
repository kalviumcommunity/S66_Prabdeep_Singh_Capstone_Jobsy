import express from "express";
const app = express();


const jobs = [
{ id: 1, title: "Software Engineer", company: "Google", location: "Bangalore" },
{ id: 2, title: "Backend Developer", company: "Amazon", location: "Hyderabad" },
{ id: 3, title: "Frontend Intern", company: "Kalvium", location: "Remote" }
];


app.get("/api/jobs", (req, res) => {
res.json(jobs);
});


app.post("/jobs", async (req, res) => {
  try {
    const { title, description, company, location } = req.body;
    const newJob = await Job.create({ title, description, company, location });
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});





app.listen(5000, () => {
console.log("Server running on http://localhost:5000");
});
