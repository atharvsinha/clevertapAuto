import express from "express";
import bodyParser from "body-parser";

const port = process.env.PORT || 80;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

let data = [];
let display = [];

app.post("/upload", (req, res) => {
  data.push(req.body);
  display.push(`${req.body.username} is pushed!`);
});
app.get("/", (req, res) => {
  res.send(data);
});
console.log(port);
console.log(Date.now());
app.listen(port);
