# LintCode

LintCode/LeetCode algorithm written by Java, Python and JavaScript.

阅读更多算法文章: https://kexin-li.github.io/LintCode

## Catalog

- [Sort](#sort)
- [Binary Search](#binary-search)
- [Two Pointer](#two-pointer)
- [BFS](#bfs)
- [DFS](#dfs)
- [Array](#array)
- [Linked List](#linked-list)
- [String](#string)
- [Dynamic Programming](#dp)
- [Binary Tree](#binary-tree)

## Sort

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Bubble Sort](https://www.lintcode.com/problem/sort-integers/description)|[JavaScript](JavaScript/sort/BubbleSort.js), [Python3](Python/sort/BubbleSort.py)|冒泡排序|
|2|[Insert Sort](https://www.lintcode.com/problem/sort-integers/description)|[JavaScript](JavaScript/sort/InsertSort.js), [Python3](Python/sort/InsertSort.py)|插入排序|
|3|[Select Sort](https://www.lintcode.com/problem/sort-integers/description)|[JavaScript](JavaScript/sort/SelectSort.js), [Python3](Python/sort/SelectSort.py)|选择排序|
|4|[Merge Sort](https://www.lintcode.com/problem/sort-integers/description)|[JavaScript](JavaScript/sort/MergeSort.js), [Python3](Python/sort/MergeSort.py)|归并排序|
|5|[Quick Sort](https://www.lintcode.com/problem/sort-integers/description)|[JavaScript](JavaScript/sort/quickSort.js) [Python3](Python/sort/QuickSort.py)|快速排序|
||**[排序算法总结](Note/sort.md)**||**[Summary](Note/sort.md)**|

## Binary Search

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Classical Binary Search](https://www.lintcode.com/problem/classical-binary-search/)|[JavaScript](JavaScript/binarysearch/search.js), [Java](Java/binarysearch/ClassicalBinarySearch.java), [Python3](Python/binarysearch/BinarySearch.py)|  |
|2|[Maximum Number in Mountain Sequence](http://www.lintcode.com/en/problem/maximum-number-in-mountain-sequence/)|[JavaScript](JavaScript/binarysearch/mountainSequence.js), [Java](Java/binarysearch/MountainSequence.java)| |
|3|[Last Position of Target](https://www.lintcode.com/problem/last-position-of-target/description)|[JavaScript](JavaScript/binarysearch/lastPosition.js), [Java](Java/binarysearch/LastPosition.java)| |
|4|[First Position of Target](https://www.lintcode.com/problem/first-position-of-target/description)|[JavaScript](JavaScript/binarysearch/firstPosition.js)||
|5|[K Closest Numbers In Sorted Array](http://www.lintcode.com/en/problem/k-closest-numbers-in-sorted-array/)|[Java](Java/binarysearch/KClosestNumber.java)| |
|6|[Search in a Big Sorted Array](http://www.lintcode.com/en/problem/search-in-a-big-sorted-array/)|[Java](Java/binarysearch/SearchBigSortedArray.java)|倍增法|
|7|[Find Minimum in Rotated Sorted Array](http://www.lintcode.com/en/problem/find-minimum-in-rotated-sorted-array/)|[Java](Java/binarysearch/FindMin.java)||
|8|[Find Peak Element](http://www.lintcode.com/en/problem/find-peak-element/)|[Java](Java/binarysearch/FindPeak.java)||
|9|[First Bad Version](http://www.lintcode.com/en/problem/search-a-2d-matrix/)|[Java](Java/binarysearch/FindFirstBadVersion.java)||
|10|[Search in Rotated Sorted Array](http://www.lintcode.com/en/problem/search-in-rotated-sorted-array/)|[Java](Java/binarysearch/Search.java)||
|11|[Recover Rotated Sorted Array](https://www.lintcode.com/problem/recover-rotated-sorted-array/description)|[Java](Java/binarysearch/RecoverRotatedSortedArray.java)||
|12|[Pow(x, n)](https://www.lintcode.com/problem/powx-n/description)|[Java](Java/binarysearch/MyPow.java)|快速幂算法|
|13|[Fast Power](https://www.lintcode.com/problem/fast-power/description)||**TODO**|
||**[二分法总结](Note/binarysearch.md)**||**[Summary](Note/binarysearch.md)**|

## Two Pointer

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Two Sum](https://www.lintcode.com/problem/two-sum/description)|[Java](Java/twopointer/TwoSum.java), [Python3](Python/twopointer/TwoSum.py)||
|2|[Valid Palindrome](https://www.lintcode.com/problem/valid-palindrome/description)|[Java](Java/twopointer/IsPalindrome.java)||
|3|[Valid Palindrome II](https://www.lintcode.com/problem/valid-palindrome-ii/description)|[Java](Java/twopointer/IsPalindromeII.java)||
|4|[deduplication](https://www.lintcode.com/problem/remove-duplicate-numbers-in-array/description)|[Java](Java/twopointer/Deduplication.java)||
|5|[Window Sum](https://www.lintcode.com/problem/window-sum/description)|[Java](Java/twopointer/WinSum.java)||
|6|[Two Sum - Difference equals to target](https://www.lintcode.com/problem/two-sum-difference-equals-to-target/description)|[Java](Java/twopointer/TwoSum7.java)||
|7|[Linked List Cycle](https://www.lintcode.com/problem/linked-list-cycle/note)|[Java](Java/twopointer/HasCycle.java)||
|8|[Quick Sort](https://www.lintcode.com/problem/sort-integers-ii/description)|[Java](Java/twopointer/QuickSort.java)|快速排序|
|9|[Merge Sort](https://www.lintcode.com/problem/sort-integers-ii/description)|[Java](Java/twopointer/MergeSort.java)|归并排序|
|10|[Kth Largest Element](https://www.lintcode.com/problem/kth-largest-element/description)|[Java](Java/twopointer/QuickSelect.java)|Top K|
|11|[Sort Colors](https://www.lintcode.com/problem/sort-colors/description)|[Java](Java/twopointer/SortColor.java), [Python3](Python/twopointer/SortColor.py)|三指针|
|12|[Move Zeros](https://www.lintcode.com/problem/move-zeroes/description)|[Java](Java/twopointer/MoveZeros.java)||
|13|[Partition Array](https://www.lintcode.com/problem/partition-array/description)|[Java](Java/twopointer/MoveZeros.java)||
|14|[3 Sum](https://www.lintcode.com/problem/3sum/description)|[Java](Java/twopointer/ThreeSum.java)||
||**[双指针算法总结](Note/two-pointer.md)**||**[Summary](Note/two-pointer.md)**|

## BFS

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Binary Tree Level Order Traversal](https://www.lintcode.com/problem/binary-tree-level-order-traversal/description)|[Java](Java/bfs/LevelOrder.java), [Python3](Python/bfs/LevelOrder.py)||
|2|[Number of Islands](https://www.lintcode.com/problem/number-of-islands/description)|[Java](Java/bfs/NumIslands.java), [Python3](Python/bfs/NumIslands.py)||
|3|[Topological Sorting](https://www.lintcode.com/problem/topological-sorting/description)|[Java](Java/bfs/TopSorting.java)|拓扑排序|
|4|[Word Ladder](https://www.lintcode.com/problem/word-ladder/description)|[Java](Java/bfs/WordLadder.java)|BFS+HashSet|
|5|[Surrounded Regions](https://www.lintcode.com/problem/surrounded-regions/description)|[Java](Java/bfs/SurroundedRegions.java), [Python3](Python/bfs/SurroundedRegions.py)||
|6|[Shortest Path in Undirected Graph](https://www.lintcode.com/problem/shortest-path-in-undirected-graph/description)|[Java](Java/bfs/ShortestPath.java)|双向宽搜|
||**[BFS 算法总结](Note/bfs.md)**||**[Summary](Note/bfs.md)**|

## DFS

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Maximum Depth of Binary Tree](https://www.lintcode.com/problem/maximum-depth-of-binary-tree/description)|[Java](Java/dfs/MaxDepth.java), [Python3](Python/dfs/MaxDepth.py), [JavaScript](JavaScript/dfs/MaxDepth.js)|遍历/分治|
|2|[Balanced Binary Tree](https://www.lintcode.com/problem/balanced-binary-tree/description)|[Java](Java/dfs/IsBalanced.java)|分治法|
|3|[Validate Binary Search Tree](https://www.lintcode.com/problem/validate-binary-search-tree/description)|[Java](Java/dfs/ValidBST.java), [JavaScript](JavaScript/dfs/ValidBST.js)|遍历/分治|
|4|[Closest Binary Search Tree Value](https://www.lintcode.com/problem/closest-binary-search-tree-value/description)|[Java](Java/dfs/ClosestValue.java), [JavaScript](JavaScript/dfs/ClosestValue.js)|二分|
|5|[Minimum Subtree](https://www.lintcode.com/problem/minimum-subtree/description)|[Java](Java/dfs/MinSubtree.java)|遍历+分治|
|6|[Triangle](https://www.lintcode.com/problem/triangle/description)|[Java](Java/dfs/Triangle.java)|分治+记忆搜索|
|7|[Combinations](https://www.lintcode.com/problem/combinations/description)|[Java](Java/dfs/Combinations.java)|组合|
||**[DFS 算法总结](Note/dfs.md)**||**[Summary](Note/dfs.md)**|

## Array

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Maximum Subarray](https://www.lintcode.com/problem/maximum-subarray/description)|[Java](Java/array/MaxSubarray.java), [JavaScript](JavaScript/array/MaxSubarray.js), [Python3](Python/array/MaxSubarray.py)|前缀和|
|2|[Median of two Sorted Arrays](https://www.lintcode.com/problem/median-of-two-sorted-arrays/description)|[Python3](Python/array/MedianOfSortedArray.py)||
|3|[Implement Stack by Two Queues](https://www.lintcode.com/problem/implement-stack-by-two-queues/description)|[Java](Java/array/Stack.java)||
|4|[Single Number](https://leetcode.com/problems/single-number/description/)|[JavaScript](JavaScript/array/SingleNumber.js), [Python3](Python/array/SingleNumber.py)||
|5|[Move Zeros](https://leetcode.com/problems/move-zeroes/description/)|[JavaScript](JavaScript/array/MoveZeros.js), [Python3](Python/array/MoveZeros.py)||
|6|[Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/)|[JavaScript](JavaScript/array/FindDisappearNumbers.js), [Python3](Python/array/FindDisappearNumbers.py)||
|7|[Majority Element](https://leetcode.com/problems/majority-element/description/)|[JavaScript](JavaScript/array/MajorityNumber.js), [Python3](Python//array/MajorityNumber.py)||
|8|[Reshape the Matrix](https://leetcode.com/problems/reshape-the-matrix/description/)| [Python3](Python/array/matrixReshape.py)||
|9|[Flipping an Image](https://leetcode.com/problems/flipping-an-image/description/)|[JavaScript](JavaScript/array/flipAndInvertImage.js), [Python3](Python/array/flipAndInvertImage.py)||
|10|[Array Partition I](https://leetcode.com/problems/array-partition-i/description/)|[JavaScript](JavaScript/array/arrayPairSum.js), [Python3](Python/array/arrayPairSum.py)||
|11|[Transpose Matrix](https://leetcode.com/problems/transpose-matrix/description/)| [Python3](Python/array/transpose.py)||
|12|[Toeplitz Matrix](https://leetcode.com/problems/toeplitz-matrix/description/)| [Python3](Python/array/isToeplitzMatrix.py)||
|13|[Monotonic Array](https://leetcode.com/problems/monotonic-array/description/)|[JavaScript](JavaScript/array/isMonotonic.js), [Python3](Python/array/isMonotonic.py)||
|14|[Max Consecutive Ones](https://leetcode.com/problems/max-consecutive-ones/description/)|[JavaScript](JavaScript/array/findMaxConsecutiveOnes.js), [Python3](Python/array/findMaxConsecutiveOnes.py)||
|15|[Max Area of Island](https://leetcode.com/problems/max-area-of-island/description/)| [Python3](Python/array/maxAreaOfIsland.py)||
|16|[Fair Candy Swap](https://leetcode.com/problems/fair-candy-swap/description/)| [Python3](Python/array/fairCandySwap.py)
|17|[Contains Duplicate](https://leetcode.com/problems/contains-duplicate/description/)| [Python3](Python/array/containsDuplicate.py)||
|18|[Two Sum II - Input array is sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/)|[JavaScript](JavaScript/array/twoSumII.js), [Python3](Python/array/twoSumII.py)|HashMap, Binary Search|
|19|[1-bit and 2-bit Characters](https://leetcode.com/problems/1-bit-and-2-bit-characters/description/)| [Python3](Python/array/isOneBitCharacter,py)||
|20|[Best Time to Buy and Sell Stock II](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/)| [Python3](Python/array/maxProfit.py)||
|21|[Degree of an Array](https://leetcode.com/problems/degree-of-an-array/description/)| [Python3](Python/array/findShortestSubArray.py)||
|22|[Positions of Large Groups](https://leetcode.com/problems/positions-of-large-groups/description/)| [Python3](Python/array/largeGroupPositions.py)||
|23|[Missing Number](https://leetcode.com/problems/missing-number/description/)| [Python3](Python/array/missingNumber.py)||
|24|[Maximum Product of Three Numbers](https://leetcode.com/problems/maximum-product-of-three-numbers/description/)| [Python3](Python/array/maximumProduct.py)||
|25|[Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/description/)|[JavaScript](JavaScript/array/numJewelsInStones.js)||
|26|[Min Cost Climbing Stairs](https://leetcode.com/problems/min-cost-climbing-stairs/description/)| [Python3](Python/array/minCostClimbingStairs.py)||
|27|[Longest Continuous Increasing Subsequence](https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/)| [Python3](Python/array/findLengthOfLCIS.py)||
|28|[Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/description/)| [Python3](Python/array/generate.py)||
|29|[Remove Element](https://leetcode.com/problems/remove-element/description/)| [Python3](Python/array/removeElement.py)||
|30|[Peak Index in a Mountain Array](https://leetcode.com/problems/peak-index-in-a-mountain-array/description/)|[JavaScript](JavaScript/array/peakIndexInMountainArray.js)|Binary Search|
|31|[Sort Array By Parity](https://leetcode.com/problems/sort-array-by-parity/description/)| [Python3](Python/array/sortArrayByParity.py)||
|32|[Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/description/)|[JavaScript](JavaScript/array/searchMatrix.js), [Python3](Python/array/searchMatrix.py)||
||**[Array 算法总结](Note/array.md)**||**[Summary](Note/array.md)**|

## Linked List

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Delete Node in a Linked List](https://www.lintcode.com/problem/delete-node-in-a-linked-list/description)|[JavaScript](JavaScript/linkedlist/DeleteNode.js), [Python3](Python/linkedlist/DeleteNode.py)||
|2|[Reverse Linked List](https://www.lintcode.com/problem/reverse-linked-list/description)|[JavaScript](JavaScript/linkedlist/ReverseList.js), [Python3](Python/linkedlist/ReverseList.py)||
|3|[Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/description/)| [Python3](Python/linkedlist/reverseBetween.py)||
|4|[Linked List Cycle](https://www.lintcode.com/problem/linked-list-cycle/description)|[JavaScript](JavaScript/linkedlist/HasCycle.js), [Python3](Python/linkedlist/HasCycle.py)||
|5|[Merge Two Sorted List](https://leetcode.com/problems/merge-two-sorted-lists/description/)|[JavaScript](JavaScript/linkedlist/MergeList.js), [Python3](Python/linkedlist/MergeList.py)||
|6|[Remove Duplicates from Sorted List](https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/)|[JavaScript](JavaScript/linkedlist/DeleteDuplicates.js), [Python3](Python/linkedlist/DeleteDuplicates.py)||
|7|[Intersection of Two Linked Lists](https://leetcode.com/problems/intersection-of-two-linked-lists/description/)| [Python3](Python/linkedlist/getIntersectionNode.py)||
|8|[Remove Linked List Elements](https://leetcode.com/problems/remove-linked-list-elements/description/)| [JavaScript](JavaScript/linkedlist/RemoveNodes.js), [Python3](Python/linkedlist/removeElements.py)||
|9|[Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/description/)| [Python3](Python/linkedlist/isPalindrome.py)||
|10|[Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/submissions/1)| [Python3](Python/linkedlist/middleNode.py)||
|11|[Design Linked List](https://leetcode.com/problems/design-linked-list/description/)| [Python3](Python/linkedlist/MyLinkedList.py)||
|12|[Add Two Numbers](https://leetcode.com/problems/add-two-numbers/description/)| [Python3](Python/linkedlist/addTwoNumbers.py)||
|13|[Add Two Numbers II](https://leetcode.com/problems/add-two-numbers-ii/description/)| [Python3](Python/linkedlist/addTwoNumbersII.py)||
|14|[Split Linked List in Parts](https://leetcode.com/problems/split-linked-list-in-parts/description/)| [Python3](Python/linkedlist/splitListToParts.py)||
|15|[Rotate List](https://leetcode.com/problems/rotate-list/description/)| [Python3](Python/linkedlist/rotateRight.py)||
|16|[Reorder List](https://leetcode.com/problems/reorder-list/description/)| [Python3](Python/linkedlist/reorderList.py)||
|17|[Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/)| [Python3](Python/linkedlist/removeNthFromEnd.py)||
||**[Linked List 算法总结](Note/linkedlist.md)**||**[Summary](Note/linkedlist.md)**|

## String

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[First Unique Character in a String](https://www.lintcode.com/problem/first-unique-character-in-a-string/description)|[Java](Java/string/UniqueChar.java), [Python3](Python/string/UniqueChar.py)||
|2|[Reverse Words in a String](https://www.lintcode.com/problem/reverse-words-in-a-string/description)|[JavaScript](JavaScript/string/ReverseWords.js)||
|3|[Reverse Words in a String II](https://www.lintcode.com/problem/reverse-words-in-a-string-ii/description)| [Python3](Python/string/ReverseWordsII.py)||
|4|[Reverse String](https://leetcode.com/problems/reverse-string/description/)|[JavaScript](JavaScript/string/ReverseString.js)||
|5|[Valid Anagram](https://www.lintcode.com/problem/valid-anagram/description)|[JavaScript](JavaScript/string/Anagram.js)||
|6|[Rotate String](https://www.lintcode.com/problem/rotate-string/description)|[Java](Java/string/RotateString.java), [Python3](Python/string/RotateString.py)|部分逆序|
|7|[Palindrome Number](https://www.lintcode.com/problem/palindrome-number/description)|[JavaScript](JavaScript/string/IsPalindromeNum.js), [Python3](Python/string/IsPalindromeNum.py)||
|8|[Valid Parenthesis String](https://www.lintcode.com/problem/valid-parenthesis-string/description)| [Python3](Python/string/CheckValidString.py)||
||**[String 算法总结](Note/string.md)**||**[Summary](Note/string.md)**|

## DP

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Minimum Path Sum](https://www.lintcode.com/problem/minimum-path-sum/description)|[Java](Java/dp/MinPathSum.java), [Python3](Python/dp/MinimumPathSum.py)|坐标型|
|2|[Unique Paths](https://www.lintcode.com/problem/unique-paths/description)|[Java](Java/dp/UniquePaths.java), [Python3](Python/dp/UniquePaths.py)|坐标型|
|3|[Unique Paths II](https://www.lintcode.com/problem/unique-paths-ii/description)|[Java](Java/dp/UniquePathII.java), [Python3](Python/dp/UniquePathsII.py)|坐标型|
|4|[Fibonacci](https://www.lintcode.com/problem/fibonacci/description)|[Python3](Python/dp/Fibonacci.py)|斐波那契|
|5|[Climbing Stairs](https://www.lintcode.com/problem/climbing-stairs/description)|[Java](Java/dp/ClimbStairs.java), [Python3](Python/dp/ClimbStairs.py)|斐波那契变体|
|6|[Jump Game](https://www.lintcode.com/problem/jump-game/description)|[Python3](Python/dp/JumpGame.py)||
|7|[Triangle](https://www.lintcode.com/problem/triangle/description)|[Python3](Python/dp/Triangle.py)||
|8|[Longest Increasing Subsequence](https://www.lintcode.com/problem/longest-increasing-subsequence/description)|[Java](Java/dp/LongestIncreasingSubsequence.java), [Python3](Python/dp/LongestIncreasingSubsequence.py)|序列型|
|9|[Longest Common Subsequence](https://www.lintcode.com/problem/longest-common-subsequence/)|[Java](Java/dp/LongestCommonSubsequence.java), [Python3](Python/dp/LongestCommonSubsequence.py)|序列型|
|10|[Longest Continuous Increasing Subsequence](https://www.lintcode.com/problem/longest-continuous-increasing-subsequence/description)| [Python3](Python/dp/LongestContinuousIncreasingSubsequence.py)||
|11|[Edit Distance](https://www.lintcode.com/problem/edit-distance/description)|[Java](Java/dp/EditDistance.java)|序列型|
|12|[Paint Fence](https://www.lintcode.com/problem/paint-fence/description)| [Python3](Python/dp/PaintFence.py)||
|13|[Range Sum Query](https://www.lintcode.com/problem/range-sum-query-immutable/description)| [Python3](Python/dp/RangeSumQuery.py)||
|14|[Interleaving String](https://www.lintcode.com/problem/interleaving-string/description)| [Python3](Python/dp/isInterleave.py)
|15|[Maximum Subarray](https://leetcode.com/problems/maximum-subarray/description/)| [Python3](Python/dp/maxSubArray.py)||
||**[动态规划算法总结](Note/dp/dp.md)**||**[Summary](Note/dp/dp.md)**|

## Binary Tree

| #   |  Problem  |  Solution  |  Keywords  |
| --- | --------- | :--------: | :--------: |
|1|[Merge Two Binary Trees](https://leetcode.com/problems/merge-two-binary-trees/description/)|[JavaScript](JavaScript/binarytree/mergeTrees.js)||
|2|[Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)| [Python3](Python/binarytree/preorderTraversal.py)||
|3|[Binary Tree Inorder Traversal](https://leetcode.com/problems/binary-tree-inorder-traversal/)| [Python3](Python/binarytree/inorderTraversal.py)||
|4|[Binary Tree Postorder Traversal](https://leetcode.com/problems/binary-tree-postorder-traversal/)| [Python3](Python/binarytree/postorderTraversal.py)||
|5|[Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)| [Python3](Python/binarytree/buildTree.py)||
|6|[Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)| [Python3](Python/binarytree/levelOrder.py)||
|7|[Binary Tree Level Order Traversal II](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/description/)| [Python3](Python/binarytree/levelOrderBottom.py)||
|8|[Binary Tree Zigzag Level order Traversal](https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/)| [Python3](Python/binarytree/zigzagLevelOrder.py)||
|9|[Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)| [Python3](Python/binarytree/maxDepth.py)||
|10|[Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/submissions/)| [Python3](Python/binarytree/isBalanced.py)||