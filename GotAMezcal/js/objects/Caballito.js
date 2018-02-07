
function Caballito(canvas){
    this.posX = 100;
    this.posY = 300;
    this.speedX = 30;
    this.speedY = 30;
    this.width = 40;
    this.height = 65;
    this.speed;
    this.ctx = canvas;
    this.img = new Image();
    this.img.src = images.caballito3Image;
    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
    }
    this.checkCollision = function(bottle){
        return (this.posX < bottle.x + 50) &&
                (this.posX + this.width > bottle.x + 50) &&
                (this.posY < (bottle.dropY-130) + bottle.height - 80) &&
                (this.posY + this.height > (bottle.dropY))
    }
}



//Funciones para los movimientos de la nave
Caballito.prototype.moveUp = function(){
    if(this.posY > 0){
      this.posY -= this.speedY;
    }else{
      return;
    }
  }
  Caballito.prototype.moveDown = function(){
    if(this.posY < myGame.board.height - this.height){
      this.posY += this.speedY;
    }else{
      return;
    }
  }
  Caballito.prototype.moveLeft = function(){
    if(this.posX > 0){
      this.posX -= this.speedX;
    }else{
      return;
    }
  }
  Caballito.prototype.moveRight = function(){
    if(this.posX < myGame.board.width - this.width){
      this.posX += this.speedX;
    }else{
      return;
    }
  }