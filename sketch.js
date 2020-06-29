function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(40); //controle de frames velocidadedo fundo
  somDojogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  //cenaAtual = 'jogo';
  cenas = {
    jogo,
    telaInicial
  };
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
}
