import Node from "./nodes";

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            console.log(`${value} has been appended to empty linked list.`);
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(value);
        console.log(`${value} has been appended to linked list.`);
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value);
            console.log(`${value} has been prepended to empty linked list.`);
        } else {
            const oldHead = this.head;
            this.head = new Node(value, oldHead);
            console.log(`${value} has been prepended to linked list.`)
        }
    }

    size() {
        if (this.head === null) {
            console.log('0');
            return 
        };
        let count = 1;
        let current = this.head;
        while (current.next !== null) {
            count += 1;
            current = current.next;
        }
        console.log(`List size: ${count}`);
    }

    headFunc() {
        if (this.head === null) {
            console.log('No Head in linked list');
            return;
    };
        console.log(`Head node: ${this.head.value}`);
    }

    tail() {
        if (this.head === null) {
            console.log('No Tail');
            return;
        };
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        console.log(`Tail Node: ${tail.value}`);
    }

    at(index) {
        if (this.head === null) {
            console.log(null);
            return;
        };
        let currentNode = this.head;
        let counter = 0;
        while (counter < index) {
            currentNode = currentNode.next;
            if (currentNode === null) {
                console.log(null)
            };
            counter += 1;
        }
        console.log(`Node: ${currentNode.value} is at index: ${index}`);
    }

    pop() {
        if (this.head === null) {
            console.log('Cannot pop node. List is empty')
        };
        if (this.head.next === null) {
            const popHead = this.head;
            this.head = null;
            console.log(`Head node: ${popHead} has been popped`);
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        const popTail = current.next;
        current.next = null;
        console.log(`Node: ${popTail.value} has been popped`);
    }

    contains(value) {
        if (this.head === null) {
            console.log(`False: List does not contain ${value}`);
            return false;
        };
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                console.log(`True: List contains ${value}`);
                return true;
            };
            current = current.next;
        }
        console.log(`False: List does not contain ${value}`);
        return false;
    }

    find(value) {
        if (this.head === null) {
            console.log('Cannot find node. The list is empty');
            return null
        };
        let currentNode = this.head;
        let index = 0;
        while(currentNode !== null) {
            if (currentNode.value === value) {
                console.log(`Node: ${value} is at index: ${index}`);
                return true;
            };
            index += 1;
            currentNode = currentNode.next;
        }
        console.log('Cannot find node.');
        return null;
    }

    toString() {
        if (this.head === null) {
            console.log('List is empty');
            return;
        }
        let currentNode = this.head;
        let string = `( ${currentNode.value} )`;
        while (currentNode.next !== null) {
            string += ` -> ( ${currentNode.next.value} )`;
            currentNode = currentNode.next;
        }
        string += ` -> null`;
        console.log(string);
    }
}