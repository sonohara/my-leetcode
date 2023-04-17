// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
//
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3
//
// Example 2:
// Input: root = [1,null,2]
// Output: 2
//
// Constraints:
// The number of nodes in the tree is in the range [0, 104].
// -100 <= Node.val <= 100
export function maxDepth(root: TreeNode | null): number {
  if (!root || root.val === null) {
    return 0;
  }
  return Math.max(down(root?.left ?? null, 1), down(root?.right ?? null, 1));
}

function down(node: TreeNode | null, depth: number): number {
  if (!node || node.val === null) {
    return 0;
  }

  depth += 1;

  return Math.max(down(node.left, depth), down(node.right, depth));
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
