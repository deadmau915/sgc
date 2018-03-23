function size(){
    if($(window).width()>800)   
        $(".window > .content").css("width",$(window).width()-$(".index_menu").width());
    else
        $(".window > .content").css("width","100%");
}

$(document).ready(function(){    
    size();
    $(window).resize(size);
});