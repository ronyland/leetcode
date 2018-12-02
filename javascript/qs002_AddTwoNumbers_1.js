/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val
    this.next = null;
}

var addTwoNumbers = function(l1, l2) {
    let result, curEle
    let carry = 0
    while (l1 || l2) {
        let l1cur = l1 && l1.val || 0
        let l2cur = l2 && l2.val || 0
        let rs = (l1cur + l2cur + carry) % 10
        carry = l1cur + l2cur + carry > 9 ? 1 : 0
        if (result === undefined) {
            curEle = result = new ListNode(rs)
        } else {
            let newOne = new ListNode(rs)
            curEle.next = newOne
            curEle = newOne
        }
        l1 = l1 && l1.next
        l2 = l2 && l2.next
    }
    if (carry > 0) {
        curEle.next = new ListNode(carry)
    }
    return result
};

function Build(arr) {
    let rs = new ListNode(arr[0])
    for(let i = 1; i < arr.length; i++) {
        let newOne = new ListNode(arr[i])
        newOne.next = rs
        rs = newOne
    }
    return rs
}

let rs = addTwoNumbers(new Build([2,4,3]), new Build([0]))
let cur = rs
let str = ''
while(cur !== null) {
    str += `${cur.val} ${cur.next ? '->' : ''} `
    cur = cur.next
}

console.log(str)