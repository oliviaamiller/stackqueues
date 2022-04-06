class PersonTreeNode {
    constructor(person) {
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
     
    add(node) {
        if (this.value > node.value) {
        if (!this.left) {
          this.left = node;
          return;
        } else {
          this.left.add(node);
           }
      } else if (this.value < node.value) {
        if (!this.right) {
           this.right = node;
          return;
        } else {
            this.right.add(node);
        } 
      }
    }

    findPerson(name) {
     ?

}
}

const Jones = new PersonTreeNode({name: 'Jones'});
const Brook = new PersonTreeNode({name: 'Brook'});
const Smith = new PersonTreeNode({name:'Smith'});
const Nelson = new PersonTreeNode({name:'Nelson'});

// Jones will be the root of the tree:
console.log(Jones);
Jones.add(Brook);
Jones.add(Smith);
console.log(Jones);


let person = Jones.findPerson('Jones');

console.log(person);

let person2 = Jones.findPerson('Brook');

console.log(person2);
  
