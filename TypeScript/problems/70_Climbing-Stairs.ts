// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps.
// In how many distinct ways can you climb to the top?
//
// Example 1:
// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps

// Example 2:
// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step
//
// Constraints:
// 1 <= n <= 45
export function climbStairs(n: number): number {
  const steps = new Map([
    [1, 1],
    [2, 2],
    [3, 3],
  ]);
  for (let i = 4; i <= n; i++) {
    steps.set(i, steps.get(i - 1)! + steps.get(i - 2)!);
  }
  return steps.get(n)!;
}

// https://leetcode.com/problems/climbing-stairs/solutions/1893345/100-fastest-typescript-solution/?languageTags=typescripts
const cache: number[] = [];
export function solution(n: number): number {
  if (n <= 2) {
    return n;
  }
  if (!cache[n]) {
    cache[n] = solution(n - 2) + solution(n - 1);
  }
  return cache[n];
}
