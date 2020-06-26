function preload(){
    imagemCenario = loadImage("img/cenario/floresta.png");
    imagemGameOver = loadImage("img/assets/game-over.png");
    imagemPersonagem = loadImage("img/personagem/correndo.png");
    imagemInimigo = loadImage("img/inimigos/gotinha.png");
    imagemInimigoGrande = loadImage("img/inimigos/troll.png");
    imagemInimigoVoador = loadImage("img/inimigos/gotinha-voadora.png");
    imagemTelaInicial = loadImage("img/assets/coracao.png");
    imagemTelaInicial = loadImage("img/assets/telaInicial.png");
    
    fonteTelaInicial = loadFont("img/assets/fonteTelaInicial.otf");

    fita = loadJSON('fita/fita.json');

    trilha = loadSound("sound/trilha_jogo.mp3");
    somDoPulo = loadSound("sound/somPulo.mp3"); 
  }