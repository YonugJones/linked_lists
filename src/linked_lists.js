import Node from "./nodes";

export default class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    prepend(value) {
        if (this.head === null) {
            this.head = new Node(value);
        } else {
            const oldHead = this.head;
            this.head = new Node(value, oldHead);
        }
    }

    size() {
        if (this.head === null) return 0;
        let count = 1;
        let current = this.head;
        while (current.next !== null) {
            count += 1;
            current = current.next;
        }
        return count;
    }

    head() {
        if (this.head === null) return 'No Head';
        return this.head;
    }

    tail() {
        if (this.head === null) return 'No Tail';
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    }

    at(index) {
        if (this.head === null) return null;
        let currentNode = this.head;
        let counter = 0;
        while (counter < index) {
            currentNode = currentNode.next;
            if (currentNode === null) return null;
            counter += 1;
        }
        return currentNode;
    }

    pop() {
        if (this.head === null) return null;
        if (this.head.next === null) {
            const popHead = this.head;
            this.head = null;
            return popHead;
        }
        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        const popTail = current.next;
        current.next = null;
        return popTail;
    }
}