const mongoose = require('mongoose');   

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength : 6,
        maxLength:50
    },
    lastName:{
        type:String
    },
    emailId:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        min:18
    },
    gender:{
        type:String,
        validate(value){
            if(!["male","female","others"].includes(value)){
                throw new Error("Gender is not valid");
            }
        }
    },
    photoUrl:{
        type:String,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF02Jj8T2t7PdkytAw42HDuuSz7yXguKn8Lg&s"
    },
    about:{
        type:String,
        default:"This is the default about the user"
        
    },
    skills:{
        type:[String]
    }
},{
    timestamps:true
});


module.exports=mongoose.model("User",userSchema);