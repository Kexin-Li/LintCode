# 动态规划（三）

坐标型动态规划。

## Minimum Path Sum

[题目](https://www.lintcode.com/problem/minimum-path-sum/description)：在一个二维矩阵中，寻找从左上角走到右下角的最短路径。其中每个元素都只有向下走和向右走两个方向可走。

### 递推公式

``` math
                     (向右走) OPT(i + 1, j, sum + grid[i][j])
                    /
OPT(i, j, sum) = min
                    \
                     (向下走) OPT(i, j + 1, sum + grid[i][j]))
```

### 初始化递推式

1. 当 i == grid.length - 1 时，只能选向下走，因此 OPT(i, j, sum) = OPT(i, j + 1, sum + grid[i][j])。
2. 当 j == grid[0].length - 1 时，只能选向右走，因此 OPT(i, j, sum) = OPT(i + 1, j, sum + grid[i][j])。
3. 当 i == grid.length - 1 && j == grid[0].length - 1 时，说明已经走到了数组的最后一位，此时返回 sum + grid[i][j]。

### 递归写法(超时)

``` java
public int minPathSum(int[][] grid) {
  if (grid == null || grid.length == 0 || grid[0].length == 0) {
    return 0;
  }

  return rec_sum(grid, 0, 0, 0);
}

private int rec_sum(int[][] grid, int i, int j, int sum) {
  if (i == grid.length && j == grid[0].length) {
    return sum + grid[grid.length - 1][grid[0].length - 1];
  }
  if (i == grid.length) {
    return rec_sum(grid, i, j + 1, sum + grid[i][j]);
  }
  if (j == grid[0].length) {
    return rec_sum(grid, i + 1, j, sum + grid[i][j]);
  }

  int sum1 = rec_sum(grid, i + 1, j, sum + grid[i][j]);
  int sum2 = rec_sum(grid, i, j + 1, sum + grid[i][j]);
  return Math.min(sum1, sum2);
}
```

### 非递归写法

#### 设计二维数组

根据递推式，我们需要设计一个二维数组 dp[i][j]，其中 i, j 分别代表 grid 中的 i, j。二维数组的元素代表从起点到当前元素的 sum。

#### 状态转移方程

根据上面的递推式，可以套在二维数组上：

``` java
dp[i][j] = min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j])
```

可以看到这里与前面的递归写法递推式稍微有点不同，那是因为我认为用递归写使用**自底而上**的想法会比较容易理解，而使用动归使用**自顶而下**的想法会比较容易理解。

#### 初始化方程

初始化二维数组：

1. dp[0][0] = grid[0][0].
2. 二维数组的第一行中的每个元素，通过顶点只有一种方式到达。即：dp[i][0] = dp[i - 1][0] + grid[i][j].
3. 二维数组的第一列中的每个元素，通过顶点也只有一种方式到达。即：dp[0][j] = dp[0][j - 1] + grid[i][j].

#### 寻找结果(返回值)

返回值为二维数组的最右下角元素。

#### 动态规划代码

``` java
public int minPathSum(int[][] grid) {
  if (grid == null || grid.length == 0 || grid[0].length == 0) {
    return 0;
  }
  // 构造数组
  int[][] dp = new int[grid.length][grid[0].length];
  // 初始化数组
  dp[0][0] = grid[0][0];
  for (int i = 1; i < dp.length; i++) {
    for (int j = 1; j < dp[0].length; j++) {
      dp[i][0] = grid[i][0] + dp[i - 1][0];
      dp[0][j] = grid[0][j] + dp[0][j - 1];
    }
  }
  // 状态转移方程
  for (int i = 1; i < dp.length; i++) {
    for (int j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  return dp[dp.length - 1][dp[0].length];
}
```

## Unique Paths

[题目](https://www.lintcode.com/problem/unique-paths/description)：在一个二维矩阵中，寻找从左上角走到右下角有多少条唯一路径。其中每个元素都只有向下走和向右走两个方向可走。

### 状态转移方程

和上道题类似，可以设计一个二维数组 dp[i][j]，其中 i, j 分别对应 grid 中的 i, j，dp 中的每个元素代表一条独一无二的路径。每个元素只有向右和向下两个方向。

因此，状态转移方程为：

``` java
dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
```

初始化方程：

1. dp[0][0] = 0.
2. 二维数组的第一行中的每个元素，通过顶点只有一种方式到达。所以：dp[i][0] = 1.
3. 二维数组的第一列中的每个元素，通过顶点也只有一种方式到达。所以：dp[0][j] = 1.

最终返回 dp 的最右下角元素。

代码：

``` java
public int uniquePaths(int[][] grid) {
  // 注意异常情况的处理
  if (grid == null) {
    return 0;
  }
  if (grid.length == 0 && grid[0].length == 1) {
    return 0;
  }
  if (grid.length == 0 || grid[0].length == 0) {
    return 1;
  }
  int[][] dp = new int[grid.length][grid[0].length];
  dp[0][0] = 0;
  for (int i = 1; i < dp.length; i++) {
    for (int j = 1; j < dp[0].length; j++) {
      dp[i][0] = 1;
      dp[0][j] = 1;
    }
  }
  
  for (int i = 1; i < dp.length; i++) {
    for (int j = 1; j < dp[0].length; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[dp.length - 1][dp[0].length];
}
```