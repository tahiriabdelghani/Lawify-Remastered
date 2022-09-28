import mongoose from "mongoose";

const AppointmentSchema = mongoose.Schema({
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
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

export default Appointment;