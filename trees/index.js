const Knot = require('./Knot');
const Tree = require('./Tree');

const A = new Knot('A');
const B = new Knot('B');
const C = new Knot('C');
const D = new Knot('D');
const E = new Knot('E');
const F = new Knot('F');
const G = new Knot('G');
const H = new Knot('H');
const I = new Knot('I');

A.setLeft(B);
A.setRight(C);

B.setLeft(D);

C.setLeft(E);
C.setRight(F);

D.setRight(G);

E.setLeft(H);
E.setRight(I);

const treeA = new Tree(A);

//treeA.preOrder(treeA.roots);
//treeA.inOrder(treeA.roots);
treeA.postOrder(treeA.roots);