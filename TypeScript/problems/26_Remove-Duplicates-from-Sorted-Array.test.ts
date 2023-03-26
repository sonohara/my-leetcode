import { removeDuplicates } from "./26_Remove-Duplicates-from-Sorted-Array";

test.concurrent.each([
  [[1, 1, 2], 2, [1, 2]],
  [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 5, [0, 1, 2, 3, 4]],
])(`removeDuplicates(%p) = %p`, (nums, expected1, expected2) => {
  expect(removeDuplicates(nums)).toEqual(expected1);
  for (let i = 0; i < expected1; i++) {
    expect(nums[i]).toEqual(expected2[i]);
  }
});
