import { hasPathSum, TreeNode } from "./112_Path-Sum";

test.concurrent.each([
  [
    new TreeNode(
      5,
      new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)), null),
      new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1)))
    ),
    22,
    true,
  ],
  [new TreeNode(1, new TreeNode(2), new TreeNode(3)), 5, false],
  [new TreeNode(1, new TreeNode(2)), 1, false],
])(`hasPathSum(%s) = %s`, (root, targetSum, expected) => {
  expect(hasPathSum(root, targetSum)).toEqual(expected);
});
