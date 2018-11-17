/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  let curr = root;
  
  while (curr !== null) {
    stack.push(curr);
    curr = curr.left;
  }
  
  while (stack.length > 0) {
    curr = stack.pop();
    result.push(curr.val);
    
    if (curr.right) {
      curr = curr.right;
      while (curr !== null) {
        stack.push(curr);
        curr = curr.left;
      }
    }
  }
  return result;
};