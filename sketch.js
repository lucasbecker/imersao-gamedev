let imagemCenario;
let imagemPersonagem;
let imagemInimigo;

let cenario;
let trilha;
let somDoPulo;
let personagem;
let inimigo;

const matrizPersonagem = [
  [0,0],
  [220,0],
  [440,0],
  [660,0],
  [0,270],
  [220,270],
  [440,270],
  [660,270],
  [0,540],
  [220,540],
  [440,540],
  [660,540],
  [0,810],
  [220,810],
  [440,810],
  [660,810],
]

const matrizInimigo = [
  [0, 0],
  [105, 0],
  [210, 0],
  [315, 0],
  [0, 104],
  [105, 104],
  [210, 104],
  [315, 104],
  [0, 208],
  [105, 208],
  [210, 208],
  [315, 208],
  [0, 312],
  [105, 312],
  [210, 312],
  [315, 312],
  [0, 409],
  [105, 409],
  [210, 409],
  [315, 409],
  [0, 503],
  [105, 503],
  [210, 503],
  [315, 503],
  [0, 609],
  [105, 609],
  [210, 609],
  [315, 609],
]

function preload(){
  imagemCenario = loadImage("img/cenario/floresta.png");
  imagemPersonagem = loadImage("img/personagem/correndo.png");
  imagemInimigo = loadImage("img/inimigos/gotinha.png");

  trilha = loadSound("sound/trilha_jogo.mp3");
  somDoPulo = loadSound("sound/somPulo.mp3"); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 1);
  personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 110, 135, 220, 270);
  inimigo = new Inimigo(matrizInimigo, imagemInimigo, width-52, 52, 52, 104, 104);

  frameRate(40);
  trilha.loop();
}

function keyPressed(){
  if(key === 'ArrowUp'){
    personagem.pula();
    somDoPulo.play();
  }
}

function draw() {
  cenario.exibe();
  cenario.move();

  personagem.exibe();
  personagem.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if(personagem.estaColidindo(inimigo)){
    //console.log('colidiu');
    noLoop();
  }

  // A ordem de declaração é a mesma em que é "desenhado" e sobreposto
  
  //imagem(variavelImagem, posX, posY, largImg, AltuImg, CordXdaImg, CordYdaImg, TamanhoPixX a partir da CordXda Img, TamanhoPixY) 
}