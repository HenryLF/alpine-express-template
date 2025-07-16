import { config } from "dotenv";
import path from "path";
config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

import express from "express";
import morgan from "morgan";
import cors from "cors";

const PORT = process.env.PORT ?? "3000";

export const app = express();

app.use(morgan("dev"));
app.use(cors());

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (_, res) => {
  res.render("index");
});

if (process.env.NODE_ENV == "dev") {
  app.listen(PORT);
}
