import { isSymmetric, TreeNode } from "./101_Symmetric-Tree";

test.concurrent.each([
  [
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3), new TreeNode(4)),
      new TreeNode(2, new TreeNode(4), new TreeNode(3))
    ),
    true,
  ],
  [
    new TreeNode(
      1,
      new TreeNode(2, null, new TreeNode(3)),
      new TreeNode(2, null, new TreeNode(3))
    ),
    false,
  ],
])(`isSymmetric(%s) = %s`, (root, expected) => {
  expect(isSymmetric(root)).toEqual(expected);
});
