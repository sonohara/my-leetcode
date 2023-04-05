// Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
// The returned integer should be non-negative as well.
// You must not use any built-in exponent function or operator.
// For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
//
// Example 1:
// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.
//
// Example 2:
// Input: x = 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
//
// Constraints:
// 0 <= x <= 231 - 1
export function mySqrt(x: number): number {
  let l = 0;
  let r = x;
  let n = 0;
  while (l <= r) {
    const n1 = Math.floor((l + r) / 2);
    const n2 = n1 + 1;
    const n1sq = n1 * n1;
    const n2sq = n2 * n2;
    if (n1sq <= x && x < n2sq) {
      n = n1;
      break;
    }
    if (n1sq > x) {
      r = n1;
    } else {
      l = n1 + 1;
    }
  }

  return n;
}
