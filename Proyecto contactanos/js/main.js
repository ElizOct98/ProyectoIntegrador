const email =document.getElementById("mail");
email.addEventListener("input",function(event){

    if(email.validity.typeMismatch){
        email.setCustomValidity("Se esperaba una direccion de correo electronico");
    }else{
        email.setCustomValidity("");
    }



})



