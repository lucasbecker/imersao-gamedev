function setup() {
  createCanvas(windowWidth, windowHeight); 
  frameRate(40);
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  jogo.setup();
  cenas = {
    jogo,
    telaInicial,
  };
  botaoGerenciador = new BotaoGerenciador("Iniciar", width/2, height/4*5);
}

function keyPressed(){
  jogo.keyPressed(key);
}

function draw() {
  cenas[cenaAtual].draw();
  // A ordem de declaração é a mesma em que é "desenhado" e sobreposto
  //imagem(variavelImagem, posX, posY, largImg, AltuImg, CordXdaImg, CordYdaImg, TamanhoPixX a partir da CordXda Img, TamanhoPixY) 
}