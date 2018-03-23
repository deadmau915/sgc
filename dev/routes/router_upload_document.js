var express = require("express");
var router= express.Router();

router.get("/upload_document",function(req,res){
    res.render('upload_document',{
        index_route: "gestión de documentos"
    });
});

module.exports = router;