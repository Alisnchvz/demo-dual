//traer a los objetos del html
const enc = document.getElementById('enc-enc');
const puertas = document.getElementById('pue-enc');
const cocinas = document.getElementById('coc-enc');
const closets = document.getElementById('clo-enc');
const inputcajones = document.getElementById('cajns');
const inputalto = document.getElementById('alto');
const inputancho = document.getElementById('ancho');

function quitarCC(e){
    inputcajones.style.display = "none";
    puertas.style.color= '#ff003cff';
    cocinas.style.color= '#00000cff';
    closets.style.color= '#00000cff';
}
puertas.addEventListener('click' ,quitarCC);

cocinas.addEventListener('click', () => {
    inputcajones.style.display = "block";
    cocinas.style.color= '#ff003cff';
    puertas.style.color= '#00000cff';
    closets.style.color= '#00000cff';
  });
closets.addEventListener('click', () => {
    inputcajones.style.display = "block";
    closets.style.color= '#ff003cff';
    puertas.style.color= '#00000cff';
    cocinas.style.color= '#00000cff';
  });

