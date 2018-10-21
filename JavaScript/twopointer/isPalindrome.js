/**
 * 正则表达式
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const newS = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let p1 = 0, p2 = newS.length - 1;
  while (p1 < p2) {
    if (newS.charAt(p1) !== newS.charAt(p2)) {
      return false;
    }
    p1++;
    p2--;
  }
  return true;
};