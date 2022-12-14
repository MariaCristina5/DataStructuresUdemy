// hash function that works on strings only
// function hash(key, arrayLen) {
//     let total = 0;
//     let primeNumber = 31;
//     for(let i = 0; i < Math.min(key.length, 100); i++){
//         let char = key[i];
//         let value = char.charCodeAt(0) - 96
//         total = (total + primeNumber + value) % arrayLen;
//     }
//     return total;
// }
//solution to collisions
//we use Seaparate Chaining or Linear Probing

//a HashTable Class
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    
    _hash(key) {
    let total = 0;
    let primeNumber = 31;
    for(let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total + primeNumber + value) % this.keyMap.length;
        }
    return total;
    }
    /*1.accepts a key and a value
    2.hashes the key
    3.stores the key-value pair in the hash table array via separate chaining*/

    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key,value]);
    }
    /*1.accepts a key
    2.hashes the key
    3.retrieves the key-value pair in the hash table
    4.if the key isn't found, returns undefined*/
    get(key) {
        let index = this._hash(key);
        if(this.keyMap[index]){
            for(let i = 0; i < this.keyMap[index].length; i++) {
                if(this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]; 
                }
            }
        }
        return undefined
    }
    //loops through the hash table array and returns an array of key in the table
    keys() {
        let keysArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
                if(!keysArr.includes(this.keyMap[i][j][0]))
                keysArr.push(this.keyMap[i][j][0])
                }
            } 
        }
        return keysArr;
    }
    //loops through the hash table array and returns an array of values in the table
    values() {
        let valuesArr = [];
        for(let i = 0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
            for(let j = 0; j < this.keyMap[i].length; j++){
                if(!valuesArr.includes(this.keyMap[i][j][1]))
                valuesArr.push(this.keyMap[i][j][1])
                }
            } 
        }
        return valuesArr;
    }
}

let ht = new HashTable(17);
ht.set("maroon","#800000")
ht.set("yellow","#FFFF00")
ht.set("olive","#808000")
ht.set("salmon","#FA8072")
ht.set("lightcoral","#F08080")
ht.set("mediumvioletred","#C71585")
ht.set("plum","#DDA0DD")
ht.set("purple","#DDA0DD")
ht.set("violet","#DDA0DD")


ht.keys().forEach(function(key){
  console.log(ht.get(key));
})