package problems._69_Sqrtx;

class Solution {
    public int mySqrt(int x) {
        long l = 0;
        long r = x;
        long m = 0;

        while (l <= r) {
            m = Math.floorDiv(l + r, 2);
            long msq = m * m;
            if (msq <= x && x < ((m + 1) * (m + 1))) {
                break;
            }
            if (msq > x) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return (int) m;
    }
}
