const email =document.getElementById("mail");
email.addEventListener("input",function(event){

    if(email.validity.typeMismatch){
        email.setCustomValidity("Se esperaba una direccion de correo electronico");
    }else{
        email.setCustomValidity("");
    }



})



function enviarcorreo(){

    let condicion=document.getElementsByClassName("form-group info");
    console.log(condicion[0].innerHTML )



}

    






