const controller=require("./../controller");
const _=require("lodash");
const bcrypt=require("bcrypt")

module.exports=new (class extends controller{
    async register(req,res){
        let user=await this.User.findOne({email:req.body.email});
        if(user){
            return this.response({
                res,code:400,message:"email is already"
            })
        }
        // const {email,name,password}=req.body;
        // user = new this.User({email,name,password})

        user=new this.User(_.pick(re.body,["email","name","password"]))
         
        const salt=await bcrypt.genSalt(10);
        user.password=await bcrypt.hash(user.password,salt);

        user.save();

        this.response({
            res,message:"user successfully",
            data:_.pick(user,["_id","name","email"])
        })
    }

    async login(req,res){
        res.send("login");
    }
})();