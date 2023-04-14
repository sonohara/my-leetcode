package problems

func isSymmetric(root *TreeNode) bool {
	return isMirror(root.Left, root.Right)
}

func isMirror(p *TreeNode, q *TreeNode) bool {
	if p == nil || q == nil {
		return p == nil && q == nil
	}
	return (p.Val == q.Val) && isMirror(p.Left, q.Right) && isMirror(p.Right, q.Left)
}
