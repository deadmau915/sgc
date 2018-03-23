////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////// Action ///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function to save register
$("#accept").click(function(){
    
    var name = $("#name").val(),
        surname = $("#surname").val(),
        id = $("#id").val(),
        phone = $("#phone").val(),
        address = $("#address").val(),
        email = $("#email").val(),
        password = $("#password").val(),
        confirm_password = $("#confirm_password").val(),
        profile = $("#profile").val();
    
    if( v_alphabet(name,"Nombre(s)","#name") &&
        v_alphabet(surname,"Apellido(s)","#surname") &&
        v_numbers(id,"Numero de documento","#id") &&
        v_numbers(phone,"Numero de telefono","#phone") &&
        v_address(address,"Direccion","#address") &&
        v_email(email,"Email","#email") &&
        v_password(password,"#password") &&
        v_confirm_password(password,confirm_password,"#confirm_password")){
            
        // here put the function to create user  
        
        $('<small class="form-text success">Este atento a su correo electrónico, le llegara una notificacion cuando el director apruebe o rechace  su cuenta.</small>').insertAfter("#accept");
    }
});

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
///////////////////////////////// Validations //////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function to validate the alphabet
function v_alphabet(str,msj,out_msg){
    var patt =  /^([A-Za-zñÁÉÍÓÚáéíóú]+[\s]*)+$/;
    if(patt.test(str)){
        $(out_msg).siblings("small").remove();
        return true;
    }
    else{
        $(out_msg).siblings("small").remove();
        $(out_msg).focus();
        $('<small class="form-text danger">'+msj+' incorrect@, inténtelo nuevamente.</small>').insertAfter(out_msg);
        return false;
    }
}

function v_numbers(str,msj,out_msg){
    var patt =  /^([0-9]+)$/;
    if(patt.test(str)){
        $(out_msg).siblings("small").remove();
        return true;
    }
    else{
        $(out_msg).siblings("small").remove();
        $(out_msg).focus();
        $('<small class="form-text danger">'+msj+' incorrect@, inténtelo nuevamente.</small>').insertAfter(out_msg);
        return false;
    }
}

function v_address(str,msj,out_msg){
    var patt =  /^([A-Za-z0-9ñÁÉÍÓÚáéíóú\s\-\.\,\#\_\/\(\)]+)$/;
    if(patt.test(str)){
        $(out_msg).siblings("small").remove();
        return true;
    }
    else{
        $(out_msg).siblings("small").remove();
        $(out_msg).focus();
        $('<small class="form-text danger">'+msj+' incorrect@, inténtelo nuevamente.</small>').insertAfter(out_msg);
        return false;
    }
}

function v_email(str,msj,out_msg){
    
    //here put function to verify if str "email" exist and return boolean
    var exist_str = false;
    
    var patt =  /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(patt.test(str) && !exist_str){
        $(out_msg).siblings("small").remove();
        return true;
    }
    else if(exist_str){
        $(out_msg).siblings("small").remove();
        $(out_msg).focus();
        $('<small class="form-text danger">'+msj+' ya existe, inténtelo nuevamente.</small>').insertAfter(out_msg);
        return false;
    }
    else{
        $(out_msg).siblings("small").remove();
        $(out_msg).focus();
        $('<small class="form-text danger">'+msj+' incorrect@, inténtelo nuevamente.</small>').insertAfter(out_msg);
        return false;
    }
}

function v_password(str,out_msg){
    var patt = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,30}$/;
    if(patt.test(str)){
        $(out_msg).siblings("small").remove();
        return true;
    }
    else{
        $(out_msg).siblings("small").remove();
        $(out_msg).focus();
        $('<small class="form-text danger">La contraseña debe contener: <br> - Minimo 8 caracteres<br>- Maximo 30<br>- Al menos una letra mayúscula<br>- Al menos un dígito<br>- No espacios en blanco<br>- Al menos 1 caracter especial</small>').insertAfter(out_msg);
        return false;
    }
}

function v_confirm_password(password,test,out_msg){
    if(password == test){
        $(out_msg).siblings("small").remove();
        return true;
    }
    else{
        $(out_msg).siblings("small").remove();
        $(out_msg).focus();
        $('<small class="form-text danger">Las contraseñas no coinciden, inténtelo nuevamente.</small>').insertAfter(out_msg);
        return false;
    }
}

////////////////////////////////////////////////////////////////////////////////