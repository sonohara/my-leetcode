// Given the root of a binary tree, return the inorder traversal of its nodes' values.
//
// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]
//
// Example 2:
// Input: root = []
// Output: []
//
// Example 3:
// Input: root = [1]
// Output: [1]
//
// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
//
// Follow up: Recursive solution is trivial, could you do it iteratively?
export function inorderTraversal(root: TreeNode): number[] {
  const ans: number[] = [];
  const nodes: TreeNode[] = [];
  let node = root;

  while (node) {
    if (node.left && node.left.val != 101) {
      nodes.push(node);
      node = node.left;
      continue;
    }

    if (node.val != 101) {
      ans.push(node.val);
      node.val = 101;
    }

    if (node.right && node.right.val != 101) {
      nodes.push(node);
      node = node.right;
      continue;
    }

    node = nodes.pop()!;
  }

  return ans;
}

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1743165/javascript-typescript-simple-2-line-recursive-solution-time-97-faster-memory-5-less/?languageTags=typescript
export function solutionRecurdive(root: TreeNode | null): number[] {
  if (root == null) {
    return [];
  }
  return [
    ...solutionRecurdive(root.left),
    root.val,
    ...solutionRecurdive(root.right),
  ];
}

// https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/3403186/best-typescript-solution/?languageTags=typescript
export function solutionIteratively(root: TreeNode | null): number[] {
  let stack: TreeNode[] = [];
  let values: number[] = [];
  let current: TreeNode | null | undefined = root;

  while (current || stack.length !== 0) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    if (current) {
      values.push(current?.val);
    }
    current = current?.right;
  }

  return values;
}
