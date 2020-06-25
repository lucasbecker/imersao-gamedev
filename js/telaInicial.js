class TelaInicial {
    constructor(){

    }

    draw(){
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto(){
        textFont(fonteTelaInicial);
        textAlign(CENTER)
        textSize(50);
        text('As Aventura De', width/2, height/5*2);
        textSize(150);
        text('HipstA', width/2, height/5*3)
    }

    _botao(){
        botaoGerenciador.y = height / 5 * 4;
        botaoGerenciador.draw();
    }
}