# 宽度优先搜索算法（BFS）

## 队列

在算法中，队列常用于宽度优先搜索(BFS)中，记录待扩展的节点。在工业界，队列可用于实现消息队(message queue)，以完成异步(asynchronous)任务。

“消息”是计算机间传送的数据，可以只包含文本；也可复杂到包含嵌入对象。当消息“生产”和“消费”的速度不一致时，就需要消息队列，临时保存那些已经发送而并未接收的消息。例如集体打包调度，服务器繁忙时的任务处理，事件驱动等等。

常用的消息队列实现包括 RabbitMQ，ZeroMQ 等等。

## Interface

### Set

HashSet: 无重复数据，**可以**有空数据，数据**无序**。
TreeSet: 无重复数据，**不能**有空数据，数据**有序**。

### Map

HashMap: key 无重复，value 允许重复；允许 key 和 value 为空；数据无序。
TreeMap: key 无重复，value 允许重复；不允许有 null；数据有序。

### List

ArrayList 与 LinkedList 的区别：

- ArrayList 基于动态数组实现，LinkedList 基于链表实现。
- 对于随机访问 get 和 set，ArrayList 绝对优于 LinkedList，因为 LinkedList 要移动指针。
- 对于新增和删除操作 add 和 remove，LinedList 比较占优势，因为 ArrayList 要移动数据。

### Queue

PriorityQueue 和 LinkedList 的区别：

- PriorityQueue 基于堆实现，LinkedList 基于链表实现。
- PriorityQueue 非 FIFO，它是优先级最高的元素先出队列；LinkedList 遵循 FIFO。

## 什么时候用宽度优先算法

有如下几种情况可以考虑使用宽度优先算法：

- 图的遍历(Traversal in Graph)，展开来讲下面几种情况也属于这个类型。
  - 层级遍历(Level Order Traversal)
  - 由点及面(Connected Component)
  - 拓扑排序(Topological Sorting)
- 最短路径(Shortest Path in Simple Graph)

### 二叉树的 BFS VS 图的 BFS

二叉树的 BFS 与图的 BFS 最大的不同是在二叉树中不用使用 HashSet 来存储访问过的节点，因为二叉树中没有环，不像图中会出现一个节点的邻居的邻居会是自己的情况。

## 拓扑排序

在图论中，由一个有向无环图的顶点组成的序列，当且仅当满足以下条件时，称为该图的一个拓扑排序。

- 每个顶点出现且只出现一次。
- 若 A 在序列中排在 B 前面，则在图中不存在 B 到 A 的路径。

拓扑排序可应用于检测编译时的循环依赖，制定有依赖关系的任务的执行顺序等问题上。另外，拓扑排序不是一种排序算法，一张图的拓扑序列可以有很多个，也可以没有，我们只需找出其中一个序列，而无需找到所有序列。

### 算法描述

介绍算法之前，首先了解图中的基本概念入度和出度。

入度和出度：在有向图中，如果存在一条有向边 A-->B，那么我们认为这条边为 A 增加了一个出度，为 B 增加了一个入度。

拓扑排序的算法是典型的宽度优先搜索算法，其大致流程如下：

- 统计所有点的入度，并初始化拓扑序列为空。
- 将所有入度为 0 的点，也就是那些没有任何依赖的点，放到宽度优先搜索的队列中。
- 将队列中的点一个一个的释放出来，放到拓扑序列中，每次释放出某个点 A 的时候，就访问 A 的相邻点（所有 A 指向的点），并把这些点的入度减去 1。
- 如果发现某个点的入度被减去 1 之后变成了 0，则放入队列中。
- 直到队列为空时，算法结束。

相关题目：https://www.lintcode.com/problem/course-schedule/description

## 宽度优先搜索模版

### 不需分层遍历的宽度优先搜索

宽搜的实现有很多种，下面是利用 queue 和 set 的一种实现。也是最佳实践。

``` java
// T 指代任何你希望存储的类型
Queue<T> queue = new LinkedList<>();
Set<T> set = new HashSet<>();

set.add(start);
queue.offer(start);
while (!queue.isEmpty()) {
  T head = queue.poll();
  for (T neighbor : head.neighbors) {
    if (!set.contains(neighbor)) {
      set.add(neighbor);
      queue.offer(neighbor);
    }
  }
}
```

注释：

- neighbor 表示从某个点 head 出发，可以走到的下一层的节点。
- set 存储已经访问过的节点（已经丢到 queue 里去过的节点）。
- queue 存储等待被拓展到下一层的节点。
- set 与 queue 是一对好基友，无时无刻都一起出现，往 queue 里新增一个节点，就要同时丢到 set 里。

### 需要分层遍历的宽度优先搜索

如果需要分层，那么要在上面这个算法中稍做修改：

``` java
// T 指代任何你希望存储的类型
Queue<T> queue = new LinkedList<>();
Set<T> set = new HashSet<>();

set.add(start);
queue.offer(start);
while (!queue.isEmpty()) {
  int size = queue.size();
  for (int i = 0; i < size; i++) {
    T head = queue.poll();
    for (T neighbor : head.neighbors) {
      if (!set.contains(neighbor)) {
        set.add(neighbor);
        queue.offer(neighbor);
      }
    }
  }
}
```

### 使用两个队列实现 BFS

### 使用 dummy node 实现 BFS

## 如何构建图

第一种方法是使用自定义邻接表：

``` java
class DirectedGraphNode {
  int label;
  List<DirectedGraphNode> neighbors;
}
```

第二种是使用 Map 与 Set 的搭配：

``` java
HashMap<T, Set<T>> graph = new HashMap<Integer, HashSet<Integer>>; // 其中 T 代表节点类型，通常是整数
```

## 双向宽度优先搜索算法（Bidirectional BFS）

双向宽度优先搜索算法适用于如下场景：

- 无向图
- 所有边的长度都为 1 或者长度都一样
- 同时给出了起点和终点

### 算法描述

双向宽度优先搜索本质上还是BFS，只不过变成了起点向终点和终点向起点同时进行扩展，直至两个方向上出现同一个子节点，搜索结束。我们还是可以利用队列来实现：一个队列保存从起点开始搜索的状态，另一个保存从终点开始的状态，两边如果相交了，那么搜索结束。起点到终点的最短距离即为起点到相交节点的距离与终点到相交节点的距离之和。

所以双向宽度优先搜索在某些情况下可以作为宽搜的优化。

``` java
/**
 * Definition for graph node.
 * class UndirectedGraphNode {
 *   int label;
 *   ArrayList<UndirectedGraphNode> neighbors;
 *   UndirectedGraphNode(int x) {
 *     label = x; neighbors = new ArrayList<UndirectedGraphNode>();
 *   }
 * };
 */
public int doubleBFS(UndirectedGraphNode start, UndirectedGraphNode end) {
  if (start.equals(1)) {
    return 1;
  }
  Queue<UndirectedGraphNode> startQueue = new LinkedList<>();
  Queue<UndirectedGraphNode> endQueue = new LinkedList<>();
  startQueue.offer(start);
  endQueue.offer(end);
  Set<UndirectedGraphNode> startSet = new HashSet<>();
  Set<UndirectedGraphNode> endSet = new HashSet<>();
  startSet.add(start);
  endSet.add(end);

  int step = 0;

  while (!startQueue.isEmpty() || !endQueue.isEmpty()) {
    int startSize = startQueue.size();
    int endSize = endQueue.size();
    step++;
    for (int i = 0; i < startSize; i++) {
      UndirectedGraphNode node = startQueue.poll();
      for (UndirectedGraphNode neighbor : node.neighbors) {
        if (startSet.contains(neighbor)) { // 重复节点
          continue;
        } else if (endSet.contains(neighbor)) { // 相交
          return step;
        } else {
          startQueue.offer(neighbor);
          startSet.add(neighbor);
        }
      }
    }
    setp++;
    for (int i = 0; i < endSize; i++) {
      UndirectedGraphNode node = endQueue.poll();
      for (UndirectedGraphNode neighbor : node.neighbors) {
        if (endSet.contains(neighbor)) { // 重复节点
          continue;
        } else if (startSet.contains(neighbor)) { // 相交
          return step;
        } else {
          endQueue.offer(neighbor);
          endSet.add(neighbor);
        }
      }
    }
  }
  return -1;
}
```