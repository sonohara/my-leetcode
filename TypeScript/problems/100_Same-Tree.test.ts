import { isSameTree, TreeNode, solution } from "./100_Same-Tree";

test.concurrent.each([
  [
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    true,
  ],
  [
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(1, null, new TreeNode(2)),
    false,
  ],
  [
    new TreeNode(1, new TreeNode(2), new TreeNode(1)),
    new TreeNode(1, new TreeNode(1), new TreeNode(2)),
    false,
  ],
])(`isSameTree(%s, %s) = %s`, (p, q, expected) => {
  expect(isSameTree(p, q)).toEqual(expected);
});

test.concurrent.each([
  [
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    true,
  ],
  [
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(1, null, new TreeNode(2)),
    false,
  ],
  [
    new TreeNode(1, new TreeNode(2), new TreeNode(1)),
    new TreeNode(1, new TreeNode(1), new TreeNode(2)),
    false,
  ],
])(`solution(%s, %s) = %s`, (p, q, expected) => {
  expect(solution(p, q)).toEqual(expected);
});
