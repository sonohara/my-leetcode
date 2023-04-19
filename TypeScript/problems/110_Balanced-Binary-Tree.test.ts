import { isBalanced, TreeNode } from "./110_Balanced-Binary-Tree";

test.concurrent.each([
  [
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    ),
    true,
  ],
  [
    new TreeNode(
      1,
      new TreeNode(
        2,
        new TreeNode(3, new TreeNode(4), new TreeNode(4)),
        new TreeNode(3)
      ),
      new TreeNode(2)
    ),
    false,
  ],
  [
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(4, new TreeNode(8)), new TreeNode(5)),
      new TreeNode(3, new TreeNode(6))
    ),
    true,
  ],
  [
    new TreeNode(
      1,
      new TreeNode(2, new TreeNode(3, new TreeNode(4))),
      new TreeNode(2, null, new TreeNode(3, null, new TreeNode(4)))
    ),
    false,
  ],
])(`isBalanced(%s) = %s`, (root, expected) => {
  expect(isBalanced(root)).toEqual(expected);
});
