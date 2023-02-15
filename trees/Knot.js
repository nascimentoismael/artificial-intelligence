module.exports = class Knot{
    constructor(value){
        this.value = value;
        this.left=null;
        this.right=null;
    }

    setLeft(left){
        this.left = left;
    }

    setRight(right){
        this.right = right;
    }
}