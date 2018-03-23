var express = require("express");
var router= express.Router();

router.get("/settings",function(req,res){
    res.render('settings',{
        index_route: "ajustes"
    });
});

module.exports = router;