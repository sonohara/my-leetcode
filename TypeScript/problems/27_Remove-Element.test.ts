import { removeElement } from "./27_Remove-Element";

test.concurrent.each([
  [[3, 2, 2, 3], 3, 2, [2, 2]],
  [[0, 1, 2, 2, 3, 0, 4, 2], 2, 5, [0, 1, 4, 0, 3]],
])(`removeElement(%p) = %p`, (nums, val, expected1, expected2) => {
  expect(removeElement(nums, val)).toEqual(expected1);
  nums.sort();
  expected2.sort();
  for (let i = 0; i < expected1; i++) {
    expect(nums[i]).toEqual(expected2[i]);
  }
});
