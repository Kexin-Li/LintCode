/**
 * 首先遍歷一遍獲得有幾個空格，好計算出替換之後的長度。
 * 接著使用兩個指針 p1, p2. p1 指向原串的結尾，p2 指向新串的結尾。接著從末尾向前遍歷原串：
 *  - 向前移動 p1，並把 p1 指向的字符複製給 p2，直到遇到空格為止；
 *  - 遇到空格，將 p1 向前移動一個位置，將 %20 字符串倒著依次從 p2 指向的位置插入；
 *  - 當 p1 與 p2 指針指向同一位置時停止。
 * @param {string} str 
 */
const spaceReplacement = function(str) {
  if (str === null) {
    return null;
  }

  var arr = str.split(' ');
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i].concat('%20');
    arr[i] = temp;
  }
  return arr.toString();
  console.log(arr.toString());
};

spaceReplacement('abc efg ');