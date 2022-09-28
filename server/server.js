import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
dotenv.config();
import "express-async-errors";

const app = express();
import CalenderController from "./controllers/CalenderController.js";
app.use(cors());

//db and authUser
import connectDB from "./db/connect.js";

// routers
import userRoutes from "./routes/userRoutes.js";
import authRouter from "./routes/authRoutes.js";
import conversationRouter from "./routes/conversations.js";
import messageRouter from "./routes/messages.js";
import calenderRouter from "./routes/CalenderRoutes.js";
import CalenderRouter from "./controllers/CalenderController.js";
import routes from "./routes/api.js";

//middleware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundModule from "./middleware/not-found.js";
import authenticateUser from "./middleware/auth.js";

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

if (process.env.NODE_ENV !== "production") {
  app.use(express.static("client/build"));
}

app.use(express.json());
console.log("Helloooo");

app.get("/api/v1", (req, res) => {
  res.status(200).json({ msg: "API" });
});

app.use("/api/v1/calender", calenderRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/users", userRoutes);
app.use("/api/v1/conversations", conversationRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/test", routes);
app.use("/api", CalenderRouter);
app.use(notFoundModule);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    //The server will run if the connection succeeded
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
