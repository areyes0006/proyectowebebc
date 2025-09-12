//desafio de las cajas//

//desafio 1: cambiar el titulo .getElementById//

document.getElementById("btn-titulo").addEventListener("click",()=>
{
  const titulo =
        document .getElementById("titulo");
  titulo.textContent = "¡Alexia Reyes!";
  
});

// Desafio 2 cambiar el color de las cajas getElementByClassName//

document.getElementById("btn-cajas").addEventListener("click",()=>
{
  const cajas=
  document.getElementsByClassName("caja");
 for(let i = 0; i < cajas.length; i ++)
   {
     cajas[i].style.backgroundColor ="lightgreen";
   }
});

//Desafio 3//
document.getElementById("btn-primera").addEventListener("click",()=>
 {
  const primeracaja=
        document.querySelector(".caja");
  
  primeracaja.style.backgroundColor = "lightBlue";
 });

//Desafio 4//

document.getElementById("btn-bordes").addEventListener("click",()=>
 {
  const cajas =
        document.querySelectorAll(".caja");
  cajas.forEach(caja=>{
    caja.style.border = "6px solid red"
  });
});