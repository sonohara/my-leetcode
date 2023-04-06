import { climbStairs } from "./70_Climbing-Stairs";

test.concurrent.each([
  [2, 2],
  [3, 3],
  [4, 5],
])(`climbStairs(%s) = %s`, (n, expected) => {
  expect(climbStairs(n)).toEqual(expected);
});
