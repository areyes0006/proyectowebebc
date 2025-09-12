//Array(Arreglo) para las imagenes, aquí van a poner las imagenes//
// de cada uno ( ES INDIVIDUAL) //

//fotos de Unsplash (ajustadas con w=400&h=300&fit=crop)//

const imagenes = [
  "https://images.unsplash.com/photo-1616897390105-0d9fc21a0745?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  "https://images.unsplash.com/photo-1554324042-88b7823c4c43?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1584765844382-5521d1a0e534?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  "https://images.unsplash.com/photo-1713234142061-a7087ab5302e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.pexels.com/photos/2574631/pexels-photo-2574631.jpeg",
  
  "https://images.unsplash.com/photo-1587818658881-3015ef265894?q=80&w=1450&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

//Seleccion de elementos // 

const boton = document.getElementById("btn-cambiar");
const imagenCard = document.getElementById("card-img");
const textoCard = document.getElementById("card-text");

//contador de las imagenes//

let indice = 0;

//evento del click//
boton.addEventListener("click", () => {
 
 //lo siguiente es para que avance la foto //
  indice++;

//el siguiente if es para que cuando llegue al final se regrese al inicio//
  
  if (indice >= imagenes.length) {
    indice = 0;
  }
      // Cambiar imagen y texto //
imagenCard.src = imagenes[indice];
  textoCard.textContent = `Mostrando imagen ${indice + 1} de ${imagenes.length}`;
});