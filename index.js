import express from "express";
import env from "dotenv";
const app = express();

const PORT = 4000;
env.config();

app.get("/", (req, res) => {
  res.send("hello backend with chai");
});
app.get("/youtube", (req, res) => {
  res.send("hello i am toutube");
});
app.get("/github", (req, res) => {
  res.json({ name: "anshul verma" });
});
app.get("/login", (req, res) => {
  res.json({ username: "anshul verma", password: 1234 });
});

app.listen(process.env.PORT, () => {
  console.log(`Server run at port ${PORT}`);
});
