/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

    //global variables
    let head = null;    //first object in list
    let tail = null;    //last object in list

    //A node has a data value and the next node it points to
    class Node{
        constructor(){
            this.value = undefined;
            this.next = null;
        }
    }

    getHead = () => {
        console.log("head: " + head);
        return head;
    };

    getTail = () => {
        console.log("tail: " + tail);
        return tail;
    };

    add = (value) => {
        const myNode = new Node;
        myNode.value = value;
        myNode.next = null;
        myNode.tail = null;
        return myNode;
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