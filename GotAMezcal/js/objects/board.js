function Board(ctx,height,width){
  this.x = 0;
  this.y = 0;
  this.width = width;
  this.height = height;
  this.ctx=ctx;
  this.img = new Image() // ?
  this.img.src = images.backgroundImage;
  this.img.onload = function(){
    this.draw();
  }.bind(this); // para que se refiere a 'this' y no a la img que tiene otra ref atras..
  this.draw = function(){ 
    console.log("printing")
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);  // ?
  }
}

