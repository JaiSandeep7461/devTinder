const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  throw new Error("hksdfjsd");
  res.send("User Data Sent");
});

// The below method is use to handle all errors and it will match all the routes
app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
