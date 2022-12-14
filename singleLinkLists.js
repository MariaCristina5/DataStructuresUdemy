//piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//single link lists defined
class SinglyLinkedLists{
    constructor(){
        this.head = null;
        this.length = 0;
        this.tail = null;
    }
    
    //adds a node at the end of the list
    push(val){
        let newNode = new Node(val) 
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this 
    }
    
    //removes a node from the end of the list
    pop(){
        if(!this.head) return undefined
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if (this.length === 0){
            this.head = null
            this.tail = null
        }
        return current;
    }
    
    //removes a node from the beginning of the list
    shift(){
        if(!this.head) return undefined
        let currentHead = this.head;
        this.head =  currentHead.next;
        this.length--
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    
    //adds a node to beginning of the list
    unshift(val){
        let newHead = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else{
            newHead.next = this.head;
            this.head = newHead;
            this.length++
        }
        return this
    }
    
    //accesing a node in the list by the node position(by the index)
    get(idx){
        if(idx <= 0 || idx >= this.length)    return null
        let counter = 0;
        let current = this.head
        while(counter !== idx){
            current = current.next
            counter++
        }
    return current
    }
    
    //replace the value of a node from the list
    set(index, val){
        let foundNode = this.get(index)
        if (foundNode){
            foundNode.val = val;
            return true;
        }
            return false;
    }
    
    //adding a node in the list by a certain position
    insert(index, val){
        if(index < 0 || index > this.length) return false
        if (index === this.length) return !!this.push(val)
        if(index == 0) return !!this.unshift(val); 
        var newNode = new Node(val)
        let prev = this.get(index-1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++
        return true;
    }
    
    //removes a node form the list by a certain position
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index == this.length - 1) return this.pop() 
        if(index == 0) return this.shift()
        let previousNode = this.get(index - 1)
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--
        return removed;
    }
    
    //puts nodes in reverse order
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        
        let next = null;
        let prev = null;
        
        for(let i = 0; i < this.length; i++ ){
            next = node.next;
            node.next = prev;
            prev = node
            node = next;
        }
        return this
    }   
}


// let first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new  Node("how")
// first.next.next.next = new  Node("are")
// first.next.next.next.next = new  Node("you")
let list = new SinglyLinkedLists()
list.push("Hello")
list.push("Goodbye")
