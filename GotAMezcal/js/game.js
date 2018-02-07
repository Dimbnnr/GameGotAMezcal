function Game (canvas){
    this.board = new Board (canvas,600, 1200),
    this.caballito1 = new Caballito(canvas),
    this.bottles = [],
    this.gotas =[],
    this.frames = 0
};   