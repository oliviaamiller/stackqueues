class LinkedListNode {

    constructor(value) {
        // shows the value of the node
       this.value = value;

       // a node getting put into the list always has a next of null
       this.next = null;
    }

    add(node) {
        // is there a next? if there's not ... 
        if (!this.next) {

        // then the following node can be the new next
            this.next = node;
        } else {
        
        // if there is then move on to the current next node
            this.next.add(node);
        }
    } 

}