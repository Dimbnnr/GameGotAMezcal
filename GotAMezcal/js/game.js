function Game (canvas){
    this.board = new Board (canvas,600, 1200),
    this.caballito1 = new Caballito(canvas,images.caballito3Image),
    this.caballito2 = new Caballito(canvas, images.caballito2Image)
    this.bottles = [],
    this.gotas =[],
    this.frames = 0,
    this.emptyBottle = new EmptyBottle(canvas)
};   

