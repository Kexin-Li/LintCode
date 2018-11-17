# 二叉树

二叉树是每个节点最多只有两个分支的树结构，其分支被称为左子树和右子树，并且分支具有顺序，不能颠倒。

- 二叉树的第 i 层最多有 2^(i-1) 个节点。（此时根节点为第一层）
- 深度为 k 的二叉树最多有 2^(k+1) - 1 个节点。（此时根节点所在的深度为0）
- 二叉树可以为空，但普通树不可以。

## 二叉树的表示方法

Java:

``` java
class TreeNode {
  public int val;
  public TreeNode left, right;
  public TreeNode(int val) {
    this.val = val;
    this.left = this.right = null;
  }
}
```

JavaScript:

``` js
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
```

## 二叉树的高度

- 高度(height)：二叉树的高度是指 root 节点到最长叶子结点的边数。
- 深度(depth)：二叉树的深度是指 root 节点到最长叶子结点的节点数。

要求二叉树的高度，可以递归求左右子树的高度，取两者高度的最大值，再加上 root 到左右子树的边数，即 1，就是整棵树的高度。递归的出口条件是，当 node==null 时，说明以这个节点为 root 节点，此时的树高度为 0，所以当 node==null 时返回 0。

``` java
int height(TreeNode node) {
  if (node == null) {
    return 0;
  }
  return Math.max(height(node.left), height(node.right)) + 1;
}
```

## 满二叉树

深度为 k 的二叉树有 2^(k+1) - 1 个节点（此时根节点所在的深度为0）的二叉树。

## 完全二叉树

深度为 k 有 n 个节点的二叉树，当且仅当其中的每一节点，都可以和同样深度 k 的满二叉树，序号为 1 到 n 的节点一对一对应的二叉树。

翻译一下是：叶节点只能出现在最下层和次下层，并且最下面一层的结点都集中在该层最左边的若干位置的二叉树。

## 遍历二叉树

### 前序遍历（Preorder）

前序遍历：**根左右**。例如这样一棵树遍历的结果是[1, 2, 4, 5, 3]。

Java:

``` java
List<Integer> Preorder(TreeNode root) {
  List<Integer> result = new ArrayList<>();
  if (root == null) return result;

  Stack<TreeNode> stack = new Stack<>();
  stack.push(root);

  while (!stack.isEmpty()) {
    TreeNode curr = stack.pop();
    result.add(curr.val);

    if (curr.right != null) {
      stack.push(curr.right);
    }
    if (curr.left != null) {
      stack.push(curr.left);
    }
  }
  return result;
}
```

JavaScript:

``` js
var preorderTraversal = function(root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  
  stack.push(root);
  
  while (stack.length > 0) {
    let curr = stack.pop();
    result.push(curr.val);

    if (curr.right) {
      stack.push(curr.right);
    }
    if (curr.left) {
      stack.push(curr.left);
    }
  }
  return result;
};
```

### 中序遍历(Inorder)

中序遍历：**左根右**。例如这样一棵树遍历的结果是[4, 2, 5, 1, 3]。

Java:

``` java
List<Integer> Inorder(TreeNode root) {
  List<Integer> result = new ArrayList<>();
  if (root == null) return result;

  Stack<TreeNode> stack = new Stack<>();

  TreeNode curr = root;
  while (curr != null) {
    stack.push(curr);
    curr = curr.left;
  }

  while (!stack.isEmpty()) {
    curr = stack.pop();
    result.add(curr.val);

    if (curr.right != null) {
      curr = curr.right;
      while (curr != null) {
        stack.push(curr);
        curr = curr.left;
      }
    }
  }
  return result;
}
```

JavaScript:

``` js
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
```

## 平衡二叉树

平衡二叉树是指一颗二叉树的**所有左右子树**高度之差小于等于1。一颗空树是高度平衡的。

判断一棵树是不是平衡二叉树：

``` java
boolean isBalanced(TreeNode root) {
  if (root == null) {
    return true;
  }
  int l = height(root.left);
  int r = height(root.right);
  if (Math.abs(l-r) > 1) {
    return false;
  }
  if (!isBalanced(root.left) || !isBalanced(root.right)) {
    return false;
  }
  return true;
}
```

## 二叉搜索树（BST）

二叉搜索树是所有左子树的节点值小于根节点，所有右子树的节点值大于根节点的二叉树。

## 红黑树

具有以下性质的被定义为红黑树：

- 每个节点有红或黑两种颜色属性。
- 根节点是黑色属性。
- 相邻两个节点的颜色不能同是红色，即红色节点的父节点和子节点都不能是红色。
- 每一条从根节点到 NULL 节点路径所经历的黑色节点数相同。

## AVL 树

AVL 树是一颗平衡的 BST。