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
    if (number === 0) {
      console.log("******* You are getting head node *******");
      console.log("Head: ", head);
      return head;
    } else if (number === length) {
      console.log("******* You are getting tail node ********");
      console.log("Tail: ", tail);
      return tail;
    } else {
      console.log("******* Not getting HEAD or TAIL *******");
      let tempLength = 1;
      let nextNode = head.next;

      //If the number is 1, it is the node after the head
      if (number === tempLength) {
        console.log("tempLength: ", tempLength);
        console.log("nextNode: ", nextNode);
        return nextNode;
      }
      //Else if the number is not the head, the tail, or 1, the node is somewhere between
      else if (number !== 0 && number !== 1 && number !== length) {
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
    }
    // else{
    //   while()
    // }
  };

  // function get(number) {
  //   if (number === 0) {
  //     return this.getTail();
  //   }
  // }

  const remove = () => {};
  const insert = () => {};

  return {
    getHead: getHead,
    getTail: getTail,
    add: add,
    get: get,
    remove: remove,
    insert: insert
  };
}
