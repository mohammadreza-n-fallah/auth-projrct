const express=require("express");
const router=express.Router();
const authRouter=require("./auth");
const userRouter=require("./user");
const {isLoggin}=require("./../middleware/auth")

router.use("/auth",authRouter);
router.use("/user",isLoggin,userRouter);

module.exports=router;