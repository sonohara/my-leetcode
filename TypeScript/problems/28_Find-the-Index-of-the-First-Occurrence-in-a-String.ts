// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
//
// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
//
// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.
//
// Constraints:
// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.
export function strStr(haystack: string, needle: string): number {
  // Answer1
  // const found = new RegExp(needle).exec(haystack);
  // return found == null ? -1 : found["index"];

  // Answer2
  // let len = needle.length;
  // let i = 0;
  // while (len <= haystack.length) {
  //   const sub = haystack.substring(i, len);
  //   if (sub === needle) {
  //     return i;
  //   }
  //   i++;
  //   len++;
  // }
  // return -1;

  // Answer3
  return haystack.indexOf(needle);
}
