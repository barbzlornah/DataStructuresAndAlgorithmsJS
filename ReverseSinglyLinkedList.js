// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

// This is an iterative approach(a procedure is repeated multiple times)
const reverseList = (head) => {
    let prev = null;

    while (head != null){
        next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
console.log(reverseList('1->2->3->4->5->NULL'));