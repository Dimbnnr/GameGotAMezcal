// CANVAS
var canvas = document.getElementById('gameCanvas');
canvas.width = 1200;
canvas.height = 600;
var ctx = canvas.getContext('2d');


var board;
var bottles;
var gotas;
var player;
    

// Tips: poner la images adentro de un array / objeto para poder recogerlas luego con un forEach y mas facil.
var images = {
  backgroundImage:"./images/desert_BG.png"
}


function Board(){
  this.x = 0;
  this.y = 0;
  this.width = canvas.width;
  this.height = canvas.height;
  this.img = new Image() // ?
  this.img.src = images.backgroundImage;
  this.img.onload = function(){
    this.draw();
  }.bind(this); // para que se refiere a 'this' y no a la img que tiene otra ref atras..
  this.draw = function(){ 
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);  // ?
  }
}


//Main function
function startGame(){
  //se debe resetear todo!!!! 

  board = new Board();
  
}

//Esto carga cuando se abre la ventana window.onload = pour Javascript // $(document).ready(function(){ que es para Jquery
window.onload = function(){

  //   document.getElementById("start-button").onclick = function() {
  //      startGame();   
//  };


    
}


    

    
    
    
    