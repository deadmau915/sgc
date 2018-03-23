// Function to add class and highlight the option choossed
$(document).ready(function(){
    if(in_route == "gestión de documentos")
        $(".index_menu > ul > a:nth(0)").addClass("selected");
    else if(in_route == "gestión de usuarios")
        $(".index_menu > ul > a:nth(1)").addClass("selected");
    else if(in_route == "solicitudes de cuenta")
        $(".index_menu > ul > a:nth(2)").addClass("selected");
    else if(in_route == "ajustes")
        $(".index_menu > ul > a:nth(3)").addClass("selected");
});