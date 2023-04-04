package problems

import "strconv"

// https://leetcode.com/problems/add-binary/description/
func addBinary(a string, b string) string {
	result := ""
	carry := 0
	length := len(a)
	if len(a) < len(b) {
		length = len(b)
	}
	for i := 0; i < length; i++ {
		x := 0
		y := 0
		var err error
		if len(a)-i >= 1 {
			x, err = strconv.Atoi(a[len(a)-i-1 : len(a)-i])
			if err != nil {
				panic(err)
			}
		}
		if len(b)-i >= 1 {
			y, err = strconv.Atoi(b[len(b)-i-1 : len(b)-i])
			if err != nil {
				panic(err)
			}
		}
		sum := x + y + carry
		if sum > 1 {
			carry = 1
		} else {
			carry = 0
		}
		result = strconv.Itoa(sum%2) + result
	}

	if carry > 0 {
		result = "1" + result
	}

	return result
}
