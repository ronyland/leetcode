function ListNode(val) {
    this.val = val
    this.next = null;
}

var removeNthFromEnd = function (head, n) {
    let cur = head, m = 0, del = head
    while (cur !== null) {
        if(m > n) {
            del = del.next
        } else {
            m++
        }
        cur = cur.next
    }
    if (del === head && m === n)
        head = head.next
    else 
        del.next = del.next.next
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

let rs = removeNthFromEnd(build([1]), 1)
let cur = rs
let str = ''
while(cur !== null) {
    str += `${cur.val} ${cur.next ? '->' : ''} `
    cur = cur.next
}

console.log(`result is: ${str}`)
