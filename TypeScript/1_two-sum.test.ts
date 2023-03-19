import { twoSum } from "./1_two-sum";

test.concurrent.each([
  [[2, 7, 11, 15], 9, [0, 1]],
  [[3, 2, 4], 6, [1, 2]],
  [[3, 3], 6, [0, 1]],
])(`twoSum(%p, %p) = %p`, (nums, target, expected) => {
  expect(twoSum(nums, target)).toEqual(expect.arrayContaining(expected));
});
