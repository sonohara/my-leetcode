import {
  inorderTraversal,
  TreeNode,
  solutionRecurdive,
  solutionIteratively,
} from "./94_Binary-Tree-Inorder-Traversal";

test.concurrent.each([
  [new TreeNode(1, null, new TreeNode(2, new TreeNode(3))), [1, 3, 2]],
])(`inorderTraversal(%s) = %s`, (root, expected) => {
  expect(inorderTraversal(root)).toEqual(expected);
});

test.concurrent.each([
  [new TreeNode(1, null, new TreeNode(2, new TreeNode(3))), [1, 3, 2]],
])(`solutionRecurdive(%s) = %s`, (root, expected) => {
  expect(solutionRecurdive(root)).toEqual(expected);
});

test.concurrent.each([
  [new TreeNode(1, null, new TreeNode(2, new TreeNode(3))), [1, 3, 2]],
])(`solutionIteratively(%s) = %s`, (root, expected) => {
  expect(solutionIteratively(root)).toEqual(expected);
});
