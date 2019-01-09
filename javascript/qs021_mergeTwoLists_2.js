function ListNode(val) {
    this.val = val
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
      return l2;
    }
    if (l2 === null) {
      return l1;
    }
    if(l1.val<=l2.val) {
      l1.next = mergeTwoLists(l1.next,l2);
      return l1;
    } else {
      l2.next = mergeTwoLists(l1,l2.next);
      return l2;
    }
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
