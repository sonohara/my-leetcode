package problems

var cache = map[int]int{1: 1, 2: 2}

func climbStairs(n int) int {
	x, ok := cache[n]
	if ok {
		return x
	}

	x = climbStairs(n-2) + climbStairs(n-1)
	cache[n] = x

	return x
}
