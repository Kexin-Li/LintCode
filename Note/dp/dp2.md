# 动态规划（二）

## 通过两道题理解动态规划

第一题：给定一个数组，从中选择一堆不相邻的数，使之相加和最大。

例如：

`4 1 1 9 1` return 13

第二题：给定一个**非负**数组，以及一个**正数** S，从中选择一堆数，使之相加和为 S。如果有这样的一堆数，那么 return true，否则 return false。

例如：

`3 34 4 12 5 2` S = 9, return true.

### 求最大值

| 0|  1  |  2   |  3   | 4    |
|--| :--:| :--: | :--: | :--: |
|4|1|1|9|1|

首先看第一题，要求一个最大值，可以理解为求一个最优解。这类题是典型的动态规划题，最主要的是需要找到状态转移方程式。

#### 递推公式

我们假设函数 OPT(i) 代表从起点到 i 为止的最优解。比如 OPT(arr[5]) 代表当走到 arr[5] 时和的最大值，此时的最优解只由两种情况决定，那就是选择 arr[5] 时的情况以及不选 arr[5] 时的情况：

``` plain
                  / (选) arr[5] + OPT(3)
OPT(arr[5]) = max
                  \ (不选) OPT(4)
```

每个数都有选和不选两种情况：

1. 当选择 arr[5] 时，由于选了 arr[5] 就不能选 arr[4] 了，因此此时的最大和为 arr[5] + OPT(3)；
2. 当不选择 arr[5] 时，此时的最大和仍然为前 4 个数的最大和 OPT(4)。

通过比较这两种情况选出一个最大值，就是 OPT(5) 的最优解。

#### 递推出口

接下来就是初始化递推式，或者说寻找出口。

1. 当 i == 0 时，OPT(i) = arr[0].
2. 当 i == 1 时，OPT(i) = max(arr[0], arr[1]).

#### 递归与非递归代码

递归代码：

``` java
public int rec_maxSum(int[] arr, int i) {
  if (arr == null || arr.length == 0) {
    return -1;
  }
  if (i == 0) {
    return arr[0];
  }
  if (i == 1) {
    return Math.max(arr[1], arr[0]);
  }
  return Math.max(rec_maxSum(arr, i - 2) + arr[i], rec_maxSum(arr, i - 1));
}
```

非递归代码：

``` java
public int dp_maxSum(int[] arr) {
  if (arr == null || arr.length == 0) {
    return -1;
  }
  if (arr.length == 1) {
    return arr[0];
  }
  if (arr.length == 2) {
    return Math.max(arr[1], arr[0]);
  }

  int[] dp = new int[arr.length];
  dp[0] = arr[0];
  dp[1] = Math.max(arr[1], arr[0]);

  for (int i = 2; i < arr.length; i++) {
    dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 1]);
  }
  return dp[arr.length - 1];
}
```

### 求指定和

| 0|  1  |  2   |  3   | 4    | 5    |
|--| :--:| :--: | :--: | :--: | :--: |
|3 |34   |4     |12    |5     |2     |

S = 9.

#### 状态转移方程

这道题需要找出数组中是否存在一堆数字加起来等于 S 的情况。和上道题类似的是，这里数组中的每一个数也都有选择和不选两种情况。

因此，假设函数 OPT(i, S) 为从起点到 i 为止距离 S 还需要相加的数，OPT(i, S) 的值也受两种情况的影响，一种是选择 arr[i]，一种是不选。

``` plain
                  / (选) OPT(arr[i - 1], S - arr[i])
OPT(arr[i], S) = or
                  \ (不选) OPT(arr[i - 1], S)
```

由于这里 S 也会随之变化，所以我们的状态方程加上了 S 这个参数：

1. 当选择 arr[i] 时，此时 OPT(i, S) 中 S 变为 S - arr[i]，i 变成 i - 1。代表着 arr[i - 1] 这一位需要加的数是 S - arr[i]。
2. 当不选择 arr[i] 时，此时 arr[i - 1] 这一位需要加的数还是 S。因此 OPT(arr[i], S) = OPT(arr[i - 1], S)。

#### 状态转移方程出口

这道题的出口有三种情况：

1. 当 S == 0 时，说明存在这样的一堆数，此时 return true。
2. 当 i == 0 时，说明找到底了也没有找到这样的一堆数，此时 return false。
3. 当 arr[i] > S 时，由于规定了题目中数组为正整数，S 也为正整数，那么当数组中的一个元素大于 S，肯定不存在相加还能等于 S 的情况。此时 return false。

#### 递归代码

``` java
public boolean rec_sum(int[] arr, int i, int S) {
  if (arr == null || arr.length == 0) {
    return false;
  }
  if (S == 0) {
    return true;
  }
  if (i == 0) {
    return false;
  }
  if (arr[i] > S) {
    return false;
  }
  return rec_sum(arr, i - 1, S - arr[i]) || rec_sum(arr, i - 1, S);
}
```

#### 非递归代码

利用 DP 来实现非递归的写法，这时需要设计一个二维数组 dp[i][j]。二维数组的行代表数组的下标，列代表 0~S 的值，数组的值代表位于数组中第 i 个数能不能拼凑出 S == j 的情况，它是一个布尔值。

比如，dp[3][9]，代表数组中第 3 个数(即 4)，能不能拼凑出等于 9 的情况，答案是可以的。

又比如，dp[2][9](即 34)，能不能拼凑出 9 的情况，答案是不可以的。因为 34 > 9 了，数组中又全是正整数，再怎么加都不能加出 9 来。

同时，每一个元素都只能向右或者向下走。

``` plain
arr  |      0  1  2  3  4  5  6  7  8  9
3    |   0  F  F  F  T  F  F  F  F  F  F
34   |   1  T
4    |   2  T
12   |   3  T  
5    |   4  T
2    |   5  T
```

另外，需要注意如何初始化这个二维数组：

1. 由于当 S == 0 时，return true。那么数组的第一列全为 true。
2. 当 i == 0 时，return false。那么数组的第一行全为 false。但是，当 arr[i] == S 时，此时为 true。

这道题的返回值将是二维数组的最后一个数，即 arr[arr.length - 1][S]。

``` java
public boolean dp_sum(int[] arr, int S) {
  if (arr == null || arr.length == 0) {
    return false;
  }
  boolean[][] dp = new boolean[arr.length][S + 1];
  for (int i = 0; i < dp.length; i++) {
    dp[i][0] = true;
  }
  for (int i = 0; i < dp[0].length; i++) {
    dp[0][i] = false;
  }
  // S == arr[i] 的情况
  dp[0][arr[0]] = true;

  for (int i = 1; i < dp.length; i++) {
    for (int j = 1; j < dp[0].length; j++) {
      // 当 arr[i] > j 时，只有走不选这条路。
      if (arr[i] > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i - 1][j - arr[i]] || dp[i - 1][j];
      }
    }
  }
  return dp[dp.length - 1][dp[0].length - 1];
}
```

## 总结

1. 动态规划的出现是为了解决重叠子问题，即避免重复计算。
2. 解决动态规划先找递推关系式，再初始化递推式，接着找出需要返回的结果。这三个要素一搞定，就有了代码的大致轮廓。
3. 找递推式，初始化递推式，找返回值都有一种做题的感觉在里面，因此多练题应该会变得顺手得多。