const express = require("express");
const { adminAuth } = require("./middlewares/auth");

const app = express();


app.get("/admin/getAllData",adminAuth)

app.get("/admin/deleteUser",(req,res)=>{
  res.send("Deleted a user");
});


app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
