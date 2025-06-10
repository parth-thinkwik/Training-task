// const checkarray = function(arr){
//     if (Array.isArray(arr)){
//         console.log("this is array");       
//     }else{
// console.log("this is not array");
//     }   
// }

// // checkarray([1,2,3])
// const arr = [1,2,3,4]
// const a1 = arr.filter((item,index)=>{arr.indexOf(item) === index});
// console.log(a1);


class car{
    constructor(make,model,year){
        this.make = make;
        this.year = year;
        this.model = model;
    }

    di(){
            console.log(`${this.year}`);
    }
}

class ElectricCar extends car {
    constructor(make,model,year,bettrylife){
        super(make,model,year);
        this.bettrylife = bettrylife;
    }
    d(){
        console.log(`${this.make} ${this.model} ${this.year} ${this.battrylife}`);
    }
}

let tesla = new ElectricCar("tesla","model 5",2022,24);

// tesla.di();
// tesla.d();

const arraySum = function(arr){
    let sum = 0;
    for(let i of arr){
        sum+=i
    }
    return sum;
}

// console.log(arraySum([1,2,3]));
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;

        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    insert(index, val) {
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(val);

    if (index === 0) {
        newNode.next = this.head;
        this.head = newNode;
        if (this.length === 0) this.tail = newNode;
    } else if (index === this.length) {
        this.tail.next = newNode;
        this.tail = newNode;
    } else {
        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        newNode.next = prev.next;
        prev.next = newNode;
    }

    this.length++;
    return true;
}

delete(index) {
    if (index < 0 || index >= this.length) return undefined;

    if (index === 0) {
        const removed = this.head;
        this.head = this.head.next;
        if (this.length === 1) this.tail = null;
        this.length--;
        return removed;
    }
    let prev = this.head;
    
    for (let i = 0; i < index - 1; i++) {
        prev = prev.next;        
    }
    console.log(prev);

    const removed = prev.next;
    prev.next = removed.next;

    if (index === this.length - 1) this.tail = prev;

    this.length--;
    return removed;
}
}

const list = new singlyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
// console.log(list);
list.pop();
// console.log(list);
list.insert(3)
// console.log(list);
list.delete(1);
console.log(list);




const reverceArray = function(arr){
    let reverced = [];
    for(let i = arr.length-1; i>=0;i-- ){
        reverced.push(arr[i]);
    }
    return reverced;
}

// console.log(reverceArray([1,2,3,4,5]));


const intersectionOfArray = function(arr1,arr2){
    let matchedElements = [];

    for(let i of arr1){
        for(let j of arr2){
            if(i == j){
                matchedElements.push(i)
            }
        }
    }
    return matchedElements;
}

// console.log(intersectionOfArray([1,2,6],[1,2,3,5]));

const flattanArray = function(arr){
    let newArr = [];
    for(let i of arr){
        if(Array.isArray(i)){
            newArr = newArr.concat(flattanArray(i))
        }else{
            newArr.push(i);
        }
    }
    return newArr;
}

// console.log(flattanArray([1,2,[3,4]]));

const missingNumber = function(arr,n){
    const totalSum = (n*(n+1))/2;
    const arraySum = arr.reduce((acc,num)=>acc+num,0);
    return totalSum - arraySum;
}

// console.log(missingNumber([1,2,3,4,5,6,7,8,9,10,12],12));

const rotateArray = function(arr,k){
    const n = arr.length    
    return arr.slice(n - k).concat(arr.slice(0,n - k));
    }

// console.log(rotateArray([1,2,3,4,5],2));

const isPallindrome = function(arr){
    let reverced = reverceArray(arr);
    console.log(reverced);
    
    if(arr === reverced){
        console.log("pallindrome");
    }else{
        console.log("not pallindrome");   
    }
}
// isPallindrome([1,2,3,2,1])