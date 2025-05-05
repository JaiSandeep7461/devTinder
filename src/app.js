const express = require("express");

const app = express();


app.get("/hello",(req,res)=>{
  res.send({"firstName":"Sandeep","lastName":"Peela"});
  });

app.post("/user",(req,res)=>{
  console.log("Save Data to the database");
  res.send("Data Successfully saved to the database");
});

app.delete("/user",(req,res)=>{
  res.send("Deleted Successfully!");
});

app.use((req, res) => {
  res.send("Hello from the Namste Server");
});


app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
