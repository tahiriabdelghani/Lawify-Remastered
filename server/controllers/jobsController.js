import Job from "../model/Job.js";
import { StatusCodes } from "http-status-codes";
import { badRequestError, UnAuthenticatedError } from "../errors/index.js";
// import checkPermissions from "../utils/checkPermissions.js";
import mongoose from "mongoose";
import moment from "moment";

const createJob = async (req, res) => {
  const { startTime, endTime, day, createdBy } = req.body;

  if (!startTime || !endTime || !day) {
    throw new badRequestError("Please provide all values");
  }

  // req.body.createdBy = req.user._id;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const getAllJobs = async (req, res) => {
  const { status, day, sort, search } = req.query;

  const queryObject = {
    createdBy: "6235011c7004aacbd230915a",
    //  req.user.userId,
  };
  // add stuff based on condition
  // NO AWAIT

  let result = Job.find(queryObject);

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const jobs = await result;

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);

  res.status(StatusCodes.OK).json({ jobs, totalJobs, numOfPages });
};

export { createJob, getAllJobs };
