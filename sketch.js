let imagemCenario;
let imagemPersonagem;
let cenario;
let trilha;
let personagem;

function preload(){
  imagemCenario = loadImage("img/cenario/floresta.png");
  imagemPersonagem = loadImage("img/personagem/correndo.png");
  trilha = loadSound("sound/trilha_jogo.mp3");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 1);
  personagem = new Personagem(imagemPersonagem);
  frameRate(40);
  trilha.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();

  // A ordem de declaração é a mesma em que é "desenhado" e sobreposto
  
  //imagem(variavelImagem, posX, posY, largImg, AltuImg, CordXdaImg, CordYdaImg, TamanhoPixX a partir da CordXda Img, TamanhoPixY) 
}