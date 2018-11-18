/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 注意 line 20 中递归 
 *  `searchBST(root.right, val)` 与 `return searchBST(root.right, val); `
 * 的区别，以及什么时候用哪种。
 * 
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {  
  if (!root) return null;
  if (root.val === val) return root;
  
  if (val > root.val) {
    return searchBST(root.right, val);  
  } else if (val < root.val) {
    return searchBST(root.left, val);
  }
};
