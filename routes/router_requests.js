var express=require("express"),router=express.Router();router.get("/requests",function(e,r){r.render("requests",{index_route:"solicitudes de cuenta"})}),module.exports=router;