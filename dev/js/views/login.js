////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Action ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function to start login
$("#accept").click(function(){
    
    var email = $("#email").val();
    
    // function to require the password of the email
    // var password = real password
    // var test_password = the password that the user put
    
    var password = "ejemplo";
    var test_password = $("#password").val();
    
    if(v_password(password,test_password)){
        // here put the function to login action   
    }
})

// function to send email for generate password

$("#send").click(function(){
    
    var email = $("#email_to_remember").val();
    // function to confirm if the email exist and save in var email_exist as a boolean
    var email_exist = true;
    
    if(v_email_exist(email_exist)){
        // here put the function to login action   
    }
})

// function to restart the input
$("#cancel_remember_pass").click(function(){
    $("#email_to_remember").siblings("small").remove();
    $("#email_to_remember").val('');
})

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Validations //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function to validate the password in login
function v_password(password,test){
    if(password == test){
        return true;
    }
    else{
        $("#email").siblings("small").remove();
        $('<small class="form-text danger"> Email o contraseña incorrecta, inténtelo nuevamente.</small>').insertAfter("#email");
        return false;
    }
}

function v_email_exist(exist){
    if(exist){
        $("#email_to_remember").siblings("small").remove();
        $('<small class="form-text success">Se ha enviado un mensaje a tu correo.</small>').insertAfter("#email_to_remember");
        return true;
    }
    else{
        $("#email_to_remember").siblings("small").remove();
        $('<small class="form-text danger">Este email no existe, inténtelo nuevamente</small>').insertAfter("#email_to_remember");
        return false;
    }
}
////////////////////////////////////////////////////////////////////////////////