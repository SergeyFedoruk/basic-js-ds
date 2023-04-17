const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
let front = null, rear = null;
class Queue {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

    getUnderlyingList() {
        //throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
        let current = this.head; // saves a link to the head of the queue

        while (current) { // goes through each Node of the Queue
            console.log(current.value); // prints the value of the Node in console
            current = current.next;
        }
        ;
    }
        enqueue( value )        {
            let temp = new QNode(value);

            // If queue is empty, then new node is front and rear both
            if (rear == null) {
                front = rear = temp;
                return;
            }

            // Add the new node at the end of queue and change rear
            rear.next = temp;
            rear = temp;

        }

        dequeue()
        {
            if (front == null)
                return;

            // Store previous front and move front one node ahead
            let temp = front;
            front = front.next;

            // If front becomes NULL, then change rear also as NULL
            if (front == null)
                rear = null;
        }
    }


module.exports = {
  Queue
};
