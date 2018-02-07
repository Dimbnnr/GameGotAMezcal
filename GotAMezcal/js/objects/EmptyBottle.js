function EmptyBottle(ctx){
    this.x = 1050;
    this.y = 315;
    this.width = 105;
    this.height = 265;
    this.ctx=ctx;
    this.img = new Image();
    this.img.src = images.emptyBottle;
    this.img.onload = function () {
        this.draw();
    }.bind(this);    
    this.draw = function () {
        myGame.board.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    this.ctx.fillRect(1055, 312, 100, 240);
    this.ctx.fillStyle = "blue";
}

