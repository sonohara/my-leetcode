package problems

import "math"

// https://leetcode.com/problems/maximum-depth-of-binary-tree/
func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}
	return int(math.Max(down(root.Left, 1), down(root.Right, 1)))
}

func down(node *TreeNode, depth float64) float64 {
	if node == nil {
		return depth
	}
	depth += 1
	return math.Max(down(node.Left, depth), down(node.Right, depth))
}
