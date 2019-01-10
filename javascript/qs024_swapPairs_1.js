function ListNode(val) {
    this.val = val
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let k = 2
    let knode = new Array(k)
    let flag = true
    let cur = head
    while(flag) {
        let preHead = knode[0]
        for (let i = 0; i < k; i++) {
            if (!cur){
                flag = false
                break
            } else {
                knode[i] = cur
                cur = cur.next
            }
        }
        if (flag) {
            for (let i = k - 1; i >= 0; i--) {
                if(!preHead) {
                    preHead = knode[i]
                    head = preHead
                } else {
                    preHead.next = knode[i]
                    preHead = preHead.next
                }
            }
            preHead.next = cur
        }
    }
    return head
};

function build(arr) {
    if(arr.length === 0)
        return null
    let rs = new ListNode(arr[0])
    let head = rs
    for(let i = 1; i < arr.length; i++) {
        let newOne = new ListNode(arr[i])
        rs.next = newOne
        rs = newOne
    }
    return head
}

let rs = swapPairs(build([1,2,3,4,5]))
let cur = rs
let str = ''
while(cur !== null) {
    str += `${cur.val} ${cur.next ? '->' : ''} `
    cur = cur.next
}

console.log(`result is: ${str}`)
