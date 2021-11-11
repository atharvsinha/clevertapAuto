import express from "express";
import bodyParser from "body-parser";
import request from "request";

const port = process.env.PORT || 80;
const app = express();

const headers = {
  "X-CleverTap-Account-Id": "8WR-899-KR6Z",
  "X-CleverTap-Passcode": "SCY-KUV-GWUL",
  "Content-Type": "application/json; charset=utf-8",
};

let postedData = [];
let display = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.post("/upload", (req, res) => {
  let events = {
    identity: req.body["Identity"],
    evtName: req.body["evtName"],
    type: "event",
    evtData: {
      category: req.body["category"],
      courseTitle: req.body["course title"],
      courseUrl: req.body["course url"],
      feedbackForm: req.body["feedback form"],
      learningMaterial: req.body["learning material"],
      lessonNumber: req.body["lesson number"],
      page: req.body["page"],
      slotDate: req.body["slot date"],
      teacherName: req.body["teacher name"],
      timestamp: Date.now(),
    },
  };
  let users = {
    identity: req.body["Identity"],
    type: "profile",
    profileData: {
      customerType: req.body["customer type"],
      parentName: req.body["parent name"],
      timestamp: Date.now(),
    },
  };
  const data1 = JSON.stringify({ d: events });
  const data2 = JSON.stringify({ d: users });
  const options1 = {
    url: "https://api.clevertap.com/1/upload?dryRun=1",
    method: "POST",
    headers: headers,
    body: data1,
  };
  const options2 = {
    url: "https://api.clevertap.com/1/upload?dryRun=1",
    method: "POST",
    headers: headers,
    body: data2,
  };

  function callback(error, response, body) {
    console.log(response.statusCode);
  }

  request.post(options1, callback);
  request.post(options2, callback);

  postedData.push({ events: events, users: users });
  display.push(`${req.body.Identity} is pushed!`);
  res.send(postedData);
});
app.get("/", (req, res) => {
  res.send(display);
});
console.log(port);
app.listen(port);
