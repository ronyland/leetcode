function ListNode(val) {
    this.val = val
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    if(!l1)
        return l2
    else if(!l2)
        return l1
    let head = l1.val < l2.val ? l1 : l2
    let cur = head
    let cur1 = l1, cur2 = l2
    if (l1.val < l2.val)
        cur1 = cur1.next
    else
        cur2 = cur2.next
    while(cur1 || cur2) {
        if (!cur1) {
            cur.next = cur2
            break
        } else if (!cur2) {
            cur.next = cur1
            break
        } else {
            if (cur1.val < cur2.val) {
                cur.next = cur1
                cur1 = cur1.next
            } else {
                cur.next = cur2
                cur2 = cur2.next
            }
            cur = cur.next
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

let rs = mergeTwoLists(build([1,2,4]), build([1,3,4]))
let cur = rs
let str = ''
while(cur !== null) {
    str += `${cur.val} ${cur.next ? '->' : ''} `
    cur = cur.next
}

console.log(`result is: ${str}`)
