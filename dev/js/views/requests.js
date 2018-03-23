////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Actions /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/////////////////////////// modal confirm request //////////////////////////////
// function to update
$("#confirm_request #confirm").click(function(){
    var id=$("#confirm_request .id").text();
    // put here function to confirm him
})

////////////////////////////////////////////////////////////////////////////////

/////////////////////////// modal confirm request //////////////////////////////

// funtion to update
$("#cancel_request #confirm").click(function(){
    var id=$("#cancel_request .id").text();
    // put here function to cancel him
})

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Don't touch ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/////////////////////////// modal confirm request //////////////////////////////

// function to complete the forms in the modal "confirm_request"
$(".confirm_request").click(function(element){
    var element= $(element.target).parents(".content_table");
    
    $("#confirm_request .id").text($(element).find(" > span:nth(0)").text());
    $("#confirm_request .name").text($(element).find(" > span:nth(1)").text());
    $("#confirm_request .surname").text($(element).find(" > span:nth(2)").text());
    $("#confirm_request .profile").text($(element).find(" > span:nth(3)").text());
    $("#confirm_request .date").text($(element).find(" > span:nth(4)").text());
});

////////////////////////////////////////////////////////////////////////////////

/////////////////////////// modal cancel request ///////////////////////////////

// function to complete the forms in the modal "cancel_request"
$(".cancel_request").click(function(element){
    var element= $(element.target).parents(".content_table");
    
    $("#cancel_request .id").text($(element).find(" > span:nth(0)").text());
    $("#cancel_request .name").text($(element).find(" > span:nth(1)").text());
    $("#cancel_request .surname").text($(element).find(" > span:nth(2)").text());
    $("#cancel_request .profile").text($(element).find(" > span:nth(3)").text());
    $("#cancel_request .date").text($(element).find(" > span:nth(4)").text());
});

////////////////////////////////////////////////////////////////////////////////

//////////////////////////////// pagination ////////////////////////////////////

var cont_pag=-1;
var dates= 10;
var cont_dates= $("#settings_table .content_table").length;
$("#settings_table .content_table").hide();

// next pag
function next(){
    $("#settings_table .content_table").hide();
    cont_pag= cont_pag+1;
    for(var i=0;i<dates;i++){
        $("#settings_table .content_table:nth("+((cont_pag*dates)+i)+")").show();
    }
    console.log(cont_pag)
}

// prev pag
function prev(){
    $("#settings_table .content_table").hide();
    cont_pag=cont_pag-1;
    for(var i=0;i<dates;i++){
        $("#settings_table .content_table:nth("+((cont_pag*dates)+i)+")").show();
    }
    console.log(cont_pag)
}

next();

$("#next").click(function(){
    if((cont_dates/dates)-1 > cont_pag){
        next();
    }
});

$("#prev").click(function(){
    if(cont_pag>0){
        prev();
    }
});

////////////////////////////////////////////////////////////////////////////////