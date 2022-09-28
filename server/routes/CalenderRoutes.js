import express from "express";
import RdvTime from "../model/RdvTime.js";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("weeeeeeeeeeeeeeeeeeeeeeee3");
  RdvTime.find({})
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      // console.log("error: ", error);
    });
});

router.post("/", (req, res) => {
  const data = req.body;

  const newRdvTime = new RdvTime(data);

  newRdvTime.save((error) => {
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

router.get("/:createdBy", (req, res) => {
  RdvTime.find({ createdBy: req.params.createdBy })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log(error.message);
    });
});

router.get("/appointements/:userId", (req, res) => {
  console.log("weeeeeeeeeeeeeeeeeeeeeeee3");
  const userId = req.params.userId;
  RdvTime.find({ bookedBy: userId })
    .then((data) => {
      console.log("Data: ", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

export default router;
