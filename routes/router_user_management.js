var express=require("express"),router=express.Router();router.get("/user_management",function(e,r){r.render("user_management",{index_route:"gestión de usuarios"})}),module.exports=router;