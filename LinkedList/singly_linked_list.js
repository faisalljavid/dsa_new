/**
 * 📌 Singly Linked List Node
 * Each node stores a value and a reference to the next node.
 */


/**
 * 📌 Singly Linked List Class
 * This class provides common linked list operations.
 */

class LinkedList {
    constructor() {
        /**
         * Initialize the linked list with a dummy head.
         * This simplifies removing the first element.
         */
        this.head = new ListNode(-1);  // Dummy node (not counted in values)
        this.tail = this.head;  // Initially, head and tail point to the dummy node
    }

    /**
     * 📌 Get a value by index
     */

    get(index) {
        let curr = this.head.next;  // Start from the first real node
        let i = 0;

        while (curr) {
            if (i === index) {
                return curr.val;  // Return value if index matches
            }
            i++;
            curr = curr.next;
        }

        return -1;  // If index is out of bounds
    }

    /**
     * 📌 Insert a new node at the head (beginning of the list)
     */

    insertHead(val) {
        const newNode = new ListNode(val);
        newNode.next = this.head.next;  // Link new node to current first node
        this.head.next = newNode;  // Update head pointer to new node

        if (!newNode.next) {
            this.tail = newNode;  // If list was empty, update the tail
        }
    }

    /**
     * 📌 Insert a new node at the tail (end of the list)
     */

    insertTail(val) {
        this.tail.next = new ListNode(val);  // Link new node to the tail
        this.tail = this.tail.next;  // Move tail to the new node
    }

    /**
     * 📌 Remove a node at a specific index
     */

    remove(index) {
        let i = 0;
        let curr = this.head;  // Start from the dummy head

        // Traverse to the node before the one to remove
        while (i < index && curr) { // as long as i is less than the specified index and curr is not null
            i++;
            curr = curr.next;
        }

        // If the node exists, remove it
        if (curr && curr.next) {
            if (curr.next === this.tail) {
                this.tail = curr;  // If removing the last node, update tail
            }
            curr.next = curr.next.next;  // Bypass the node to remove
            return true;
        }
        return false;  // Return false if index is invalid
    }

    /**
     * 📌 Retrieve all values in the list
     */

    getValues() {
        let curr = this.head.next;  // Skip the dummy node
        const res = [];

        while (curr) {
            res.push(curr.val);
            curr = curr.next;
        }
        return res;  // Return an array of values
    }
}

