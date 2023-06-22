import "dotenv";
import express from "express";
import cors = require("cors");

import { router } from "./routes";
import db from "./common/mongo";
import { pool } from "./common/mysql";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use("/api", router);

app.use((req, res, next) => {
  res.status(404).json({ message: "END_POINT_NOT_FOUND" });
});

db().then(() => console.log("connection ready"));

app.listen(PORT, () => console.log(`listening on port  ${PORT}`));
