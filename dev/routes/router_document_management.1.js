var express = require("express");
var router= express.Router();

router.get("/document_management",function(req,res){
    res.render('document_management',{
        index_route: "gestión de documentos"
    });
});

module.exports = router;