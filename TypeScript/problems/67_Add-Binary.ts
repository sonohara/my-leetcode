// Given two binary strings a and b, return their sum as a binary string.
//
// Example 1:
// Input: a = "11", b = "1"
// Output: "100"
//
// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
//
// Constraints:
// 1 <= a.length, b.length <= 104
// a and b consist only of '0' or '1' characters.
// Each string does not contain leading zeros except for the zero itself.
export function addBinary(a: string, b: string): string {
  let big = a;
  let small = b;
  if (a.length < b.length) {
    big = b;
    small = a;
  }

  let ans = "";
  let up = 0;
  let i = 1;
  while (true) {
    const _a = a.charAt(a.length - i);
    const _b = b.charAt(b.length - i);
    if (_a === "" && _b === "") {
      break;
    }
    const _an = Number(_a);
    const _bn = Number(_b);
    const _up = up + _an + _bn;
    ans = (_up % 2) + ans;
    up = _up > 1 ? 1 : 0;
    i++;
  }

  if (up === 1) {
    ans = "1" + ans;
  }

  return ans;
}

export function solution(a: string, b: string): string {
  let result = "";
  let carry = 0;
  let length = Math.max(a.length, b.length);
  let i = 1;

  while (i <= length) {
    let x = Number(a[a.length - i] || 0);
    let y = Number(b[b.length - i] || 0);
    let sum = x + y + carry;
    carry = sum > 1 ? 1 : 0;
    result = (sum % 2) + result;
    i++;
  }

  if (carry) {
    result = "1" + result;
  }

  return result;
}
