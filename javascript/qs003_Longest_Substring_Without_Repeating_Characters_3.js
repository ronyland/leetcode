var lengthOfLongestSubstring = function(s) {
    let len = s.length;
  if(len === 0 || len === 1) return len;
  let longest = 1;
  let start = 0;   
  if(s.length >256){len = 256}              //一个字节最多256种不同字符
  for(let end = 0; end < len;end++) {       //start与end是一个窗口，始终保持当前子串中字符不重复
      const curr = s[end];
      const index = s.indexOf(curr, start);
      if (index >= start && index < end) {
          start = index + 1;
      } else {
          longest = Math.max(longest, end - start +1);
      }
  }

  return longest;
};

let start = Date.now()
console.log(lengthOfLongestSubstring('abcbacbb'))
console.log(`running ${Date.now() - start} ms`)
//pwwkeuaef4wue554terfsryri5e65t4rferghtjrkr7e56w45ergfvhujw645erga