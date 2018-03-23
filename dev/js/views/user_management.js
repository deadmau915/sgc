////////////////////////////////////////////////////////////////////////////////
////////////////////////////////// Actions /////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

///////////////////////// modal deactivate_confirm /////////////////////////////

// function to update
$("#save_deactive").click(function(){
    var id= $("#deactivate_confirm .id").text();
    // put here function to change state to user for deactivated him
});

////////////////////////////////////////////////////////////////////////////////

///////////////////////// modal deactivate_confirm /////////////////////////////

// function to complete the forms in the modal "user_settings"
$(".user_settings").click(function(element){
    var element= $(element.target).parents(".content_table");
    
    $("#user_settings .id").text($(element).find(" > span:nth(0)").text());
    $("#user_settings .name").text($(element).find(" > span:nth(1)").text());
    $("#user_settings .surname").text($(element).find(" > span:nth(2)").text());
    state_switch($(element).find(" > span:nth(3)").text());
    
    //here function to remaining dates such the emai,phone,address
    var id= $("#user_settings .id").text();
    
    var email="here email";
    var phone="here phone";
    var address="here address";
    
    $("#user_settings .email").text(email);
    $("#user_settings .phone").text(phone);
    $("#user_settings .address").text(address);
});

// function to update roll
$("#save_settings").click(function(){
    var roll;
    var id = $("#user_settings .id").text();
    
    if($('.switch_roll_1').is(":checked")){
        roll= "investigador";
    }
    else if($('.switch_roll_2').is(":checked")){
        roll= "técnico de laboratorio";
    }
    else if($('.switch_roll_3').is(":checked")){
        roll= "auxiliar administrativo";
    }
    
    // here put the function to update the roll of the user with the var "roll"
})

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// Don't touch ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

///////////////////////// modal deactivate_confirm /////////////////////////////

// function to complete the forms in the modal "deactivate_confirm"
$(".deactivate_user").click(function(element){
    var element= $(element.target).parents(".content_table");
    
    $("#deactivate_confirm .id").text($(element).find(" > span:nth(0)").text());
    $("#deactivate_confirm .name").text($(element).find(" > span:nth(1)").text());
    $("#deactivate_confirm .surname").text($(element).find(" > span:nth(2)").text());
    $("#deactivate_confirm .profile").text($(element).find(" > span:nth(3)").text());
});

////////////////////////////////////////////////////////////////////////////////

///////////////////////////////// Switch ///////////////////////////////////////

// functionaly from switch val.
function state_switch(val){
    val= val.toLowerCase();
    if(val == "investigador") {
        $('.switch_roll_1').prop("checked",true);
        $('.switch_roll_2').prop("checked",false);
        $('.switch_roll_3').prop("checked",false);
    }
    else if(val == "técnico de laboratorio") {
        $('.switch_roll_2').prop("checked",true);
        $('.switch_roll_1').prop("checked",false);
        $('.switch_roll_3').prop("checked",false);
    }
    else if(val == "auxiliar administrativo") {
        $('.switch_roll_3').prop("checked",true);
        $('.switch_roll_1').prop("checked",false);
        $('.switch_roll_2').prop("checked",false);
    }
}

// action to switchs
$(".switch > .switch_roll_1").change(function(){
    $('.switch_roll_1').prop("checked",true);
    $('.switch_roll_2').prop("checked",false);
    $('.switch_roll_3').prop("checked",false);
});

$(".switch > .switch_roll_2").change(function(){
    $('.switch_roll_2').prop("checked",true);
    $('.switch_roll_1').prop("checked",false);
    $('.switch_roll_3').prop("checked",false);
});

$(".switch > .switch_roll_3").change(function(){
    $('.switch_roll_3').prop("checked",true);
    $('.switch_roll_1').prop("checked",false);
    $('.switch_roll_2').prop("checked",false);
});

////////////////////////////////////////////////////////////////////////////////

/////////////////////////////// pagination /////////////////////////////////////

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