function preload(){
    imagemCenario = loadImage("imersao-gamedev/img/cenario/floresta.png");
    imagemGameOver = loadImage("imersao-gamedev/img/assets/game-over.png");
    imagemPersonagem = loadImage("imersao-gamedev/img/personagem/correndo.png");
    imagemInimigo = loadImage("imersao-gamedev/img/inimigos/gotinha.png");
    imagemInimigoGrande = loadImage("imersao-gamedev/img/inimigos/troll.png");
    imagemInimigoVoador = loadImage("imersao-gamedev/img/inimigos/gotinha-voadora.png");
  
    imagemTelaInicial = loadImage("imersao-gamedev/img/assets/telainicial.png");
    fonteTelaInicial = loadFont("imersao-gamedev/img/assets/fonteTelaInicial.otf");

    trilha = loadSound("imersao-gamedev/sound/trilha_jogo.mp3");
    somDoPulo = loadSound("imersao-gamedev/sound/somPulo.mp3"); 
  }