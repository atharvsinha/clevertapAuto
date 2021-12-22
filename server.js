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
    ts: Math.floor(Date.now() / 1000),
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
      ageGroup: req.body["age group"],
      lessonName: req.body["lessonName"],
      parentName: req.body["parent name"],
      preferredDate: req.body["preferred date"],
      email: req.body["email"],
      platform: req.body["platform"],
      transactionDate: req.body["transaction date"],
      channel: req.body["channel"],
      zoomLink: req.body["zoom link"],
      learningMaterial: req.body["learning material"],
      feedbackJotform: req.body["feedback jotform"],
    },
  };
  //child name	child birthdate
  let users = {
    identity: req.body["Identity"],
    type: "profile",
    ts: Math.floor(Date.now() / 1000),
    profileData: {
      customerType: req.body["customer type"],
      parentName: req.body["parent name"],
      childName: req.body["child name"],
      childBirthdate: req.body["child birthdate"],
    },
  };
  const data1 = JSON.stringify({ d: [events] });
  console.log(data1);
  const data2 = JSON.stringify({ d: [users] });
  const options1 = {
    url: "https://api.clevertap.com/1/upload",
    method: "POST",
    headers: headers,
    body: data1,
  };
  const options2 = {
    url: "https://api.clevertap.com/1/upload",
    method: "POST",
    headers: headers,
    body: data2,
  };

  function callback(error, response, body) {
    console.log(body);
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
