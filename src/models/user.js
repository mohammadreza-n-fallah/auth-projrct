const mongoose=require("mongoose");
const timestamp=require("mongoose-timestamp");



  const userSchema=new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    isadmin:{type:String,required:false},
  });

  userSchema.plugin(timestamp);

  const User=mongoose.model("User",userSchema)
  module.exports=User;


  