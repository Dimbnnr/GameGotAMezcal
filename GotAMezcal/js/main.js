var myGame;
var canvas;
var frames = 0;
var mezcal = 5;

var images = {
  backgroundImage: "./images/desert2.png",
  caballito1Image: "./images/caballito1.png",
  caballito2Image: "./images/Caballito2.png",
  caballito3Image: "./images/Caballito3.png",
  bottleMeteoro: "./images/meteoro-bottle.png",
  gotaBlue: "./images/gota-blue.png",
  gotaBlueChica: "./images/gota-blue-chica.png",
  dropWhite: "./images/drop-white.png",
  emptyBottle: "./images/empty-bottle.png"
}
//Esto carga cuando se abre la ventana window.onload = pour Javascript // $(document).ready(function(){ que es para Jquery
window.onload = function () {
  canvas = document.getElementById('gameCanvas').getContext('2d');
  myGame = new Game(canvas);
  keyListenerCaballito();
  interval = setInterval(updateGame, 1000 / 60);
}
// Tips: poner la images adentro de un array / objeto para poder recogerlas luego con un forEach y mas facil.


function updateGame() {
  frames++;
  myGame.board.ctx.clearRect(0, 0, 1200, 600)
  myGame.board.draw();
  myGame.caballito1.draw();
  myGame.emptyBottle.draw();
  canvas.font = "30px Arial";
  canvas.fillText(Math.floor(frames / 8), 100, 150);
  var tiempo = 120;
  var aleatorio = Math.floor(Math.random() * 3);
  if (frames % (tiempo * aleatorio) === 0) generateBottles();
  if (myGame.bottles.length > 0) {
    drawBottles(); // llamar una function que pinta las botellas..
    checkIfDropCollide();
  };
  if (frames % tiempo === 0) {
    mezcal = mezcal - 0.5;
    console.log(mezcal);
  }


}

function checkIfDropCollide() {
  myGame.bottles.forEach(function (bottle, index) {
    if (myGame.caballito1.checkCollision(bottle)) {
      var bottleReplace = new Bottle(bottle.height);
      bottleReplace.x = bottle.x
      bottleReplace.dropY = -10000;
      myGame.bottles.splice(index, 1, bottleReplace)
      // aqui puedo sumar el mezcal de mi botella y
      mezcal++;
      // dibujar una botella
      // lo que esta adrentro de la botella es un rectangulo
      // que tanto es // lo que le agregas de mezcal
      bottle.visible = false;
      console.log(mezcal);
    }
  });
}

function keyListenerCaballito() {
  document.addEventListener("keydown", function (e) {
    switch (e.keyCode) {
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

  })
};