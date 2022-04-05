class Stack {

    constructor() {
        this.stack = [];
    }

    push(item) {
        return this.stack.push(item);
    }

    pop() {
        return this.stack.pop();
    }

    peek() {
        return this.stack[this.stack.length - 1];
    }


} 

const stack = new Stack;

console.log(stack.push('hi'));
console.log(stack.peek());
console.log(stack);

