package problems._104_MaximumDepthofBinaryTree;

// https://leetcode.com/problems/maximum-depth-of-binary-tree/description/
class Solution {
    public int maxDepth(TreeNode root) {
        if (root == null) {
            return 0;
        }
        return Math.max(down(root.left, 1), down(root.right, 1));
    }

    private int down(TreeNode node, int depth) {
        if (node == null) {
            return depth;
        }
        depth += 1;
        return Math.max(down(node.left, depth), down(node.right, depth));
    }

    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {}

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
}
