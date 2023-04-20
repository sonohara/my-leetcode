// Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.
//
// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 2
//
// Example 2:
// Input: root = [2,null,3,null,4,null,5,null,6]
// Output: 5
//
// Constraints:
// The number of nodes in the tree is in the range [0, 105].
// -1000 <= Node.val <= 1000
export function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return _minDepth(root, 0);
}

function _minDepth(node: TreeNode | null, depth: number): number {
  if (!node) {
    return Number.POSITIVE_INFINITY;
  }

  depth++;
  if (!node?.left && !node?.right) {
    return depth;
  }

  return Math.min(_minDepth(node.left, depth), _minDepth(node.right, depth));
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
