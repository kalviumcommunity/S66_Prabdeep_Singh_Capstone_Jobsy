import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
  applicant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  resume: {
    type: String, // file URL or path
    required: true,
  },
  status: {
    type: String,
    enum: ["applied", "under review", "rejected", "selected"],
    default: "applied",
  },
  appliedAt: {
    type: Date,
    default: Date.now,
  },
});

const Application = mongoose.model("Application", applicationSchema);
export default Application;
