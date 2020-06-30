import { Node } from "./Node";

/**    
 * Author: Nick Georgiou    
 * ONYEN: nag11
 * UNC Honor Pledge: I certify that no unauthorized assistance has been received   
 * or given in the completion of this work. I certify that I understand and 
 * could now rewrite on my own, without assistance from course staff,  
 * the problem set code I am submitting.
 */

/**
 * Given a head Node of a linked list, last returns the last Node of the list.
 */
export function last(head: Node): Node {
    if (head.next !== null) {
        return last(head.next);
    } 
    return head;
}

/**
 * Given a linked list and an index, remove returns the head Node of the list
 * that does not contain the Node previously at the index.
 */
export function remove(head: Node, index: number): Node | null {
    let current: Node = head;
    let nextIndex: number = 1;
    while (index !== nextIndex && index !== 0 && current.next !== null) {
        nextIndex++;
        current = current.next;
    }
    if (index === nextIndex) {
            if (current.next === null) {
                return head;
            } else {
                current.next = current.next.next;
                return head;
            }
        } else if (index === 0) {
            return head.next;
        } else {
            return head;
        }
    }

/**
 * Given two linked lists, equals returns true if both lists are equal in 
 * Node data property contents and length.
 */
export function equals(a: Node, b: Node): boolean {
    if (a.data === b.data) {
        if (a.next !== null) {
            if (b.next !== null) {
                if (b.next.data === a.next.data) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } else if (a.next === null) {
            if (b.next === null) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

/**
 * Given the head Node of linked list named target, an index, and the head node of 
 * another linked list named strand, splice inserts the strand list into the target
 * list at index index. The function must return the head node of the spliced list.
 */
export function splice(target: Node, index: number, strand: Node): Node {
    let i: number = 1;
    let current: Node = target;
    while (index !== 0 && i !== index && current.next !== null && current.next.next !== null) {
        i++;
        current = current.next;
    } 
    if (i === index) {
        let strand0: Node = last(strand);
        strand0.next = current.next;
        current.next = strand;
        return target;      
    } else if (index === 0) {
        let strand1: Node = last(strand);
        strand1.next = current;
        return strand;
    } else {
        let target0: Node = last(target);
        target0.next = strand;
        return target;
    }
}

/**
 * Given the head node of a linked list and an index, swapBack swaps the Node at 
 * the given index (node "A") with the next Node ("B"), 
 * so A's new index is (index + 1) and B's is (index).
 */
export function swapBack(head: Node, index: number): Node {
    let i: number = 0;
    let current: Node = head;
    while (i !== index && current.next !== null) {
    i++;
    current = current.next;
    }
    if (i === index && current.next !== null && current.next.next !== null) {
        let node1: Node;
        let node2: Node = current.next;
        let swap: Node;
        swap = node2;
        return head;      
    } else {
        return head;
    }
}