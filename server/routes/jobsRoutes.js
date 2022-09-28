import express from "express";
const router = express.Router();

import { createJob, getAllJobs } from "../controllers/jobsController.js";

// router.route("/").post(createJob).get(getAllJobs);

// router.route("/").post(createJob).get(getAllJobs);

export default router;
