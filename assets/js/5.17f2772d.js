(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{149:function(t,e,r){"use strict";r.r(e);var i=r(0),n=Object(i.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("p",[t._v("首先是第一个数和第二个数进行比较，谁大谁在后面，接着第二个数和第三个数进行比较，谁大谁在后面。以此类推，经过一轮比较下来最大的数就沉到了最后一位。将数组范围缩小到 0-N-1，再经历一轮第二大的数就在倒数第二的位置。以此类推，当数组范围只剩一个数时，数组就变得有序了。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/BubbleSort.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 代码"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/BubbleSort.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 代码"),r("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("首先在整个数组中选出最小的数放在最前面，接着在剩下的数组中选出最小的数放在第二个位置。以此类推，当剩下的数组只剩一个数时，整个数组就变得有序了。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/SelectSort.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 代码"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/SelectSort.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 代码"),r("OutboundLink")],1)]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),r("p",[t._v("首先将第二个位置和第一个位置的数进行比较，谁小谁在前。第三个位置上的数和第一、二个位置上的数比较，插入合适的位置。第四个位置上的数和第一、二、三个位置上的数比较，插入合适的位置。以此类推，当安顿好了数组的最后一个数，整个数组也变得有序了。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/InsertSort.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 代码"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/InsertSort.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 代码"),r("OutboundLink")],1)]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),r("p",[t._v("首先将数组中的每一个数看作长度为 1 的有序序列，然后把相邻的有序序列进行合并操作，得到最大长度为 2 的有序序列。接着再把相邻序列进行合并，得到\b最大程度为 4 的有序序列。以此类推，直到数组中的所有数合并成一个有序序列。")]),t._v(" "),t._m(13),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/MergeSort.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 代码"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/MergeSort.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 代码"),r("OutboundLink")],1)]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),r("p",[t._v("首先在数组中随机选一个作为基准数(一般选择中点位置的数)，接着将数组中小于等于基准数的放到数组左边，大于基准数的放到数组右边，使得整个数组整体有序。然后再对左右两边分别递归调用上述过程，从而使整个数组有序。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/JavaScript/sort/QuickSort.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript 代码"),r("OutboundLink")],1),t._v(", "),r("a",{attrs:{href:"https://github.com/Kexin-Li/LintCode/blob/master/Python/sort/QuickSort.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python 代码"),r("OutboundLink")],1)]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),r("p",[t._v("首先将数组中的 N 个数建成一个大小为 N 的大根堆，堆顶是所有元素中的最大值，将堆顶元素与堆的最后一个元素进行交换，将最大值脱离堆并作为有序部分放在数组的末尾。接着调整大根堆，将剩下元素的最大值放在堆顶然后脱离堆，加入有序部分。以此类推，当堆只剩下一个元素时，整个数组就有序了。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),r("p",[t._v("希尔排序是插入排序的改良版。插入排序的步长是 1，希尔排序的步长是从大到小逐渐调整的。")]),t._v(" "),t._m(20),t._v(" "),r("p",[t._v("希尔排序的时间复杂度高低完全取决于步长的选择，步长选择越优那么它的时间复杂度越低，反之时间复杂度就越高。")]),t._v(" "),t._m(21),t._v(" "),r("p",[t._v("时间复杂度为 "),r("code",[t._v("O(n)")]),t._v(" 的算法都不是基于比较的思想，而是基于"),r("a",{attrs:{href:"https://zh.wikipedia.org/zh-hant/%E6%A1%B6%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("桶排序"),r("OutboundLink")],1),t._v("的思想。常见的有计数排序和基数排序。")]),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("详见"),r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/%E8%AE%A1%E6%95%B0%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("计数排序"),r("OutboundLink")],1)]),t._v(" "),t._m(23),t._v(" "),r("p",[t._v("详见"),r("a",{attrs:{href:"https://zh.wikipedia.org/zh-hant/%E5%9F%BA%E6%95%B0%E6%8E%92%E5%BA%8F",target:"_blank",rel:"noopener noreferrer"}},[t._v("基数排序"),r("OutboundLink")],1)]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"排序算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#排序算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 排序算法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("本文记录了常用的排序算法，按照时间复杂度的分类方式，分为时间复杂度为 "),e("code",[this._v("O(n^2)")]),this._v(" 的算法，"),e("code",[this._v("O(nlogn)")]),this._v(" 的算法和 "),e("code",[this._v("O(n)")]),this._v(" 的算法依次讲解。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"时间复杂度为-o-n-2-的算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度为-o-n-2-的算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 时间复杂度为 "),e("code",[this._v("O(n^2)")]),this._v(" 的算法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("常见的时间复杂度为 "),e("code",[this._v("O(n^2)")]),this._v(" 的算法有冒泡排序，选择排序以及插入排序。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"冒泡排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 冒泡排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif",alt:"可视化过程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"选择排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#选择排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 选择排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif",alt:"可视化过程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"插入排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插入排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 插入排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif",alt:"可视化过程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"时间复杂度为-o-nlogn-的算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度为-o-nlogn-的算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 时间复杂度为 "),e("code",[this._v("O(nlogn)")]),this._v(" 的算法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("常见的时间复杂度为 "),e("code",[this._v("O(nlogn)")]),this._v(" 的算法有归并排序、快速排序、堆排序以及希尔排序。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"归并排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#归并排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 归并排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("所以归并排序的思想在于"),e("strong",[this._v("将两两有序序列合并成一个有序序列")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif",alt:"可视化过程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"快速排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif",alt:"可视化过程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"堆排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 堆排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif",alt:"可视化过程"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"希尔排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#希尔排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 希尔排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("初始的步长需要我们来制定，比如 "),e("code",[this._v("6 5 3 1 8 7 2 4")]),this._v(" 这个数组，我们选择初始步长为 3，那么 "),e("code",[this._v("6 5 3")]),this._v(" 这前三个数可以暂不做调整。接着从 1 开始向前跳三位，与 6 进行比较，进而交换位置，再往前跳三位由于越界了所以不作调整了。然后看 8 这位数，向前跳三位与 5 比较，由于 8 > 5 所以不做调整。以此调整完整个数组，再修改步长为 2 和 1 再分别对数组做调整。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"时间复杂度为-o-n-的算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度为-o-n-的算法","aria-hidden":"true"}},[this._v("#")]),this._v(" 时间复杂度为 "),e("code",[this._v("O(n)")]),this._v(" 的算法")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"计数排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#计数排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 计数排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"基数排序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基数排序","aria-hidden":"true"}},[this._v("#")]),this._v(" 基数排序")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("名称")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("时间复杂度")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("空间复杂度")]),t._v(" "),r("th",{staticStyle:{"text-align":"center"}},[t._v("稳定性")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("冒泡排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n^2)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(1)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),r("tr",[r("td",[t._v("选择排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n^2)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(1)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("不稳定")])]),t._v(" "),r("tr",[r("td",[t._v("插入排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n^2)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(1)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),r("tr",[r("td",[t._v("归并排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n*logn)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),r("tr",[r("td",[t._v("快速排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n*logn)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(logn)")]),t._v(" ~ "),r("code",[t._v("O(n)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("不稳定")])]),t._v(" "),r("tr",[r("td",[t._v("堆排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n*logn)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(1)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("不稳定")])]),t._v(" "),r("tr",[r("td",[t._v("希尔排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n*logn)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(1)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("不稳定")])]),t._v(" "),r("tr",[r("td",[t._v("计数排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(m)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])]),t._v(" "),r("tr",[r("td",[t._v("基数排序")]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(n)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[r("code",[t._v("O(m)")])]),t._v(" "),r("td",{staticStyle:{"text-align":"center"}},[t._v("稳定")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Notes：")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("计数排序与基数排序中的空间复杂度 "),r("code",[t._v("O(m)")]),t._v(" 中的 m 指的是桶的数量。")]),t._v(" "),r("li",[t._v("稳定性：指相同值的元素在排序前和排序后的相对次序是否保持不变。")]),t._v(" "),r("li",[t._v("桶排序虽然时间复杂度高，但可以理解为是一种空间换时间的思想。当数据量很大时，需要准备的桶也就越多，会一定程序造成空间的浪费。因此具有很大的局限性。")]),t._v(" "),r("li",[t._v("快速排序之所以叫快速排序，不是因为它比堆排序、归并排序更优良，而是因为它的常量系数比较低。")]),t._v(" "),r("li",[t._v("在工程中，并不会特定使用某一种排序，而是综合使用。比如当元素个数比较少时，会使用插入排序；当元素个数较多时，会使用快速排序。")])])}],!1,null,null,null);n.options.__file="README.md";e.default=n.exports}}]);