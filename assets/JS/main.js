window.onload = function() { document.body.classList.remove('is-preload'); }
window.ontouchmove = function() { return false; }
window.onorientationchange = function() { document.body.scrollTop = 0; }

let monProfil= document.querySelector("#monProfil")
let mesProjets= document.querySelector("#mesProjets")
let popup = document.querySelector('.popup')
let parcours = document.querySelector('.parcours')
let retour = document.querySelector('.retour')
let return_ = document.querySelector('.return')


 monProfil.onclick = ()=>{
parcours.style.display = "block";
 }
 mesProjets.onclick = ()=>{
    popup.style.display = "block";
    parcours.style.display = "none";
 }
 retour.onclick = () =>{
    popup.style.display = "none"
   }
return_.onclick = () =>{
    parcours.style.display = "none"
   }

window.onclick = function (event) {
    if (event.target.className === "parcours") {
      event.target.style.display = "none";
    }
  };
