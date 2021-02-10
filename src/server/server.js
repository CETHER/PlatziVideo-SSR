import express from "express";
import dotenv, { config } from "dotenv";

dotenv.config();

const { ENV, PORT } = process.env;
const app = express();

if (ENV === "development") {
  console.log("Development config");
}

app.get("*", (req, res) => {
  res.send({ hello: "express" });
});

app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on http://localhost:${PORT}`);
});
