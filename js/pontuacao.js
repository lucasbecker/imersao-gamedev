class Pontuacao {
    constructor(){
        this.pontos = 0;
    }
    
    exibe(){
        textAlign(RIGHT);
        fill('#FFF');
        textSize(40);
        text(parseInt(this.pontos, width - 30, 50));
    }
    adicionarPonto(){
        this.pontos = this.pontos + 0.2;
    }
}