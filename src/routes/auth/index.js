const express=require("express");
const router=express.Router();

const controller=require("./controller");
const validator=require("./validator")

router.post(
    "/register",
    validator.registerValidator(),
<<<<<<< HEAD
    controller.validate,
    controller.register
=======
    controller.validate.bind(controller),
    controller.register.bind(controller)
>>>>>>> 034223d695965b7099fff983bd7721170ebaac31
);

router.post(
    "/login",
    validator.loginValidator(),
<<<<<<< HEAD
    controller.validate,
    controller.login
=======
    controller.validate.bind(controller),
    controller.login.bind(controller)
>>>>>>> 034223d695965b7099fff983bd7721170ebaac31
);


module.exports=router;