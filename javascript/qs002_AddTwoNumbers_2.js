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

/*  改进（效率提高，流程优雅）
    1. 设定一个队列头，避免循环中进行判断
    2. 尽量减少循环中的判断，l1,l2
    3. 进位（carry）统一到循环中
*/

var addTwoNumbers = function(l1, l2) {
    let curEle = result = new ListNode(0)
    let carry = 0
    while (l1 || l2 || carry) {
        let sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        carry = sum > 9 ? 1 : 0
        curEle.next = new ListNode((sum) % 10)
        curEle = curEle.next
    }
    return result.next
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