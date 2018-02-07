function Gota(canvas, posX, posY, width, height){
    this.ctx = canvas;
    this.posX = posX;
    this.posY = posY; //250;
    this.width = width; //50
    this.height = height; //65
    this.img = new Image();
    this.img.src = images.gotaBlue;
    this.img.onload = function () {
        this.draw();
    }.bind(this);
    this.draw = function () {
        this.ctx.drawImage(this.img, this.posX, this.posY, this.width, this.height);
        this.x--;
        this.y++;
    }
}


