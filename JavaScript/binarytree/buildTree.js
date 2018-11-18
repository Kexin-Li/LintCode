/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * - 根据前序遍历找到根节点的位置；
 * - 在中序遍历中，根结点左边的属于左子树，右边的属于右子树；
 * - 再递归左右两棵树构建。
 * 
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  
  // find root node by preorder
  let root = new TreeNode(preorder.shift());
  // record root node index by inorder
  let index = inorder.indexOf(root.val);
  // find left tree and right tree
  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));
  
  return root;
};