import {
  sortedArrayToBST,
  TreeNode,
} from "./108_Convert-Sorted-Array-to-Binary-Search-Tree";

test.concurrent.each([
  [
    [-10, -3, 0, 5, 9],
    new TreeNode(
      0,
      new TreeNode(-3, new TreeNode(-10)),
      new TreeNode(9, new TreeNode(5))
    ),
  ],
  [[1, 3], new TreeNode(3, new TreeNode(1))],
])(`sortedArrayToBST(%s) = %s`, (nums, expected) => {
  console.log(sortedArrayToBST(nums));
  expect(sortedArrayToBST(nums)).toEqual(expected);
});
