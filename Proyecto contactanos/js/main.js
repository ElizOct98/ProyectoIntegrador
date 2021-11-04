const email =document.getElementById("mail");
email.addEventListener("input",function(event){

    if(email.validity.typeMismatch){
        email.setCustomValidity("Se esperaba una direccion de correo electronico");
    }else{
        email.setCustomValidity("");
    }



})

function crearlink(){
    let anclacorreo=document.getElementById("correo");
    anclacorreo.href =`mailto:jart2607@gmail.com?&subject=${enviarcorreo1()}&body=${enviarcorreo()}`;
    

    
}


function enviarcorreo(){
    var texto1 =document.getElementById("texto").value
    return texto1; 


    

}

function enviarcorreo1(){
    let asunto3 = document.getElementById("asunto1").value
    return asunto3;

}







