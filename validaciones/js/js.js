var nombre= document.getElementById("nom");
const form = document.getElementById("form1");
var msj =document.getElementById("mensajes");
form.addEventListener("submit" , e=> {
    e.preventDefault();
    let mensajesmostrar="";
    let entrar = false;

    if(nombre.value.lenght <4 || nombre.value.lenght > 7){
     mensajesmostrar +=" la longitud no es correcta <br>";
     entrar = true;

    }


var letraInicial= nombre.value.charAt(0);
if(!esMayuscula(letraInicial)){
    mensajesmostrar +="la primera letra es minuscula <br>";
    entrar = true;
}

if(entrar)
{
    msj.innerHTML = mensajesmostrar;
}
else{
    msj.innerHTML = "formulario enviado";
}
})

function esMayuscula(letra){
    return letra == letra.toUpperCase();
}