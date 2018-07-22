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

  //A node has a data value and the next node it points to
  class Node {
    constructor(value, next) {
      this.value = undefined;
      this.next = null;
    }
  }

  //Return value of first node of the list
  const getHead = () => {
    console.log("getHead: ", head);
    return head;
  };

  //Return value of last node of the list
  const getTail = () => {
    console.log("getTail: ", tail);
    return tail;
  };

  //Take in any data value and add a new node to the end of a list. Return the new node that was created
  const add = value => {
    console.log("ENTERED ADD METHOD");
    //Create a new instance of node
    const myNode = new Node();

    const setUpNode = value => {
      myNode.value = value;
      myNode.next = null;
    };

    //If empty list (no nodes yet) and head points to null; head and tails should point to same first node added to the list
    console.log("Head at ADD: ", head);
    console.log("Tail at ADD: ", tail);

    if (head === null) {
      console.log("Adding new node at IF");
      console.log("Entering IF statement b/c head = null");

      length++; //increase length of list
      console.log("length: " + length);

      //Assign the value and next pointer to the new node
      setUpNode(value);
      console.log("myNode: ", myNode);

      head = myNode;
      tail = myNode;

      //DEBUG - Check the new list/head/tail
      console.log("Head after 'if': ", head);
      console.log("Tail after 'if': ", tail);
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

      return myNode;
    }
    //Else, list is not empty, add new nodes to the end of the list
    else {
      console.log("Adding new node at ELSE");
      console.log("Entering ELSE statement b/c head != null");

      length++; //increase length of list
      console.log("length: " + length);

      //Assign the value and next pointer to the new node
      setUpNode(value);

      //Previous tail's next should point to new node that is added to the end of the list. New node should be the tail.
      console.log("myNode: ", myNode);
      tail.next = myNode;
      console.log("Previous Next is pointing at: ", tail.next);
      tail = myNode;

      //DEBUG - Check the list/head/tail
      console.log("Head after 'else': ", head);
      console.log("Tail after 'else': ", tail);
      console.log("END ADD METHOD");
      console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

      return myNode;
    }
  };

  const get = number => {
    console.log("ENTER GET METHOD");
    console.log("GET - number: ", number);
    console.log("GET - head: ", head);
    console.log("GET - tail: ", tail);
    console.log("GET - list length: " + length);

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
      //Else if the number is referring to a node between the node after head and the tail
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
        console.log("Number doesn't exist.");
        return false;
      }
    }
    console.log("END GET METHOD");
  };

  const remove = number => {
    console.log("ENTERED REMOVE METHOD - removing: ", number);
    console.log("REMOVE - Want to remove this node:", get(number));
    console.log("REMOVE - This is the previous node", get(number - 1));

    //If node to remove is the head, set the new head to be the next node
    if (number === 0) {
      console.log("Removing head, this is head: ", head);
      console.log("This is next node after head: ", head.next);
      head = head.next;
    } else if (number > 0 && number < length) {
      //Set the previous node's next to point to the node to be removed's next. The node to remove will disappear after there is no reference to it
      let currentNode = get(number);
      console.log("currentNode's next: ", currentNode.next);

      let previousNode = get(number - 1);
      console.log("previousNode's next: ", previousNode.next);

      previousNode.next = currentNode.next;
      console.log("NEW previousNode's next: ", previousNode.next);

      //If the node removed was the last node/tail, move the tail to the previous node
      console.log("current length: ", length);
      if (number === length - 1) {
        tail = previousNode;
        console.log("Tail after remove: ", tail);
      }

      //Decrease the length since a node was removed
      length--;
      console.log("new length: ", length);

      //DEBUG - Check the tail
      console.log("current tail: ", tail);
      console.log("END REMOVE METHOD");
    } else {
      console.log("NUMBER DOESN'T EXIST. END REMOVE METHOD");
      return false;
    }
  };

  const insert = (value, number) => {
    console.log("ENTERED INSERT METHOD");
    console.log("value is: " + value + ", insert position is: ", number);
    console.log("Length at insert: ", length);
    let nodeToMoveOver = null;
    let nodeBeforeInserted = null;
    let nodeToInsert = null;
    let previousTail = null;

    const reassignPointers = () => {
      nodeToInsert = get(length - 1);
      nodeToInsert.next = nodeToMoveOver;
    };

    //If the number is greater than the list's length
    if (number > length || number < 0) {
      console.log("END INSERT METHOD");
      return false;
    } else if (number >= 0 && number <= length) {
      console.log("Number passed, will insert new node somewhere!");
      console.log("Current node at desired insert position: ", get(number));

      //If the nodeToMoveOver is actually the tail, the tail will move when a new node is added. Set tail flag to true to indicate resetting the tail after new node is added.
      if (get(number) === tail) {
        nodeToMoveOver = tail;
        console.log("nodeToMoveOver: ", nodeToMoveOver);

        nodeBeforeInserted = get(number - 1);
        console.log("nodeBeforeInserted: ", nodeBeforeInserted);

        //When node is added, it goes to the end, get the node
        add(value);
        reassignPointers();
        nodeBeforeInserted.next = nodeToInsert;
        nodeToMoveOver.next = null;

        tail = nodeToMoveOver; //Reassign the tail
      }
      //If nodeToMoveOver is actually the head, there is no node before it. Set the headFlag to true to indicate resetting the head after the new node is added
      else if (get(number) === head) {
        nodeToMoveOver = head;
        console.log("nodeToMoveOver: ", nodeToMoveOver);

        //Save the current tail before it is reassigned
        previousTail = tail;
        console.log("Saved previousTail: ", previousTail);

        //When node is added, it goes to the end, get the node
        add(value);
        reassignPointers();
        head = nodeToInsert;
        tail = previousTail;
        tail.next = null;
      } else {
        nodeToMoveOver = get(number);
        console.log("nodeToMoveOver: ", nodeToMoveOver);

        nodeBeforeInserted = get(number - 1);
        console.log("nodeBeforeInserted: ", nodeBeforeInserted);

        previousTail = tail;

        add(value);
        reassignPointers();
        nodeBeforeInserted.next = nodeToInsert;
        tail = previousTail;
        tail.next = null;
      }

      console.log("CHECK LIST: ", head);
      console.log("END INSERT METHOD");
    }
  };

  return {
    getHead,
    getTail,
    add,
    get,
    remove,
    insert
  };
}
