class Stack {
    // #stack = [];
    // can be used in place of the constructor to keep list private

    constructor() {
        this.stack = [];
    }

    push(item) {
        return this.stack.push(item);

        // don't need to return for this function
    }

    pop() {
        return this.stack.pop();

        // const stack = this.#stack;
        // return stack.length ? stack.pop() : null;
    }

    peek() {
        return this.stack[this.stack.length - 1];

        // return this.stack.at(-1); 
        // does same thing, uses the more current method
    }


} 

const stack = new Stack();

console.log(stack.push('hi'));
console.log(stack.peek());
console.log(stack);

