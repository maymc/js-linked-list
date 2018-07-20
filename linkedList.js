/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

    //global variables
    let head = null;    //first object in list
    let tail = null;    //last object in list
    let length = 0;
    let currentNode = null;

    //A node has a data value and the next node it points to
    class Node{
        constructor(){
            this.value = undefined;
            this.next = null;
        }
    }

    getHead = () => {
        console.log("head: " , head);
        return head;
    };

    getTail = () => {
        console.log("tail: " , tail);
        return tail;
    };

    add = (value) => {
        //create a new node containing a value and next pointer
        const myNode = new Node;
        length++;   //increase length of list

        //If empty list (no nodes yet) and head points to null; head and tails should point to same first node
        if(getHead() === null){
            myNode.value = value;
            myNode.next = null;
            head = myNode;
            tail = myNode;
            currentNode = myNode;
            return myNode;
        }
        else{
            myNode.value = value;
            myNode.next = null;
            currentNode = myNode;
            console.log("currentNode: ", currentNode);
            tail = myNode;
            return myNode;
        }

    };

    get = (number) => {
        console.log("at get, head: ", getHead());
        currentNode = getHead();
        console.log("at get, currentNode: ", currentNode);
        if(number === length){
            return currentNode;
        }
        else{
            currentNode = currentNode.next;
            console.log("here: " ,currentNode)
            length--;
        }


    };
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