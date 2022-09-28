import express from "express";
const router = express.Router();
import User from "../model/User.js";
import Avocat from "../model/Avocat.js";

router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? (await User.findById(userId)) || (await Avocat.findById(userId))
      : (await User.findOne({ username: username })) ||
        (await Avocat.findOne({ username: username }));
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:_id", async (req, res) => {
  //Request Model
  await Avocat.findByIdAndDelete(req.params._id);
});

export default router;
