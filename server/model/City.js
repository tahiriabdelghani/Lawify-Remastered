import mongoose from "mongoose";


const City = new mongoose.Schema({
  name: {
    type: String
  }
});


export default mongoose.model("City", City);
