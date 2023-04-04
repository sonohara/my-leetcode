package problems._67_AddBinary;

// https://leetcode.com/problems/add-binary/description/
class Solution {
    public String addBinary(String a, String b) {
        StringBuilder result = new StringBuilder();
        int carry = 0;
        int al = a.length();
        int bl = b.length();
        int i = 1;
        while (i <= al || i <= bl) {
            int x = 0;
            int y = 0;
            int sum = 0;
            if (al - i >= 0) {
                x = Character.getNumericValue(a.charAt(al - i));
            }
            if (bl - i >= 0) {
                y = Character.getNumericValue(b.charAt(bl - i));
            }
            sum = carry + x + y;
            carry = sum > 1 ? 1 : 0;
            result = result.insert(0, String.valueOf(sum % 2));
            i++;
        }

        if (carry > 0) {
            result = result.insert(0, "1");
        }

        return result.toString();
    }
}
