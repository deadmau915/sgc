var express=require("express"),router=express.Router();router.get("/settings",function(e,r){r.render("settings",{index_route:"ajustes"})}),module.exports=router;