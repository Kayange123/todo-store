import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import helmet from "helmet";
import morgan from "morgan";
import routerTodo from "./routes/todoRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(helmet());
app.use(cors());

app.use("/api", routerTodo);

const localURL = process.env.LOCAL_MONGO_URL;
const mongoUrl = process.env.MONGODB_URL;
const url = process.env.NODE_ENV === "production" ? mongoUrl : localURL;
mongoose
  .connect(mongoUrl)
  .then(() => {
    app.listen(process.env.PORT, "0.0.0.0", () => {
      console.log(
        `Server is running on port ${process.env.PORT} and connected to MongoDB`
      );
    });
  })
  .catch((error) => console.error(error));
