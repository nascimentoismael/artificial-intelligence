module.exports = class Tree{
    constructor(roots){
        this.roots = roots;
    }

    preOrder(knot){
        if (knot != null) {
            console.log(knot.value);
            knot.left && this.preOrder(knot.left);
            knot.right && this.preOrder(knot.right);
        }
    }

    inOrder(knot){
        if (knot != null) {
            knot.left && this.inOrder(knot.left);
            console.log(knot.value);
            knot.right && this.inOrder(knot.right);
        }
    }

    postOrder(knot){
        if (knot != null) {
            knot.left && this.postOrder(knot.left);
            knot.right && this.postOrder(knot.right);
            console.log(knot.value);
        }
    }

    depthSearch(order){
        switch (order) {
            case 1:
                this.preOrder(this.roots)
                break;
            case 2:
                this.inOrder(this.roots)
                break;   
            case 3:
                this.postOrder(this.roots)
                break;       
            default:
                this.preOrder(this.roots)
                break;
        }
    }
}