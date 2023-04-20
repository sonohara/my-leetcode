import { minDepth, TreeNode } from "./111_Minimum-Depth-of-Binary-Tree";

test.concurrent.each([
  [
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ),
    2,
  ],
  [
    new TreeNode(
      2,
      null,
      new TreeNode(
        3,
        null,
        new TreeNode(4, null, new TreeNode(5, null, new TreeNode(6)))
      )
    ),
    5,
  ],
  [new TreeNode(1, new TreeNode(2)), 2],
  [
    new TreeNode(
      -9,
      new TreeNode(-3, null, new TreeNode(4, new TreeNode(-6))),
      new TreeNode(2, new TreeNode(4, new TreeNode(-5)), new TreeNode(0))
    ),
    3,
  ],
])(`minDepth(%s) = %s`, (root, expected) => {
  expect(minDepth(root)).toEqual(expected);
});
