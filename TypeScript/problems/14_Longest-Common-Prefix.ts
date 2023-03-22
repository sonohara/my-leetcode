// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".
//
// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
//
// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
//
// Constraints:
// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.
export function longestCommonPrefix(strs: string[]): string {
  const str1 = strs[0];
  for (let index = str1.length; index > 0; index--) {
    const prefix = str1.slice(0, index);
    if (strs.every((str) => str.startsWith(prefix))) {
      return prefix;
    }
  }

  return "";
}
