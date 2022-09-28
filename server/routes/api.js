import express from "express";
const router = express.Router();

import TheTime from "../model/Time.js";
import City from "../model/City.js";
import Speciality from "../model/Speciality.js";
import Avocat from "../model/Avocat.js";
import authenticateUser from "../middleware/auth.js";

// Routes
router.get("/", (req, res) => {
  TheTime.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      // console.log("error: ", error);
    });
});
router.get("/:createdBy", (req, res) => {
  TheTime.find({ createdBy: req.params.createdBy })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      // console.log("error: ", error);
    });
});

router.post("/save", (req, res) => {
  const data = req.body;

  const newBlogPost = new TheTime(data);

  newBlogPost.save((error) => {
    if (error) {
      res
        .status(500)
        .json({ msg: "Sorry, internal server errors", data: data });
      console.log(data);
      return;
    }
    // BlogPost
    return res.json({
      msg: "Your data has been saved!!!!!!",
      data,
    });
  });
});

router.delete("/:id", async (req, res) => {
  await TheTime.findByIdAndDelete(req.params.id);
});



export default router;
