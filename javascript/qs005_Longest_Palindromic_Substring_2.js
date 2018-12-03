/**
 * @param {string} s
 * @return {string}
 * 从中间向两边找
 */
var longestPalindrome = function(s) {
    let len = s.length,
    min = 0,
    maxLen = 1;
  // if (len === 0) return '';
  // if (len < 2) return s;
  for (let i = 0; i < len; ) {
    if (len - i <= maxLen / 2) {
      break;
    }
    let j = i,
      k = i;
    while (k < len - 1 && s[k + 1] === s[k]) ++k; //中间允许重复
    i = k + 1;
    while (k < len - 1 && j > 0 && s[k + 1] == s[j - 1]) {
      ++k;
      --j;
    } // 向两边扩张查找
    let new_len = k - j + 1;
    if (new_len > maxLen) {
      min = j;
      maxLen = new_len;
    }
  }
  return s.substr(min, maxLen);
};

console.log(longestPalindrome("abcdbbfcba"))