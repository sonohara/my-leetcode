package problems._70_ClimbingStairs;

import java.util.HashMap;

class Solution {
    public int climbStairs(int n) {
        HashMap<Integer, Integer> m = new HashMap<>();
        m.put(1, 1);
        m.put(2, 2);
        for (int i = 3; i <= n; i++) {
            m.put(i, m.get(i - 1) + m.get(i - 2));
        }
        return m.get(n);
    }
}
