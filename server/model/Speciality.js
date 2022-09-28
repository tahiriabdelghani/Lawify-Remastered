import mongoose from "mongoose";


const Speciality = new mongoose.Schema({
  name: {
    type: String
  },
});


export default mongoose.model("Speciality", Speciality);
