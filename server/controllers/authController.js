import User from "../model/User.js";
import Avocat from "../model/Avocat.js";
import { StatusCodes } from "http-status-codes";

import { badRequestError, UnAuthenticatedError } from "../errors/index.js";

const register = async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;
  if (!name || !email || !password || phoneNumber) {
    throw new badRequestError("Please provide all values");
  }

  const userAlreadyExists = await (Avocat.findOne({ email }) ||
    User.findOne({ email }));
  if (userAlreadyExists) {
    throw new badRequestError("Email already in use");
  }

  //try and cash should be implemented (but we use instead expr-async-err)
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      name: user.name,
      phoneNumber: user.phoneNumber,
    },
    token,
  });
};

const registerLawyer = async (req, res) => {
  const { name, email, password, phoneNumber, city, speciality, image } =
    req.body;
  if (
    !name ||
    !email ||
    !password ||
    !phoneNumber ||
    !city ||
    !speciality ||
    !image
  ) {
    throw new badRequestError("Please provide all values");
  }

  const userAlreadyExists = await (Avocat.findOne({ email }) ||
    User.findOne({ email }));
  if (userAlreadyExists) {
    throw new badRequestError("Email already in use");
  }

  //try and cash should be implemented (but we use instead expr-async-err)
  const user = await Avocat.create({
    name,
    email,
    password,
    phoneNumber,
    city,
    image,
    speciality,
  });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      name: user.name,
      phoneNumber: user.phoneNumber,
      city: user.city,
      image: user.image,
      speciality: user.speciality,
    },
    token,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new badRequestError("Please provide all values");
  }
  const user =
    (await User.findOne({ email }).select("+password")) ||
    (await Avocat.findOne({ email }).select("+password"));

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token });
};

const updateUser = async (req, res) => {
  const { email, name, phoneNumber } = req.body;
  if (!email || !name || !phoneNumber) {
    throw new badRequestError("Please provide all values");
  }
  const user = await User.findOne({ _id: req.user.userId });
  user.phoneNumber = phoneNumber;
  user.email = email;
  user.name = name;
  // user.lastName = lastName;
  // user.location = location;

  await user.save();

  const token = user.createJWT();

  res.status(StatusCodes.OK).json({ user, token, location: user.location });
};

const updateAvocat = async (req, res) => {
  const { email, name, phoneNumber, city, price } = req.body;
  if (!email || !name) {
    throw new badRequestError("Please provide all values");
  }
  const avocat = await Avocat.findOne({ _id: req.avocat.userId });
  avocat.phoneNumber = phoneNumber;
  avocat.email = email;
  avocat.name = name;
  // user.lastName = lastName;
  // user.location = location;

  await avocat.save();

  const token = avocat.createJWT();

  res.status(StatusCodes.OK).json({ avocat, token });
};

export { register, login, updateUser, registerLawyer, updateAvocat };
