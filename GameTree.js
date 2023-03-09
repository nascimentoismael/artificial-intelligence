const No = require("./No");

module.exports = class GameTree{

    constructor(tabuleiro){
        this.raiz = new No(tabuleiro);
        this.gerarArvore(this.raiz,'O');
    }

    gerarArvore(noAtual,jogador) {
        if (!noAtual) {
            return
        }    

        const tabuleiroAtual = noAtual.tabuleiro;
        let noFilho, tabuleiroFilho;

        tabuleiroAtual.forEach((lugarCheio,index) => {
            if (!lugarCheio) //se os lugares não estiverem cheios
            {  
                tabuleiroFilho = [...tabuleiroAtual];
                tabuleiroFilho[index] = jogador;
                noFilho = new No(tabuleiroFilho);
                noAtual.adicionaFilho(noFilho);
                this.gerarArvore(noFilho,(jogador=='X')?'O':'X');
            }
        });
    }
}