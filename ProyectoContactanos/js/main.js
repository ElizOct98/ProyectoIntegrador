// importar formulario
let form_1 = document.getElementById("form_1");
// evento presionar boton submit
form_1.addEventListener("submit", function(e){
    e.preventDefault();
    //posibles respuestas
    var posibleTexto=/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    var posibleNumero=/^[0-9]+$/;
    var posibleCorreo=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    //importar entradas
    let input_nombre = document.getElementById("nombre").value;
    let input_correo = document.getElementById("correo").value;
    let input_telefono = document.getElementById("teléfono").value;
    let input_asunto = document.getElementById("asunto").value;
    let input_mensaje = document.getElementById("mensaje").value;
    //validaciones nombre
    if(input_nombre.length > 50||input_nombre.length<0){
        alert("Error, el nombre es muy largo");
    }
    if(!posibleTexto.exec(input_nombre.value)){
        alert("El nombre solo puede contener letras y espacios");
    }
    //validación correo
    if(input_correo.length>40||input_correo.length<10){
        alert("Error, el tamaño del correo no es correcto");
    }
    if(!posibleCorreo.exec(input_correo)){
        alert("El correo no tiene el formato esperado");
    }
    //validaciones teléfono
    if(input_telefono.length > 10||input_telefono.length<8){
        alert("Error, el tamaño del teléfono no es correcto");
    }
    if(!input_telefono.match(posibleNumero)){
        alert("El teléfono solo puede contener numeros");
    }
    //validaciones asunto
    if(input_asunto.length > 30 ||input_asunto.length<0){
        alert("Error, el tamaño del asunto no es correcto");
    }
    if(!posibleTexto.exec(input_asunto.value)){
        alert("El asunto solo puede contener letras y espacios");
    }
    //validaciones mensaje
    if(input_mensaje.length > 100 ||input_mensaje.length<0){
        alert("Error, el tamaño del mensaje no es correcto");
    }
    if(!posibleTexto.exec(input_mensaje.value)){
        alert("El asunto solo puede contener letras y espacios");
    }
});
