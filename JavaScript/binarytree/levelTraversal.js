/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let results = [];
  if (!root) return results;

  let queue = [];
  queue.push(root);

  while (queue.length > 0) {
    let current = [];
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      current.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    results.push(current);
  }
  return results;
};
