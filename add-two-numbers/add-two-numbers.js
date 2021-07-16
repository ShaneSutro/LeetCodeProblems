/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let returnList;
    let currentNode;
    let carry = 0;
    
    while (l1 !== null || l2 !== null) {
        let value = 0;
        if (l1) {
            value += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            value += l2.val;
            l2 = l2.next;
        }
        
        if (carry === 1) {
            value += 1;
            carry = 0;
        }
        
        if (value >= 10) {
            value = value % 10;
            carry = 1;
        }
        
        if (!returnList) {
            returnList = new ListNode(value);
            currentNode = returnList;
        } else {
            const newNode = new ListNode(value);
            currentNode.next = newNode;
            currentNode = newNode;
        }
    }
    
    if (l1 === null && l2 === null && carry === 1) {
        const newNode = new ListNode(1);
        currentNode.next = newNode;
        currentNode = newNode;
    }
    
    return returnList;
};