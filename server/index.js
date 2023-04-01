import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

import userRouter from "./routes/user.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is HOME Page");
});

app.use("/user", userRouter);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT || 6000, () =>
      console.log(`server running on port ${process.env.PORT || 6000}`)
    );
  })
  .catch((err) => console.log(err.message));
