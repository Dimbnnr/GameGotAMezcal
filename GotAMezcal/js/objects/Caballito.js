function Caballito(ctx){
    this.posX = 100;
    this.posY = 300;
    this.speedX = 30;
    this.speedY = 30;
    this.width = 40;
    this.height = 65;
    this.speed;
    this.ctx =ctx
    this.img = new Image();
    this.img.src = images.caballito1Image;
    this.img.onload = function(){
        this.draw();
    }.bind(this);
    this.draw = function(){
        this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
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