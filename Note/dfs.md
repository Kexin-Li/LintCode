# 深度优先搜索算法（DFS）

## 基于二叉树的 DFS

### 遍历法 VS 分治法

通过求二叉树的最大深度这道题来感受遍历法和分治法的区别，题目：https://www.lintcode.com/problem/maximum-depth-of-binary-tree/

遍历法：

``` java
public int maxDepth(TreeNode root) {
    depth = 0;
    traversal(root, 1);
    return depth;
  }

private void traversal(TreeNode node, int currDepth) {
  if (node == null) {
    return;
  }

  depth = Math.max(depth, currDepth);

  traversal(node.left, currDepth + 1);
  traversal(node.right, currDepth + 1);
}
```

分治法：

``` java
public int maxDepth(TreeNode root) {
  if (root == null) {
    return 0;
  }

  int left = maxDepth(root.left);
  int right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}
```

遍历法与分治法是两种常见的递归方法，他们的联系与区别有：

- 遍历法是通过前中后序遍历，游走于整棵树，通过一个全局变量或者传入参数来记录这个过程中遇到的点或者需要计算的结果。
- 分治法先让左右子树去解决同样的问题，得到结果之后，再整合为整棵树的结果。
- 从程序实现的角度，遍历法通常没有返回值，分治法有返回值。

### AVL VS BST

AVL 树指的是一颗平衡二叉树，即左右子树的高度差绝对值不超过 1 且左右子树都是平衡二叉树，一颗空树也是平衡二叉树。AVL 树的高度是 `O(logN)`。

若二叉搜索树是 AVL 树，则最大的作用是保证查找的最坏时间复杂度为 `O(logN)`，而且较浅的树对插入和删除操作也更快。

更多 AVL 树的内容见：[Binary Tree 笔记](./binarytree/binarytree-1.md)

BST 指的是一棵树是空树，或者满足以下特性：

- 若左子树不为空，那么左子树上的所有节点值都小于等于根节点值。
- 若右子树不为空，那么右子树上的所有节点值都大于等于根节点值。
- 左右子树也都是二叉搜索树。

按照中序遍历可以得到升序的节点列表。在 BST 中查找某个值的平均复杂度是 `O(logN)`，类似于二分查找，每次通过判断目标值和根节点值的大小关系，可以排除一半的节点。

BST 引申而出的高级树：

- 用于数据库或各语言标准库中索引的[红黑树](https://zh.wikipedia.org/wiki/%E7%BA%A2%E9%BB%91%E6%A0%91)
- 提升二叉树性能底线的[伸展树](https://zh.wikipedia.org/wiki/%E4%BC%B8%E5%B1%95%E6%A0%91)
- 优化红黑树的 [AA 树](https://zh.wikipedia.org/wiki/AA%E6%A0%91)
- 随机插入的[树堆](https://zh.wikipedia.org/wiki/%E6%A0%91%E5%A0%86)
- 机器学习 kNN 算法的高维快速搜索 [k-d 树](https://zh.wikipedia.org/wiki/K-d%E6%A0%91)

更多 BST 的内容见：[Binary Tree 笔记](./binarytree/binarytree-1.md)