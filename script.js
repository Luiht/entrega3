let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

// Seleccionar el elemento y el destino
const boton = document.getElementById("scroll");
const destino = document.getElementById("sobremi");
const destino2 = document.getElementById("skills")
 

//Añadir la interacción
function addSmoothScroll(button, target) {
  button.addEventListener("click", function() {
    target.scrollIntoView({ behavior: "smooth" });
  });
}

// Uso:
addSmoothScroll(boton, destino);
addSmoothScroll(boton, destino2);
