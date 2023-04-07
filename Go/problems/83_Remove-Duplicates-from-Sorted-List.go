package problems

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/
func deleteDuplicates(head *ListNode) *ListNode {
	p := head
	for p != nil && p.Next != nil {
		if p.Val == p.Next.Val {
			p.Next = p.Next.Next
		} else {
			p = p.Next
		}
	}
	return head
}

type ListNode struct {
	Val  int
	Next *ListNode
}
