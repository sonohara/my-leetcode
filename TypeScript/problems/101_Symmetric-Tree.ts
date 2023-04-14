// Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
//
// Example 1:
// Input: root = [1,2,2,3,4,4,3]
// Output: true
//
// Example 2:
// Input: root = [1,2,2,null,3,null,3]
// Output: false
//
// Constraints:
// The number of nodes in the tree is in the range [1, 1000].
// -100 <= Node.val <= 100
//
// Follow up: Could you solve it both recursively and iteratively?
export function isSymmetric(root: TreeNode | null): boolean {
  const f = (p: TreeNode | null, q: TreeNode | null): boolean => {
    if (!p || !q) {
      return p?.val === q?.val;
    }
    return p?.val === q?.val && f(p?.left, q?.right) && f(p?.right, q?.left);
  };

  return f(root?.left ?? null, root?.right ?? null);
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
