import { merge, solution } from "./88_Merge-Sorted-Array";

test.concurrent.each([
  [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
  [[1], 1, [], 0, [1]],
  [[0], 0, [1], 1, [1]],
])(`merge(%s, %s, %s, %s)`, (nums1, m, nums2, n, expected) => {
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual(expected);
});

test.concurrent.each([
  [[1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3, [1, 2, 2, 3, 5, 6]],
  [[1], 1, [], 0, [1]],
  [[0], 0, [1], 1, [1]],
])(`solution(%s, %s, %s, %s)`, (nums1, m, nums2, n, expected) => {
  solution(nums1, m, nums2, n);
  expect(nums1).toEqual(expected);
});
