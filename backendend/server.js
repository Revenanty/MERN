import express from "express";
import dotenv from "dotenv";
import router from "./routes/userRoute.js";
import connectDb from "./dbconfig/dbConnect.js";
import {
  errorHandler,
  invalidRouteHandler,
} from "./middleware/errorHandler.js";

connectDb();

const app = express();

app.use(express.json());
dotenv.config();

app.use("/api/users/", router);

app.use(errorHandler);
app.use(invalidRouteHandler);

app.listen(3000, (req, res) => {
  console.log("server is running");
});
