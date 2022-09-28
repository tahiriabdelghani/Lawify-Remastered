import mongoose from "mongoose";

// Schema
//const Schema = _Schema;
const BlogPostSchema = new mongoose.Schema({
  startTime: {
    type: String,
    required: [true, "Please provide user"],
  },
  endTime: {
    type: String,
    required: [true, "Please provide user"],
  },
  date: {
    type: String,
    default: Date.now(),
  },
  day: {
    type: String,
    required: [true, "Please provide user"],
    // enum: ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    default: "lundi",
  },
  createdBy: {
    // type: mongoose.Types.ObjectId,
    // ref: "./User",
    // required: [true, "Please provide user"],
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

// Model
const TheTime = mongoose.model("TheTime", BlogPostSchema);

export default TheTime;
