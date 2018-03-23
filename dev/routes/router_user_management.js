var express = require("express");
var router= express.Router();

router.get("/user_management",function(req,res){
    res.render('user_management',{
        index_route: "gestión de usuarios"
    });
});

module.exports = router;