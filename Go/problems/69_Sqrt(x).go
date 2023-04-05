package problems

import "math"

// https://leetcode.com/problems/sqrtx/description/
func mySqrt(x int) int {
	l := 0
	r := x
	m := 0
	for l <= r {
		m = int(math.Floor(float64(l+r) / 2))
		msq := m * m
		if msq <= x && x < ((m+1)*(m+1)) {
			break
		}
		if msq > x {
			r = m - 1
		} else {
			l = m + 1
		}
	}
	return m
}
