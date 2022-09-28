import mongoose from "mongoose";

const RdvTimeSchema = mongoose.Schema({
  startTime: {
    type: String,
    required: [true, "Please provide startTime"],
  },
  endTime: {
    type: String,
    required: [true, "Please provide endTime"],
  },
  date: {
    type: String,
    // default: Date.now(),
    required: [true, "Please provide Year"],
  },
  createdBy: {
    type: String,
    required: true,
  },
  bookedBy: {
    type: String,
    Default: "",
  },
  firstName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  tele: {
    type: String,
    default: "",
  },
  avocatName:{
    type: String
  }
});

const RDVTime = mongoose.model("RdvTime", RdvTimeSchema);

export default RDVTime;
