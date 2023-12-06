// import modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import logger from "morgan";
import fs from "fs";
import path from "path";

dotenv.config();

// app starts here
const app = express();

// cors & bodyparser
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    allowedHeaders: [
      "sessionId",
      "Access-Control-Allow-Origin",
      "Content-Type",
      "master-token",
    ],
    exposedHeaders: ["sessionId"],
    origin: ["*", "http://localhost:5555"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);

// morgan
app.use(logger("dev"));
app.use(
  logger("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
