class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublylinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

       insertLast(val) {
        let newNode = new Node(val);
            if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.prev = this.tail; 
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
        }
    findItem(data){
        let curr = this.head;
       while(curr){
        if (data === curr.data){
            return curr;
        }else{
            curr = curr.next;
        }
       }
       return null;
    }

    insertSpecific(index,data){
        if(index < 0 || index > this.length) return false;
        const newNode = new Node(data);

    if (index === 0) {
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (index === this.length) {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index-1; i++) {
        current = current.next;
      }
       newNode.next = current;
      newNode.prev = current.prev;
      current.prev.next = newNode;
      current.prev = newNode;
    }     
        this.length++;
        return true;
    }

    deleteNode(index){
        if(index < 0 || index > this.length) return null;

        let current = this.head;
        while(0 < index){
            current = current.next;
        }
        const data = current.data;
        if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else if (current === this.head) {
      this.head = current.next;
      this.head.prev = null;
    } else if (current === this.tail) {
      this.tail = current.prev;
      this.tail.next = null;
    } else {
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    this.length--;
    return data;
    }
}

const newList = new doublylinkedList();

newList.insertLast(10);
// console.log(newList);

newList.insertLast(20);
// console.log(newList);

newList.insertSpecific(2,300);
console.log(newList);
newList.deleteNode(1);
console.log(newList);

const found = newList.findItem(20);
// console.log(found);

