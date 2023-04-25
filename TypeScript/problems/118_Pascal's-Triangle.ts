// Given an integer numRows, return the first numRows of Pascal's triangle.
// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:
//
// Example 1:
// Input: numRows = 5
// Output: [[1\],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
//
// Example 2:
// Input: numRows = 1
// Output: [[1]]
//
// Constraints:
// 1 <= numRows <= 30
export function generate(numRows: number): number[][] {
  const ans: number[][] = [];
  for (let i = 0; i < numRows; i++) {
    if (ans[i - 1] === undefined) {
      ans[i] = [1];
      continue;
    }
    ans[i] = [];
    for (let j = 0; j <= i; j++) {
      ans[i][j] = (ans[i - 1][j - 1] ?? 0) + (ans[i - 1][j] ?? 0);
    }
  }
  return ans;
}
