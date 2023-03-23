// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
//
// Example 1:
// Input: s = "()"
// Output: true
//
// Example 2:
// Input: s = "()[]{}"
// Output: true
//
// Example 3:
// Input: s = "(]"
// Output: false
//
// Constraints:
// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
export function isValid(s: string): boolean {
  if (s.length % 2 === 1) {
    return false;
  }

  const pairs = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const queue = [];
  for (let index = 0; index < s.length; index++) {
    const str = s.slice(index, index + 1);
    if (pairs.has(str)) {
      queue.push(str);
      continue;
    } else {
      const last = queue.pop();
      if (last === undefined || pairs.get(last) !== str) {
        return false;
      }
    }
  }

  return queue.length === 0;
}
