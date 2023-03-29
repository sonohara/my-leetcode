// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.
//
// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
//
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
//
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4
//
// Constraints:
// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104
export function searchInsert(nums: number[], target: number): number {
  // if (nums.length == 1) {
  //   return target <= nums[0] ? 0 : 1;
  // }

  // let i = Math.floor(nums.length / 2) - 1;
  // while (i >= 0 && i < nums.length) {
  //   if (nums[i] <= target && target <= nums[i + 1]) {
  //     return nums[i] == target ? i : i + 1;
  //   }

  //   if (nums[i] < target) {
  //     i = i + Math.max(Math.floor((nums.length - i) / 2), 1);
  //   } else {
  //     i = i - Math.max(Math.floor(i / 2), 1);
  //   }
  // }

  // return Math.max(0, i);

  nums.unshift(Number.NEGATIVE_INFINITY);
  nums.push(Number.POSITIVE_INFINITY);

  let start = 0;
  let end = nums.length;
  while (true) {
    const p = start + Math.round((end - start - 1) / 2);
    if (nums[p] <= target && target <= nums[p + 1]) {
      return nums[p] == target ? p - 1 : p;
    }

    if (nums[p] < target) {
      start = p;
    } else {
      end = p;
    }
  }
}

// https://leetcode.com/problems/search-insert-position/solutions/2594672/typescript-solution/?languageTags=typescript
export function solution1(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}
