function Bottle(height) {
    this.x = myGame.board.width;
    this.y = -70;
    this.width = 100;
    this.height = height;
    this.img = new Image();
    this.img.src = images.bottleMeteoro;
    this.img.onload = function () {
        this.draw();
    }.bind(this);

    this.dropY = this.height;
    this.visible = true;
    this.dropImg = new Image();
    this.dropImg.src = images.gotaBlue;
    this.dropImg.onload = function () {
        this.drawDrop();
    }.bind(this);

    this.drawDrop = function () {
        if (!this.visible) return;
        this.dropY++;
        if (this.dropY > 600) this.dropY = this.height - 80;
        myGame.board.ctx.drawImage(this.dropImg, this.x + 25, this.dropY, 50, 50);

    }

    this.draw = function () {
        myGame.board.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        this.x--;
    }
}




function generateBottles() {
    var height = 250;
    myGame.bottles.push(new Bottle(height));
}

function drawBottles() {
    myGame.bottles.forEach(function (bottle) {
        bottle.draw();
        bottle.drawDrop();
    });
}

