require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const accountSid = process.env.SID;
const authToken = process.env.TOKEN;
const client = require("twilio")(accountSid, authToken);

// middleware
app.use(cors());
app.use(express.json());

// init connection
app.listen(8800, () => {
  console.log("Connected to Backend! Port: 8800");
});

app.post("/sendmessage", (req, res) => {
  const { message, phone } = req.body;
  return client.messages
    .create({
      body: message,
      messagingServiceSid: process.env.SERVICE_SID,
      to: phone,
    })
    .then((message) => res.send(message))
    .catch((error) => res.send(error));
});
