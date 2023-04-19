// Given a binary tree, determine if it is height-balanced.
//
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: true
//
// Example 2:
// Input: root = [1,2,2,3,3,null,null,4,4]
// Output: false
//
// Example 3:
// Input: root = []
// Output: true
//
// Constraints:
// The number of nodes in the tree is in the range [0, 5000].
// -104 <= Node.val <= 104
export function isBalanced(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  if (
    Math.abs(
      maxdepth(root?.left ?? null, 0) - maxdepth(root?.right ?? null, 0)
    ) > 1
  ) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

function maxdepth(node: TreeNode | null, depth: number): number {
  if (node === null) {
    return depth;
  }

  depth++;

  return Math.max(maxdepth(node.left, depth), maxdepth(node.right, depth));
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
