# BFS 与 DFS

``` java
    B ---- D
  / |   /  | \
A   |  /   |  F
  \ | /    |
    C ---- E
```

## BFS

比如上面这个无向图，由于可以选择的遍历起始点不同，所以它的 BFS 遍历可能会有 N 种可能性。其中一种可能情况是：`A B C D E F`。

注意，`A B C E D F` 并不是它的 BFS 遍历，因为如果 `B` 节点比 `C` 节点先被遍历到的话，那么在下一层 `B` 节点的邻接点将被先遍历到，所以下一层只能是 `D E` 的顺序。

### Queue + HashSet

使用 Queue + HashSet 来处理 BFS，是因为 Queue 能保证遍历的层的顺序，而 HashSet 能记录被遍历过的点，避免重复遍历。

假如以 A 点作为起始点，那么这个图的 BFS 遍历过程将是：

1. A 入列，并加入 HashSet。
2. `A` 出列，遍历 A 的邻接点(B, C)，寻找不在 HashSet 中的点(说明该点还没有被遍历到)，B, C 入列并加入 HashSet。
3. `B` 出列，遍历 B 的邻接点(A, C, D)，寻找不在 HashSet 中的点，D 入列并加入 HashSet。
4. `C` 出列，遍历 C 的邻接点(A, B, E, D)，寻找不在 HashSet 中的点，E 入列并加入 HashSet。
5. `D` 出列，遍历 D 的邻接点(B, C, E, F)，寻找不在 HashSet 中的点，F 入列并加入 HashSet。
6. `E` 出列，遍历 E 的邻接点(C, D, F)，寻找不在 HashSet 中的点，没有符合要求的点。
7. `F` 出列，遍历 F 的邻接点(D, E)，寻找不在 HashSet 中的点，没有符合要求的点。
8. 队列为空，完成遍历。

所以顺序为：`A -> B -> C -> D -> E -> F`。

### BFS 代码

``` java
public void BFS(GraphNode graph, GraphNode root) {
  Queue<GraphNode> queue = new LinkedList<>();
  Set<GraphNode> set = new HashSet<>();

  queue.offer(root);
  set.add(root);

  while (!queue.isEmpty()) {
    GraphNode node = queue.poll();
    List<GraphNode> list = node.adjacency();
    for (GraphNode n : list) {
      if (!set.contains(n)) {
        queue.offer(n);
        set.add(n);
      }
    }
    System.out.println(node);
  }
}
```

## DFS

和 BFS 类似的是，对于可以选择起始点的图，其 DFS 遍历也可能有 N 种。这里选择起始点为 A，那么其中的一种遍历可能为：`A B D F E C`。

DFS 的遍历有一个回溯的过程，比如从 A 点一路走到底到 F 之后，发现 F 之后无路可走了，于是回溯到 D 点继续寻找到 E 点，诸如此类。

### Stack + HashSet

使用 Stack 来实现 DFS，可以保证下一个走的点一定是当前节点的邻接点。

假如以 A 点作为起始点，那么这个图的 DFS 遍历过程将是：

1. A 入栈，并加入 HashSet。
2. `A` 出栈，遍历 A 的邻接点(B, C)，寻找不在 HashSet 中的点(说明该点还没有被遍历到)，B, C 入栈并加入 HashSet。
3. `C` 出栈，遍历 C 的邻接点(A, B, E, D)，寻找不在 HashSet 中的点，E, D 入栈并加入 HashSet。
4. `D` 出栈，遍历 D 的邻接点(B, C, E, F)，寻找不在 HashSet 中的点，F 入栈并加入 HashSet。
5. `F` 出栈，遍历 F 的邻接点(D, E)，寻找不在 HashSet 中的点，没有符合要求的点。
6. `E` 出栈，遍历 E 的邻接点(C, D, F)，寻找不在 HashSet 中的点，没有符合要求的点。
7. `B` 出栈，遍历 B 的邻接点(A, C, D)，寻找不在 HashSet 中的点，没有符合要求的点。
8. 栈为空，完成遍历。

所以顺序为：`A -> C -> D -> F -> E -> B`。

### DFS 代码

``` java
public void BFS(GraphNode graph, GraphNode root) {
  Stack<GraphNode> stack = new Stack<>();
  Set<GraphNode> set = new HashSet<>();

  stack.push(root);
  set.add(root);

  while (!stack.isEmpty()) {
    GraphNode node = stack.pop();
    List<GraphNode> list = node.adjacency();
    for (GraphNode n : list) {
      if (!set.contains(n)) {
        stack.push(n);
        set.add(n);
      }
    }
    System.out.println(node);
  }
}
```

## Dijkstra