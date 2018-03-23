var express = require("express");
var router= express.Router();

router.get("/requests",function(req,res){
    res.render('requests',{
        index_route: "solicitudes de cuenta"
    });
});

module.exports = router;