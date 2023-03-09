const GameTree = require("./GameTree");

const primeiroTabuleiro = ['x','o','','x','o','x','o','','x'];
const primeiraJogada = new GameTree(primeiroTabuleiro);
console.log(primeiraJogada);
