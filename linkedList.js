/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

    class Node{
        constructor(){
            this.head = null;
            this.tail = null;
        }
    }

    const myNode = new Node;

    getHead = () => {
        console.log("myNode.head: " + myNode.head);
        return myNode.head;
    };

    getTail = () => {
        console.log("myNode.tail: " + myNode.tail);
        return myNode.tail;
    };
    
    add = () => {

    };
    get = () => {};
    remove = () => {};
    insert = () => {};

    return {
        getHead: getHead,
        getTail: getTail,
        add: add,
        get: get,
        remove: remove,
        insert: insert,
    }
}