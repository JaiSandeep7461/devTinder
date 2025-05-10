 const adminAuth = (req,res)=>{
    const token ="xyzss";
    const isAdminAuthorized = token==="xyz";
    if(isAdminAuthorized){
      res.send("All Data Sent");
    }else{
      res.status(401).send("Unauthorized request");
    }
  };

  module.exports ={adminAuth}