# 动态规划（五）

背包型动态规划。

## BackPack

题目：

一个背包具有一定的承重 `W`，有 `N` 件物品，每件都有自己的价值，记录在数组 `v` 中；也都有自己的重量，记录在数组 `w` 中。每件物品只能选择要装入背包还是不装入背包。要求在不超过背包承重的前提下，选出物品的总价值最大。

### 状态方程

设计一个 N 行 W + 1 列的二维数组 dp，`dp[i][j]` 代表前 i 件物品，不超过总重量 j 的情况下的最大价值。

状态方程为：

``` java
dp[i][j] = max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
```

初始化状态方程：

``` java
dp[i][0] = 0;
dp[0][j] = w[j] > j ? 0 : v[0];
```

### 代码

``` java
public int backpack(int W, int[] w, int[] v) {
  if (W <= 0 || w == null || w.length == 0 || v == null || v.length == 0) {
    return 0;
  }
  int[][] dp = new int[w.length][W + 1];
  for (int i = 0; i < dp.length; i++) {
    dp[i][0] = 0;
  }
  for (int j = 0; j < dp[0].length; j++) {
    if (w[j] <= j) {
      dp[0][j] = v[0];
    } else {
      dp[0][j] = 0;
    }
  }
  for (int i = 1; j < dp.length; i++) {
    for (int j = 1; j < dp[0].length; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - w[i]] + v[i]);
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
}
```