package problems

// https://leetcode.com/problems/binary-tree-inorder-traversal/description/
func inorderTraversal(root *TreeNode) []int {
	if root == nil {
		return []int{}
	}
	values := inorderTraversal(root.Left)
	values = append(values, root.Val)
	values = append(values, inorderTraversal(root.Right)...)

	return values
}

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}
