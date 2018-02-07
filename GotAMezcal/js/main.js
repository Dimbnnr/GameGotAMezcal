var myGame;
var canvas;
var frames=0;
var images = {
  backgroundImage: "./images/desert2.png",
  caballito1Image: "./images/caballito1.png",
  caballito2Image: "./images/Caballito2.png",
  caballito3Image: "./images/Caballito3.png",
  bottleMeteoro: "./images/meteoro-bottle.png",
  gotaBlue: "./images/gota-blue.png",
  dropWhite: "./drop-white.png"
}
//Esto carga cuando se abre la ventana window.onload = pour Javascript // $(document).ready(function(){ que es para Jquery
window.onload = function () {
  canvas = document.getElementById('gameCanvas').getContext('2d');
  myGame = new Game (canvas);
  keyListenerCaballito();
  interval = setInterval(updateGame, 1000 / 60);
}
// Tips: poner la images adentro de un array / objeto para poder recogerlas luego con un forEach y mas facil.


function updateGame() {
  
  frames++;
  myGame.board.draw();
  myGame.caballito1.draw();
  canvas.font = "30px Arial"; 
  canvas.fillText(Math.floor(frames / 8), 100, 150); 
  var tiempo = 120;
  var aleatorio = Math.floor(Math.random() * 3);
  if(frames%(tiempo*aleatorio)===0) generateBottles();
  if(myGame.bottles.length >0){
    
  drawBottles();// llamar una function que pinta las botellas..
  } 
}

function keyListenerCaballito(){
document.addEventListener("keydown", function(e){
  switch(e.keyCode){
    case 38:
    myGame.caballito1.moveUp();
      break;
    case 40:
    myGame.caballito1.moveDown();
      break;
    case 37:
    myGame.caballito1.moveLeft();
      break;
    case 39:
    myGame.caballito1.moveRight();
      break;
         }
      
})};

