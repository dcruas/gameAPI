import express from "express";

import charRouter from "./routes/char";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("test");
});

app.use("/char", charRouter);

export default app;
