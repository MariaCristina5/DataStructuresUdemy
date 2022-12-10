class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0; 
    }
    
    //adds a node at the end of the list
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++
        return this
    }
    
    //removes a node from the end of the list
    pop(){
        if(!this.head) return undefined
        let current = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = current.prev
            this.tail.next = null
        }
        this.length--;
        return current;
    }
    
    //removes a node from the beginning of the list
    shift(){
        if(!this.head) return undefined
        let oldHead = this.head
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--
        return oldHead
    }
    
    //adds a node to beginning of the list
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    
    //accesing a node in the list by the node position(by the index)
    get(index){
        if(index < 0 || index >= this.length) return null;
            let counter = 0;
            let current = this.head
        if(index <= this.length/2){
            while(counter !== index){
                current = current.next;
                counter++;
            }
        } else {
            counter = this.length -1;
            current = this.tail;
            while(counter !== index){
                current = current.prev;
                counter--;
            }
        }
        return current;
    }
    
    //replace the value of a node from the list
    set(index, val){
        let foundNode = this.get(index)
        if(foundNode !== null ){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    
     //adding a node in the list by a certain position
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        
        if(index === this.length) return !!this.push(val);
        let newNode = new Node(val);
        let beforeNode = this.get(index -1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }
    
     //removes a node form the list by a certain position
    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) return this.shift()
        if(index === this.length-1) return this.pop()
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
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
      
}

} 
