// 反转链表
function ListNode(x) {
  this.val = x;
  this.next = null;
}

function ReverseList(pHead) {
  let pre = null,
    cur = pHead;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

function ReverseList2(pHead) {
  let pre = null,
    cur = pHead;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

function ReverseList3(pHead) {
  let pre = null,
    cur = pHead;
  while (cur) {
    let next = cur.next;
    cur.next = pre;
    pre = cur;
    cur = next;
  }
  return pre;
}

// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);

// node1.next = node2;
// node2.next = node3;

// console.log(ReverseList(node1));
// console.log(ReverseList2(node1));

// 设计LRU缓存结构
/**
 * @ param {number} capacity
 */

var Solution = function (capacity) {
  this.max = capacity;
  this.map = new Map();
};

/**
 * @ param {number} key
 * @ param {number}
 */
Solution.prototype.get = function (key) {
  if (this.map.has(key)) {
    let value = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, value);
    return value;
  }
  return -1;
};

/**
 * @ param {number} key
 * @ param {number} value
 * @ return {void}
 */

Solution.prototype.set = function (key, value) {
  if (this.map.size === this.max) {
    let last = this.map.keys().next();
    this.map.delete(last.value);
  }
  this.map.set(key, value);
};

// 接雨水问题
/**
 * max water
 * @ param arr int整型一维数组 the array
 * @ return long长整型
 */

function maxWater(arr) {
  let res = 0;
  if (arr.length < 3) {
    return 0;
  }
  // 双指针
  let left = 0,
    right = arr.length - 1;
  let maxL = 0,
    maxR = 0;
  while (left < right) {
    maxL = Math.max(maxL, arr[left]);
    maxR = Math.max(maxR, arr[right]);
    if (maxL < maxR) {
      res += maxL - arr[left++];
    } else {
      res += maxR - arr[right--];
    }
  }
  return res;
}

function maxWater2(arr) {
  let res = 0;
  if (arr.length < 3) {
    return 0;
  }
  let left = 0,
    right = arr.length - 1,
    maxL = 0,
    maxR = 0;
  while (left < right) {
    maxL = Math.max(maxL, arr[left]);
    maxR = Math.max(maxR, arr[right]);
    if (maxL < maxR) {
      res += maxL - arr[left++];
    } else {
      res += maxR - arr[right--];
    }
  }
  return res;
}

// 盛水最多的容器
/**
 *  @ param height int整型一维数组
 *  @ return int整型
 */
start = new Date();

function maxArea(height) {
  let res = 0,
    len = height.length;
  if (len < 2) {
    return 0;
  }
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      let deepth = Math.min(height[i], height[j]);
      res = Math.max(deepth * (j - i), res);
    }
  }
  return res;
}
// for (i = 0; i < 1000; i++) {
//   Math.sqrt(i);
// }
end = new Date();
// console.log(maxArea([1, 7, 3, 2, 4, 5, 8, 1, 7]));
// console.log("Operation took" + (end.getTime() - start.getTime() + " msec "));

// 最长无重复子数组
function maxLength(arr) {
  // 纪律最长无重复子数组的长度
  var max = 0;
  // 保存临时的无重复子数组
  var str = [];
  // 遍历数组每一个元素
  for (let i in arr) {
    var index = str.indexOf(arr[i]);
    // 如果此时str里面发现重复的元素，则去掉前面的数组，从新开始生成子数组
    if (index !== -1) {
      str.splice(0, str.indexOf(arr[i]) + 1);
    }
    // 更新子数组的长度
    str.push(arr[i]);
    max = Math.max(str.length, max);
  }
  return max;
}

function maxLength2(arr) {
  let max = 0;
  let strArr = [];
  for (let i in arr) {
    let index = strArr.indexOf(arr[i]);
    if (index !== -1) {
      strArr.splice(0);
    }
    strArr.push(arr[i]);
    max = Math.max(max, strArr.length);
  }
  return max;
}

function maxLength3(arr) {
  let len = arr.length;
  if (len < 2) {
    return len;
  }
  let max = 0;
  let str = [];
  for (let i in arr) {
    let index = str.indexOf(arr[i]);
    if (index !== -1) {
      str.splice(0);
    }
    str.push(arr[i]);
    max = Math.max(max, str.length);
  }
  return max;
}
// console.log(maxLength([1, 3, 5, 3, 9]));
// console.log(maxLength2([1, 3, 5, 3, 9]));

// 反转字符串
function resolve(str) {
  let len = str.length;
  if (len < 1) {
    return str;
  }
  return str.split("").reverse().join("");
}
// console.log(resolve("hello"));
// console.log(resolve('hw'))

// 最小覆盖子串
function minWindow(S, T) {
  // map 记录目标子串中需要的字符和相应的个数
  const map = new Map();
  let lent = T.length;
  let lens = S.length;
  for (let i = 0; i < lent; i++) {
    map.set(T[i], map.has(T[i]) ? map.get(T[i]) + 1 : 1);
  }
  let len = map.size;
  let res = "";
  let l = 0,
    r = 0;
  // 双指针从左边开始找
  while (r < lens) {
    // 取当前左边的第一个字符串，若在右边找到，右边map缩减一个
    const nowc = S[r];
    if (map.has(nowc)) {
      map.set(nowc, map.get(nowc) - 1);
      if (map.get(nowc) === 0) {
        len--;
      }
    }
    // 找到所需的子串，与上次找到的进行比较，更短则更新，这时候考虑左指针的移动
    while (len === 0) {
      let newstr = S.slice(l, r + 1);
      if (!res || res.length > newstr.length) {
        res = newstr;
      }
      let nowl = S[l];
      // 若左指针指向的字符是所需要的，需要将该字符的所需数量进行加一
      // 此时，右指针移动的时候也要找到对应的字符
      if (map.has(nowl)) {
        map.set(nowl, map.get(nowl) + 1);
        if (map.get(nowl) === 1) {
          len++;
        }
      }
      l++;
    }
    r++;
  }
  return res;
}
let S = "XDOYEZODEYXNZ";
let T = "XYZ";
// console.log(minWindow(S, T));
function minWindow2(S, T) {
  let lens = S.length;
  let lent = T.length;
  let map = new Map();
  for (let i = 0; i < lent; i++) {
    map.set(T[i], map.get(T[i]) ? map.get(T[i]) + 1 : 1);
  }
  let l = 0,
    r = 0,
    len = map.size,
    res = "";
  while (r < lens) {
    let nowc = S[r];
    if (map.has(nowc)) {
      map.set(nowc, map.get(nowc) - 1);
      if (map.get(nowc) === 0) {
        len--;
      }
    }
    while (len === 0) {
      let newstr = S.slice(l, r + 1);
      if (!res || res.length > newstr.length) {
        res = newstr;
      }
      let nowl = S[l];
      if (map.has(nowl)) {
        map.set(nowl, map.get(nowl) + 1);
        if (map.get(nowl) === 1) {
          len++;
        }
      }
      l++;
    }
    r++;
  }
  return res;
}

function minWindow3(S, T) {
  let lens = S.length;
  let lent = T.length;
  if (lens < lent) {
    return;
  }
  let map = new Map();
  for (let i = 0; i < lent; i++) {
    map.set(T[i], map.get(T[i]) ? map.get(T[i]) + 1 : 1);
  }
  let l = 0,
    r = 0,
    len = map.size,
    res = "";
  while (r < lens) {
    let nowc = S[r];
    if (map.has(nowc)) {
      map.set(nowc, map.get(nowc) - 1);
      if (map.get(nowc) === 0) {
        len--;
      }
    }
    while (len === 0) {
      let newstr = S.slice(l, r + 1);
      if (!res || newstr.length < res.length) {
        res = newstr;
      }
      let nowl = S[l];
      if (map.get(nowl)) {
        map.set(nowl, map.get(nowl) + 1);
        if (map.get(nowl) === 1) {
          len++;
        }
      }
      l++;
    }
    r++;
  }
  return res;
}
// console.log(minWindow3(S, T));

// 买卖股票的最好时机（二）可以多次购买
/**
 * @ param prices int整型一维数组 股票每一天的价格
 * @ return int整型
 */
// 只能购买一次
function maxProfit(prices) {
  let profit = 0,
    len = prices.length;
  // 买进价格，不要同一天买入卖出（没有收益）
  for (let i = 0; i < len; i++) {
    // 卖出价格
    for (let j = i + 1; j < len; j++) {
      let soldValue = prices[j] - prices[i];
      // 更新可能的最大收益值
      profit = Math.max(profit, soldValue);
    }
  }
  return profit;
}

function maxProfit3(prices) {
  // 贪心
  let minBuyPrice = prices[0],
    profit = 0,
    len = prices.length;
  for (let i = 1; i < len; i++) {
    minBuyPrice = Math.min(minBuyPrice, prices[i]);
    profit = Math.max(profit, prices[i] - minBuyPrice);
  }
  return profit;
}

function maxProfit2(prices) {
  let profit = 0,
    len = prices.length;
  for (let i = 1; i < len; i++) {
    let incresment = prices[i] - prices[i - 1];
    if (incresment > 0) {
      profit += incresment;
    }
  }
  return profit;
}

// console.log(maxProfit3([2, 1, 6, 5, 2, 4, 9]));

// 打家劫舍（二）
/**
 * @ param nums int整型一维数组
 * @ return int整型
 */
function rob(nums) {
  // 动态规划
  let len = nums.length;
  // 不偷第一家
  let dp1 = [];
  // 初始化dp数组
  (dp1[0] = 0), (dp1[1] = nums[1]);
  for (let i = 2; i < len; i++) {
    dp1[i] = Math.max(dp1[i - 1], nums[i] + dp1[i - 2]);
  }
  // 偷第一家不偷最后一家
  let dp2 = [];
  (dp2[0] = nums[0]), (dp2[1] = Math.max(nums[0], nums[1]));
  for (let i = 2; i < len; i++) {
    if (i === len - 1) {
      dp2[i] = Math.max(dp2[i - 1], nums[i - 2]);
    } else {
      dp2[i] = Math.max(dp2[i - 1], nums[i] + dp2[i - 2]);
    }
  }
  return dp1[len - 1] > dp2[len - 1] ? dp1[len - 1] : dp2[len - 1];
}

function rob2(nums) {
  let len = nums.length;
  // 1.
  let dp1 = [];
  (dp1[0] = 0), (dp1[1] = nums[1]);
  for (let i = 2; i < len; i++) {
    dp1[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  // 2.
  let dp2 = [];
  (dp2[0] = nums[0]), (dp2[1] = nums[0]);
  for (let i = 2; i < len; i++) {
    if (i === len - 1) {
      dp2[i] = Math.max(dp[i - 1], nums[i - 2]);
    } else {
      dp2[i] = Math.max(nums[i] + dp2[i - 2], dp2[i - 1]);
    }
  }
  return dp1[len - 1] > dp2[len - 1] ? dp1[len - 1] : dp2[len - 1];
}

// 打家劫舍（一）
/**
 * @ param nums int整型一维数组
 * @ return int整型
 */
function rob3(nums) {
  let dp = [];
  (dp[0] = nums[0]), (dp[1] = Math.max(nums[0], nums[1]));
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[len - 1];
}

// 最长的括号子串
/**
 * @ param s string字符串
 * @ return int整型
 */
function longestValidParentheses(s) {
  if (!s) {
    return 0;
  }
  // 辅助栈存储“（ ”的下标
  let len = s.length,
    max = 0,
    stack = [],
    start = -1;
  for (let i = 0; i < len; i++) {
    if (s[i] === ")") {
      // 此时辅助栈里面还没有左括号，从start到i都是不合法的，重置start = i
      if (!stack.length) {
        start = i;
      } else {
        // 从辅助栈里面取一个‘（ ’进行匹配
        stack.pop();
        if (stack.length) {
          // 辅助栈里还有多余的‘（ ’，合法的字符串为可以进行匹配的字符串
          max = Math.max(max, i - stack[stack.length - 1]);
        } else {
          max = Math.max(max, i - start);
        }
      }
    } else {
      stack.push(i);
    }
  }
  return max;
}

function longestValidParentheses2(s) {
  if (!s) {
    return 0;
  }
  let stack = [],
    len = s.length,
    start = -1,
    max = 0;
  for (let i = 0; i < len; i++) {
    if (s[i] === ")") {
      if (!stack.length) {
        start = i;
      } else {
        stack.pop();
        if (stack.length) {
          max = Math.max(max, i - stack[stack.length - 1]);
        } else {
          max = Math.max(max.i - start);
        }
      }
    } else {
      stack.push(i);
    }
  }
  return max;
}

// 正则表达式匹配
/**
 * @param {string}  str
 * @param {string} pattern
 * @return {boolean}
 */
function mathc(str, pattern) {
  const strLength = str.length,
    patternLength = pattern.length;
  // 1.dp 下标的含义
  // dp[i][j] 表示从 str 首字母到 i，以及从 pattern 首字母到 j 的子字符串是否匹配
  // 只要存在 i = m - 1, 有一个 j 即为 true

  // 2.初始化 dp 数组
  const dp = new Array(m + 1).fill(0).map(() => {
    new Array(n + 1).fill(false);
  });
  dp[0][0] = true;
  for (let i = 2; i <= patternLength; i++) {
    if (pattern[i - 1] === "*") {
      dp[0][i] = dp[0][i - 2];
    }
  }

  // 3.状态转移
  for (let i = 1; i <= strLength; i++) {
    for (let j = 1; j <= patternLength; j++) {
      if (pattern[j - 1] !== "*") {
        if (pattern[j - 1] === "." || pattern[j - 1] === str[i - 1]) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      } else if (j >= 2) {
        if (pattern[j - 2] === "." || pattern[j - 2] === str[i - 1]) {
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j];
        } else {
          dp[i][j] = dp[i][j - 2];
        }
      }
    }
  }

  // 4.返回值
  return dp[strLength][patternLength];
}

// 编辑距离
/**
 * @param {string} str1
 * @param {string} str2
 * @return {number}
 */
function editDistance(str1, str2) {
  // 初始化dp数组
  let dp = new Array(str1.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(str2.length + 1);
  }
  // dp[i][j] 表示从 str1 的前 i 位变化为 str2 的前 j 位所需要的次数
  // str1[i] = str2[j] => dp[i][j] = dp[i - 1][j - 1]
  // str1[i] != str[j] => dp[i][j] = min(dp[i-1][j-1],dp[i][j-1])+1
  // dp[i-1][j-1] 修改一个字符
  // dp[i][j-1] 删除一个字符
  // dp[i-1][j] 插入一个字符
  dp[0][0] = 0;
  for (let i = 1; i < dp.length; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }
  for (let i = 1; i < dp.length; i++) {
    dp[0][i] = dp[0][i - 1] + 1;
  }
  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[0].length; j++) {
      if (str[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
    }
  }
  return dp[str1.length][str2.length];
}

// 数字字符串转化成 IP 地址
/**
 * @param {string} s
 * @return {string[]}
 */
function restoreIpAddresses(s) {
  let ans = [];
  let path = [];

  const dfs = (str, count) => {
    if (count == 4 && str == "") {
      ans.push(path.join("."));
      return;
    }

    for (let i = 1; i <= 3 && i <= str.length; i++) {
      if (parseInt(str.substring(0, i)) <= 255) {
        if (i >= 2 && str[0] == "0") return;
        path.push(str.substring(0, i));
        dfs(str.substring(i, str.length), count + 1);
        path.pop();
      }
    }
  };
  dfs(s, 0);
  return ans;
}
// let str = "25525522135";
function restoreIpAddresses2(s) {
  let ans = [];
  let part = [];
  const dfs = (str, count) => {
    if (str === "" && count === 4) {
      ans.push(part.join("."));
    }
    return;
  };
  for (let i = 1; i < str.length && i <= 3; i++) {
    if (parseInt(str.substring(0, i)) <= 255) {
      if (str[0] === "0") {
        return;
      }
      part.push(str.substring(0, i));
      dfs(str.substring(i, str.length), count + 1);
      part.pop();
    }
  }
  dfs(s, 0);
  return ans;
}

/**
 * 最长回文子串
 * @param {string} A
 * @return {number}
 */
function getLongestPalindrome(A) {
  let res = 0;
  let len = A.length;
  if (len === 0 || len === 1) {
    return len;
  }
  for (let i = 0; i < len; i++) {
    // 偶数字符串
    const evenStr = isPalindrome(A, i, i);
    // 奇数字符串
    const oddStr = isPalindrome(A, i, i + 1);
    res = Math.max(res, evenStr.length, oddStr.length);
  }
  return res;
}
// 辅助函数判断字符串是否是回文字符串
function isPalindrome(s, left, right) {
  // 左右指针，从 s[l] 和 s[r] 分别向两边扩散，找到最长回文字符串
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.substr(left + 1, right - left - 1);
}

// let A = "qaq";
// console.log(getLongestPalindrome2(A));
// left 2 1 0 -1 => -1 + 1
// right 3 4 5 => 5 -(-1) + 1

function getLongestPalindrome2(str) {
  let res = 0;
  let len = str.length;
  if (len === 0 || len === 1) {
    return len;
  }
  for (let i = 0; i < len; i++) {
    const evenStr = isPalindrome2(str, i, i);
    const oddStr = isPalindrome2(str, i, i + 1);
    res = Math.max(res, evenStr.length, oddStr.length);
  }
  return res;
}

function isPalindrome2(str, left, right) {
  while (left >= 0 && right < str.length && str[left] === str[right]) {
    left--;
    right++;
  }
  return str.substr(left + 1, right - (left + 1));
}

/**
 * 连续子数组的最大和
 * @param {Array}
 * @return {Number}
 */
function findGreatestSumOfSubArray(arr) {
  // 动态规划，前面 i - 1 个子数组和为正 or 负
  // 初始化 dp 数组
  let dp = [];
  dp[0] = arr[0];

  // 状态转移方程
  for (let i = 1; i < arr.length; i++) {
    dp[0] = Math.max(dp[i - 1] + arr[i], arr[i]);
  }
  return Math.max(...dp);
}

/**
 *兑换零钱（一）
 *@param {Array} arr
 *@param {Number} aim
 *@return {Number}
 */
function minMoney(arr, aim) {
  // 动态规划
  // 初始化 dp 数组
  let dp = new Array(aim + 1).fill(Infinity);
  // 面额 0 需要 0 张货币兑换
  dp[0] = 0;

  // 状态转移
  for (let i = 0; i <= aim; i++) {
    // 循环遍历面额
    for (let coin of arr) {
      // 遍历数组里面的货币
      if (i - coin >= 0) {
        // 1.面额值大于货币值时可以兑换
        // 2.dp[i-coin] + 1： 表示兑换一枚当前货币后剩下的面额接着兑换所需要的货币数目
        // 3.每次都考虑是否兑换当前货币
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[aim] === Infinity ? -1 : dp[aim];
}
// console.log(minMoney([1, 5, 10, 20, 20, 5], 10));
function minMoney2(arr, aim) {
  let dp = new Array(aim + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i <= aim; i++) {
    for (let coin of arr) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  return dp[aim] === Infinity ? -1 : dp[aim];
}

/**
 * 把数字翻译成字符串
 * @param {String}
 * @return {Number}
 */
function solve(nums) {
  // 动态规划

  // 1.初始化 dp 数组
  let len = nums.length;
  let dp = new Array(len);
  dp[0] = 1;

  // 2.状态转移
  for (let i = 1; i < len; i++) {
    // 例如 i == 1， 取 0 1 两位字符串转数字
    let twoNumber = parseInt(nums.slice(i - 1, i + 1));
    if (i === len - 1 && nums[i] === 0 && twoNumber > 26) {
      // 2.1若遍历到最后一位， 当前为0， 并且当前两位 > 26, 不能转码
      dp[i] = 0;
    } else if (nums[i] === 0 || nums[i - 1] === 0 || twoNumber > 26) {
      // 2.2当前值为0，或者前一个值为0，或者当前两位 > 26,和前面一位的转码次数同
      dp[i] = dp[i - 1];
    } else {
      // 2.3
      dp[i] = i >= 2 ? dp[i - 1] + dp[i - 2] : dp[i - 1] + 1;
    }
  }
  return dp[len - 1];
}

function solve2(nums) {
  let len = nums.length;
  let dp = new Array(len);
  dp[0] = 1;

  for (let i = 1; i < len; i++) {
    let twoNumber = parseInt(nums.slice(i - 1, i + 1));
    if (i === len - 1 && nums[i] === 0 && twoNumber > 26) {
      dp[i] = 0;
    } else if (nums[i] === 0 || nums[i - 1] === 0 || twoNumber > 26) {
      dp[i] = dp[i - 1];
    } else {
      dp[i] = i >= 2 ? dp[i - 1] + dp[i - 1] : dp[i - 1] + 1;
    }
  }
  return dp[len - 1];
}

/**
 * 不同路径的数目（一）
 * @param {Number} x坐标
 * @param {Number} y坐标
 * @return {Number} 路径和
 */

function uniquePaths(m, n) {
  // 1.初始化 dp 数组
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 如果只有一列，路径和为1
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }
  // 如果只有一行，路径和为1
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // 2.状态转移
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
}

function uniquePaths(m, n) {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i <= m; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; i <= n; j++) {
    dp[0][j] = 1;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  return dp[m - 1][n - 1];
}

/**
 * 矩阵最长递增路径
 * @param {Array[]} 二维数组
 * @return {Number} 最长路径长度
 */

// 初始化一个二维数组
let cur = 1;
let arr = new Array(3).fill(0).map(() => new Array(3).fill(0));
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    arr[i][j] = cur++;
  }
}
// console.log(arr);
// console.log(longestMatrixIncreaseWay(arr));

function longestMatrixIncreaseWay(matrix) {
  const rowLen = matrix.length;
  const colLen = matrix[0].length;
  // 1.初始化 dp 数组
  const dp = new Array(rowLen).fill(0).map(() => new Array(colLen).fill(0));
  let ans = 0;

  // 2.dfs遍历，从一点往四个方向递归，碰到比他大的就加一，否则就加0，结束返回
  const dfs = (i, j, lastNum) => {
    // 越界
    if (
      i < 0 ||
      j < 0 ||
      i >= rowLen ||
      j >= colLen ||
      matrix[i][j] <= lastNum
    ) {
      return 0;
    }
    // 如果之前已经计算出来当前格子最大值，直接返回值
    if (dp[i][j]) {
      return dp[i][j];
    }
    // 往四个方向递归
    const top = dfs(i - 1, j, matrix[i][j]) + 1;
    const bottom = dfs(i + 1, j, matrix[i][j]) + 1;
    const left = dfs(i, j - 1, matrix[i][j]) + 1;
    const right = dfs(i, j + 1, matrix[i][j]) + 1;
    // 将四个方向最大的值记录到 dp 数组上
    dp[i][j] = Math.max(top, bottom, left, right);
    return dp[i][j];
  };
  // 3.状态转移
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      ans = Math.max(ans, dfs(i, j, -1));
    }
  }
  return ans;
}

function longestMatrixIncreaseWay2(matrix) {
  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  let dp = new Array(rowLength).fill(0).map(() => new Array(colLength).fill(0));
  let res = 0;

  let dfs = (i, j, lastNum) => {
    if (
      i < 0 ||
      i >= rowLength ||
      j < 0 ||
      j >= colLength ||
      matrix[i][j] <= lastNum
    ) {
      return 0;
    }
    if (dp[i][j]) {
      return dp[i][j];
    }
    let top = dfs(i - 1, j, lastNum) + 1,
      bottom = dfs(i + 1, j, lastNum) + 1,
      left = dfs(i, j - 1, lastNum) + 1,
      right = dfs(i, j + 1, lastNum) + 1;
    dp[i][j] = Math.max(top, bottom, left, right);
    return dp[i][j];
  };

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < colLength; j++) {
      res = Math.max(res, dfs(i, j, -1));
    }
  }

  return res;
}

/**
 * 括号生成
 * @param {Number} n
 * @return {String}
 */

function generateParenthesis(n) {
  let res = [];
  const dfs = (left, right, curStr) => {
    if (left === 0 && right === 0) {
      res.push(curStr);
    }
    if (left > 0) {
      dfs(left - 1, right, curStr + "(");
    }
    if (right > left) {
      dfs(left, right - 1, curStr + ")");
    }
  };
  dfs(n, n, "");
  return res;
}

function generateParenthesis2(n) {
  let res = [];
  const dfs = (left, right, curStr) => {
    if (left === 0 && right === 0) {
      res.push(curStr);
    }
    if (left > 0) {
      dfs(left - 1, right, curStr + "(");
    }
    if (right > left) {
      dfs(left, right - 1, curStr + ")");
    }
  };
  dfs(n, n, "");
  return res;
}
// console.log(generateParenthesis(3));

/**
 * 表达式求值
 *@param {String} 待计算的表达式
 *@return {Number}
 */

function caculater(s) {
  // write code here
  let ops = []; // 用来存储运算符
  let nums = []; // 用来存储数值和每次计算的结果
  //   console.log(isNaN(parseInt(s[0])));
  for (let i = 0; i < s.length; i++) {
    if ("(*".indexOf(s[i]) > -1) {
      // 判断 s[i] 是否为  ( 和 *
      ops.push(s[i]); // 是就入栈
    } else if (!isNaN(s[i])) {
      // 判断是否为 一个数字 ->number
      let temp = ""; // 临时变量
      while (i < s.length && !isNaN(s[i])) {
        temp = temp + s[i++]; // 因为 s 给的是一个字符串 所以通过这个办法 可以把 两位数的数字拼在一起
      }
      i--; // 如果 s[0] 和 s[1] 是一个操作数值12 经过上面的操作拼完了之后 i 会等于2 所以这里等让 i - 1 变回1 指向s[1]
      nums.push(parseInt(temp)); // 随后入栈
    } else if (s[i] == "+" || s[i] == "-") {
      // 如果是加号 或者 减号
      while (ops.length > 0 && "*+-".indexOf(ops[ops.length - 1]) > -1) {
        // 就将 ops数组里
        //的  * + - 等运算符 pop 出去进行操作
        let num1 = nums.pop();
        let num2 = nums.pop();
        let res = calc(ops.pop(), num1, num2); // 加减乘 操作函数 在下面
        nums.push(res); // 将得出的结果入栈  ,  如果你有疑问， 为什么最后栈中的就一顶只有结果，没有别的操作数字， 因为
        // 上面 num1 和 num2 赋值的时候 都 pop出去了
      }
      ops.push(s[i]); // 最后将 此次遇到的 + 号丢进栈里
    } else if (s[i] == ")") {
      // 如果遇到 )
      while (ops.length > 0 && ops[ops.length - 1] != "(") {
        // 只要栈不空， 和不遇到 (
        // 就一直循环
        let num1 = nums.pop();
        let num2 = nums.pop();
        let res = calc(ops.pop(), num1, num2); // 思想和上面一样
        nums.push(res); // 结果入栈
      }
      ops.pop(); // 把左括号丢出去
    }
  }
  while (ops.length > 0) {
    // 最后 ops 不空 不停
    let num1 = nums.pop();
    let num2 = nums.pop();
    let temp_res = calc(ops.pop(), num1, num2);
    nums.push(temp_res); // 最后的结果 丢进去
  }
  return nums.pop(); // 最后的结果 return 出去
}

function calc(op, b, a) {
  if (op == "+") return a + b;
  if (op == "-") return a - b;
  if (op == "*") return a * b;
  return 0;
}
// let calcStr = "3 *5";
// console.log(caculater(calcStr));

/**
 * 数据流中的中位数
 * @return {Number}
 */
let insertArr = [];

function Insert(num) {
  let i = 0;
  while (insertArr[i] < num) {
    i++;
  }
  insertArr.splice(i, 0, num);
}

function getMedian() {
  let index = Math.floor(insertArr.length / 2);
  if (insertArr % 2 === 0) {
    return (insertArr[index] + insertArr[index - 1]) / 2;
  } else {
    return insertArr[index];
  }
}

/**
 * 二叉树的后序遍历
 */
function TreeNode(x) {
  this.val = x;
  this.left = null;
  this.right = null;
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

node1.left = node2;
node1.right = node3;
// node2.left = node4;
// node2.right = node5;
node3.left = node6;
node3.right = node7;

// console.log(node1, "node1");
// 1.辅助栈（后序遍历： 左 => 右 => 根）
function posterTraversal(root) {
  let stack = [],
    res = [];
  while (stack.length || root) {
    if (root !== null) {
      stack.push(root);
      root = root.left;
    } else {
      root = root.right;
      root = stack.pop();
      res.push(root.val);
    }
  }
  return res;
}
// console.log("posterTraversal", posterTraversal2(node1));

// 2.递归实现（后序遍历： 左 => 右 => 根）
function posterTraversal2(root) {
  function traversal(node, res) {
    if (!node) {
      return;
    }
    traversal(node.left, res);
    traversal(node.right, res);
    res.push(node.val);
  }
  let res = [];
  traversal(root, res);
  return res;
}

/**
 * 先序遍历
 */
function preorderTraversal(root) {
  function traversal(node, res) {
    if (!node) {
      return;
    }
    res.push(node.val);
    traversal(node.left, res);
    traversal(node.right, res);
  }
  let res = [];
  traversal(root, res);
  return res;
}
// console.log("preorderTraversal", preorderTraversal(node1));

/**
 * 中序遍历
 */
function inorderTraversal(root) {
  function traversal(node, res) {
    if (!node) {
      return;
    }
    traversal(node.left, res);
    res.push(node.val);
    traversal(node.right, res);
  }
  let res = [];
  traversal(root, res);
  return res;
}
// console.log("inorderTraversal", inorderTraversal(node1));

/**
 * 层序遍历(递归)
 */
function levelOrderTraversal(root) {
  let arr = [];

  function traversal(node, arr, level) {
    if (node === null) {
      return;
    }
    if (arr[level] === undefined) {
      arr[level] = [];
    }
    arr[level].push(node.val);
    traversal(node.left, arr, level + 1);
    traversal(node.right, arr, level + 1);
  }
  traversal(root, arr, 0);
  return arr;
}

/**
 * 层序遍历(广度优先搜索)
 * @param {*} root
 * @return {Array}
 */
function levelOrderTraversal2(root) {
  if (!root) {
    return [];
  }
  // 创建队列，根节点入列
  let queue = [root];
  let res = [];
  while (queue.length) {
    // 获取根节点，根节点出列
    const curNode = queue.shift();
    // 访问队头
    res.push(curNode.val);
    // 队头的子节点依次入队
    curNode.left && queue.push(curNode.left);
    curNode.right && queue.push(curNode.right);
  }
  return res;
}
// console.log("levelOrderTraversal", levelOrderTraversal(node1));
// console.log(levelOrderTraversal2(node1))
/**
 * 重建二叉树
 */
function getBinaryTree(preorder, inorder) {
  function ListNode(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
  if (preorder.length === 0 || inorder.length === 0) {
    return null;
  }
  let rootNode = new ListNode(preorder[0]);
  let inorderRootNodeIndex = inorder.indexOf(preorder[0]);
  rootNode.left = getBinaryTree(
    preorder.slice(1, inorderRootNodeIndex + 1),
    inorder.slice(0, inorder)
  );
  rootNode.right = getBinaryTree(
    preorder.slice(inorderRootNodeIndex),
    inorder.slice(inorderRootNodeIndex)
  );
  return rootNode;
}

/**
 * 输出二叉树的右视图
 * @param {Array} preorderTraversal 先序遍历的数组
 * @param {Array} inorderTraversal 中序遍历的数组
 * @return {Array}
 */
function exportBinaryTreeRightElevation(preorderTraversal, inorderTraversal) {
  // 1.节点的构造函数
  function ListNode(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }

  // 2.根据先序遍历和后序遍历重构二叉树
  function getBinaryTree(preorder, inorder) {
    if (preorder.length === 0 || inorder === 0) {
      return null;
    }
    // 先序遍历第一个值一定是二叉树的根节点
    let rootNode = new ListNode(preorder[0]);
    let inorderRootNodeIndex = inorder.indexOf(preorder[0]);
    // 递归
    rootNode.left = getBinaryTree(
      preorder.slice(1, inorderRootNodeIndex + 1),
      inorder.slice(0, inorderRootNodeIndex)
    );
    rootNode.right = getBinaryTree(
      preorder.slice(inorderRootNodeIndex + 1),
      inorder.slice(inorderRootNodeIndex + 1)
    );
    return rootNode;
  }

  // 3.层序遍历输出二叉树的右视图
  function levelOrderTraversal(root) {
    let arr = [];

    function traversal(root, arr, level) {
      if (root === null) {
        return;
      }
      if (arr[level] === undefined) {
        arr[level] = [];
      }
      arr[level].push(root.val);
      traversal(root.left, arr, level + 1);
      traversal(root.right, arr, level + 1);
    }
    traversal(root, arr, 0);
    return arr;
  }

  // 4.输出二叉树的右视图
  let ans = [];
  let tree = getBinaryTree(preorderTraversal, inorderTraversal);
  let arr = levelOrderTraversal(tree);
  arr.forEach((item) => {
    ans.push(item[item.length - 1]);
  });
  return ans;
}

let preorderTraversalArr = preorderTraversal(node1);
let inorderTraversalArr = inorderTraversal(node1);
// console.log(exportBinaryTreeRightElevation(preorderTraversalArr,inorderTraversalArr))

/**
 * 序列化二叉树(辅助栈)
 */
const sign2 = "~"; // 占位
const delimiter2 = ",";
function Serialize2(root) {
  if (root === null) {
    return "";
  }
  let stack = [root];
  let res = [];
  const emtyNode = new TreeNode(sign2);
  while (stack.length) {
    let curNode = stack.shift();
    res.push(curNode.val);
    if (curNode === emtyNode) {
      continue;
    }
    if (curNode.left) {
      stack.push(curNode.left);
    } else {
      stack.push(emtyNode);
    }
    if (curNode.right) {
      stack.push(curNode.right);
    } else {
      stack.push(emtyNode);
    }
  }
  return res.join(delimiter);
}

function Deserialize2(s) {
  if (!s) {
    return null;
  }
  s = s.split(",");
  let rootNode = new TreeNode(s[0]);
  let queue = [rootNode];
  for (let i = 1; i < s.length; i += 2) {
    let curNode = queue.shift();
    let leftNode = s[i];
    let rightNode = s[i + 1];
    if (leftNode !== sign) {
      curNode.left = new TreeNode(leftNode);
      queue.push(curNode.left);
    }
    if (rightNode !== sign) {
      curNode.right = new TreeNode(rightNode);
      queue.push(curNode.right);
    }
  }
  return rootNode;
}
// console.log(Serialize2(node1));
// console.log(Deserialize2(Serialize2(node1)))

/**
 * 在二叉树中找到两个节点的最近公共祖先
 * @param {TreeNode} root 节点类
 * @param {Number} o1 节点值
 * @param {Number} o2 节点值
 * @return {Number} 返回 o1 和 o2 最近公共祖先的节点
 */
function lowestCommonAncestor(root, o1, o2) {
  // 叶子节点返回
  if (root === null) {
    return null;
  }
  // 1.o1 o2 其中一个是根节点
  if (root.val === o1 || root.val === o2) {
    return root.val;
  }
  // 递归
  let left = lowestCommonAncestor(root.left, o1, o2);
  let right = lowestCommonAncestor(root.right, o1, o2);
  // 2.o1 o2 分列根节点两侧
  if (left !== null && right !== null) {
    return root.val;
  }
  // 3.o1 o2 都在左侧或右侧
  return left !== null ? left : right;
}

/**
 * 判断是不是平衡二叉树
 */
function isBanlancedTree(pRoot) {
  if (!pRoot) {
    return true;
  }
  let leftDepth = getDepthOfBinaryTree(pRoot.left);
  let rightDepth = getDepthOfBinaryTree(pRoot.right);
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  } else {
    return isBanlancedTree(pRoot.left) && isBanlancedTree(pRoot.right);
  }
}

/**
 *获取二叉树的深度
 * @param {*} root
 * @returns {Number}
 */
function getDepthOfBinaryTree(root) {
  if (root === null) {
    return 0;
  }
  // 获取左子树的深度
  let leftDepth = getDepthOfBinaryTree(root.left);
  // 获取右子树的深度
  let rightDepth = getDepthOfBinaryTree(root.right);
  // 根节点加一层深度
  return Math.max(leftDepth, rightDepth) + 1;
}

function isBanlancedTree2(pRoot) {
  if (!pRoot) {
    return true;
  }
  let leftDepth = getDepthOfBinaryTree2(pRoot.left);
  let rightDepth = getDepthOfBinaryTree2(pRoot.right);
  if (Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  } else {
    return isBanlancedTree2(pRoot.left) && isBanlancedTree2(pRoot.right);
  }
}

function getDepthOfBinaryTree2(root) {
  if (!root) {
    return 0;
  }
  let leftDepth = getDepthOfBinaryTree2(root.left);
  let rightDepth = getDepthOfBinaryTree2(root.right);
  return Math.max(leftDepth, rightDepth) + 1;
}

/**
 * 判断是不是完全二叉树
 * @param {*} root
 * @return {Boolean}
 */
function isCompleteTree(root) {
  // 辅助栈
  let queue = [root];
  let end = false;
  while (queue.length) {
    const curNode = queue.shift();
    if (!curNode) {
      end = true;
    } else {
      if (queue.length && end) {
        return false;
      }
      queue.push(curNode.left);
      queue.push(curNode.right);
    }
  }
  return true;
}

/**
 * 判断是不是二叉搜索树
 * @param {*} root
 * @return {Boolean}
 */

// 1.二叉搜索树中序遍历的结果是递增
function isValidBST(root) {
  let inorderArr = inorderTraversal(root);
  //  console.log(inorderTraversal)
  console.log("inorderArr", inorderArr);
  for (let i = 0; i < inorderArr.length; i++) {
    if (inorderArr[i] > inorderArr[i + 1]) {
      return false;
    }
  }
  return true;
}

// 2.递归
function isValidBST2(root) {
  function fun(root, lower, upper) {
    if (root === null) {
      return true;
    } else if (root.val <= lower || root.val >= upper) {
      return false;
    }
    return fun(root.left, lower, root.val) && fun(root.right, root.val, upper);
  }
  return fun(root, -Infinity, Infinity);
}

/**
 * 二叉树的镜像
 * @param {*} pRoot
 * @return {*} pRoot
 */

// 1.递归
function mirror(pRoot) {
  if (!pRoot) {
    return pRoot;
  }
  // 交换左右子树
  let temp = pRoot.left;
  pRoot.left = pRoot.right;
  pRoot.right = temp;
  // 递归左右子树
  mirror(pRoot.left);
  mirror(pRoot.right);
  return pRoot;
}

// 2.辅助栈
function mirror2(pRoot) {
  if (!pRoot) {
    return pRoot;
  }
  let stack = [pRoot];
  while (stack.length) {
    let node = stack.pop();
    node.left && stack.push(node.left);
    node.right && stack.push(node.right);

    let temp = node.left;
    node.left = node.right;
    node.right = temp;
  }
  return pRoot;
}

/**
 * 合并二叉树
 * @param {*} t1 tree1根节点
 * @param {*} t2 tree2根节点
 */
function mergeTrees(t1, t2) {
  if (t1 === null) {
    return t2;
  } else if (t2 === null) {
    return t1;
  }
  let root = new TreeNode(t1.val + t2.val);
  root.left = mergeTrees(t1.left, t2.left);
  root.right = mergeTrees(t1.right, t2.right);
  return root;
}

/**
 * 对称的二叉树
 * @param {*} pRoot
 * @return {Boolean}
 */
function isSymmetrical(pRoot) {
  // 1.根节点都不存在或者只有根节点
  if (!pRoot || (!pRoot.left && !pRoot.right)) {
    return true;
  }
  // 2.判断根节点左右子树是否对称
  const recursion = (t1, t2) => {
    // 2.1左右子树都为空
    if (t1 === null && t2 === null) {
      return true;
    } else if (t1 === null || t2 === null || t1.val !== t2.val) {
      // 2.2左右子树一个为空或者对应节点值不相等
      return false;
    }
    // 2.3递归
    return recursion(t1.left, t2.right) && recursion(t1.right, t2.left);
  };
  return recursion(pRoot.left, pRoot.right);
}

/**
 * 二叉搜索树与双向链表
 * @param {*} pRootOfTree
 * @returns {*} head
 */
function convert(pRootOfTree) {
  // 中序遍历（左 根 右）
  // 二叉搜索树与双向链表
  // 1.确定头部节点；最左边的叶子节点
  // 2.新建一个 head 指向头节点
  // 3.记录上一节点 pre 和当前节点 cur
  // 4.遍历时不断更新 pre.right = cur cur.left = pre
  // 5.遍历时的递归步骤
  //5.1确定递归结束的条件 （cur === null)
  //5.2递归左子树
  //5.3处理当前节点
  //5.4递归右子树
  let head = null;
  let pre = null;
  const inorder = (cur) => {
    if (cur === null) {
      return;
    }
    inorder(cur.left);
    if (pre === null) {
      head = cur;
    } else {
      pre.right = cur;
    }
    cur.left = pre;
    pre = cur;
    inorder(cur.right);
  };
  inorder(pRootOfTree);
  return head;
}

/**
 * 二叉树中和为某一值的路径（一）
 * @param {*} root 根节点
 * @param {Number} sum
 */
function hasPathSum(root, sum) {
  if (!root) {
    return false;
  }
  const dfs = (curNode, sum) => {
    if (!curNode) {
      return false;
    }
    if (!curNode.left && !curNode.right && curNode.val === sum) {
      return true;
    }
    return (
      dfs(curNode.left, sum - curNode.val) ||
      dfs(curNode.right, sum - curNode.val)
    );
  };
  return dfs(root, sum);
}

/**
 * 链表节点构造函数
 * @param {*} x
 */
function ListNode(x) {
  this.val = x;
  this.next = null;
}

/**
 * 删除有序链表中重复的元素-II
 * @param {*} head
 */
function deleteDuplicates(head) {
  // 1.存储链表的所有节点值
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  // 2.1哈希表筛选出不重复的值
  // let map = new Map()
  // for (let item of arr) {
  //   map.set(item, (map.get(item) || 0) + 1)
  // }
  // let res = []
  // for (let [index, item] of map.entries()) {
  //   if (item === 1) {
  //     res.push(index)
  //   }
  // }

  // 2.2 利用 set 去重
  let res = Array.from(new Set(arr));

  // 3.遍历筛选出来的值生成链表
  let node = new ListNode(-1);
  let pre = node;
  for (let item of res) {
    node.next = new ListNode(item);
    node = node.next;
  }
  return pre.next;
}
