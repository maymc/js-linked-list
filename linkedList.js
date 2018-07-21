/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  //global variables
  let head = null; //first object in list
  let tail = null; //last object in list
  let length = 0;
  let currentNode = null;

  //A node has a data value and the next node it points to
  class Node {
    constructor(value, next) {
      this.value = undefined;
      this.next = null;
    }
  }

  const getHead = () => {
    console.log("getHead: ", head);
    return head;
  };

  const getTail = () => {
    console.log("getTail: ", tail);
    return tail;
  };

  const add = value => {
    //create a new node containing a value and next pointer

    const myNode = new Node();

    //If empty list (no nodes yet) and head points to null; head and tails should point to same first node
    console.log("Head at ADD: ", head);
    console.log("Tail at ADD: ", tail);

    if (head === null) {
      console.log("Adding new node at IF");
      console.log("Entering IF statement b/c head = null");

      length++; //increase length of list
      console.log("length: " + length);

      myNode.value = value;
      myNode.next = null;
      console.log("myNode: ", myNode);

      head = myNode;
      tail = myNode;
      console.log("Head after 'if': ", head);
      console.log("Tail after 'if': ", tail);
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

      return myNode;
    } else {
      console.log("Adding new node at ELSE");
      console.log("Entering ELSE statement b/c head != null");

      length++; //increase length of list
      console.log("length: " + length);

      myNode.value = value;
      myNode.next = null;
      console.log("myNode: ", myNode);
      tail.next = myNode;
      console.log("Previous Next is pointing at: ", tail.next);
      tail = myNode;
      console.log("Head after 'else': ", head);
      console.log("Tail after 'else': ", tail);
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

      return myNode;
    }
  };

  const get = number => {
    console.log("******************************");
    console.log("GET - number: ", number);
    console.log("GET - head: ", head);
    console.log("GET - tail: ", tail);
    console.log("GET - length: " + length);

    //If the number is 0, head is the node
    if (number === 0) {
      console.log("******* You are getting head node *******");
      console.log("Head: ", head);
      return head;
    }
    //If the number is length - 1, tail is the node
    else if (number === length - 1) {
      console.log("******* You are getting tail node ********");
      console.log("Tail: ", tail);
      return tail;
    }
    //Else, number is not for the head or tail node, then it is in between
    else {
      console.log("******* Not getting HEAD or TAIL *******");
      let tempLength = 1;
      let nextNode = head.next;

      //If the number is 1, it is the node after the head
      if (number === tempLength) {
        console.log("tempLength: ", tempLength);
        console.log("nextNode: ", nextNode);
        return nextNode;
      }
      //Else if the number is referrig to a node between the node after head and the tail
      else if (number !== 1 && number < length && number > 0) {
        console.log("tempLength before: ", tempLength);

        while (tempLength !== number) {
          nextNode = nextNode.next;
          console.log("nextNode: ", nextNode);

          tempLength++;
          console.log("tempLength after: ", tempLength);
        }
        console.log("nextNode: ", nextNode);
        return nextNode;
      }
      //Else number is less than 0 or greater than the length
      else {
        return false;
      }
    }
  };

  const remove = number => {
    console.log("REMOVE - Want to remove this node:", get(number));
    console.log("REMOVE - This is the previous node", get(number - 1));

    if (number > 0 && number < length) {
      //Set the previous node's next to point to the node to be removed's next
      let previousNode = get(number - 1);
      let currentNode = get(number);
      previousNode.next = currentNode.next;
    } else {
      return false;
    }
  };
  const insert = (value, number) => {};

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}
