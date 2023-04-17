import { maxDepth, TreeNode } from "./104_Maximum-Depth-of-Binary-Tree";

test.concurrent.each([
  [
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ),
    3,
  ],
  [new TreeNode(1, null, new TreeNode(2)), 2],
])(`maxDepth(%s) = %s`, (root, expected) => {
  expect(maxDepth(root)).toEqual(expected);
});
