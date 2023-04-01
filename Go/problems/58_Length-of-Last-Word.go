package problems

import "strings"

// https://leetcode.com/problems/length-of-last-word/description/
func lengthOfLastWord(s string) int {
	fields := strings.Fields(s)
	return len(fields[len(fields)-1])
}
