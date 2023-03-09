module.exports = class No{
    constructor(tabuleiro){
        this.tabuleiro = tabuleiro;
        this.filhos = new Array();
    }

    adicionaFilho(filho){
        this.filhos.push(filho);
    }
}