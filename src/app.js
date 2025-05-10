const express = require("express");

const app = express();




/* app.get("/abc",(req,res)=>{
  console.log("Req >>>", req.query);
  res.send({"firstName":"Sandeep","lastName":"Peela"});
  });

app.post("/user",(req,res)=>{
  console.log("Save Data to the database");
  res.send("Data Successfully saved to the database");
});

app.delete("/user",(req,res)=>{
  res.send("Deleted Successfully!");
}); */

app.use("/user",(req, res,next) => {
  console.log("Handling the route user!!");
  next();
},
(req,res,next)=>{
  console.log("Handling the route user2");
  // res.send("2nd Response");
  next();
},
(req,res,next)=>{
  console.log("Handling the route user 3");
  // res.send("3rd Response");
  next();
},
(req,res,next)=>{
  console.log("Handling the route user 4");
  res.send("4th response");

}
);


app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000");
});
