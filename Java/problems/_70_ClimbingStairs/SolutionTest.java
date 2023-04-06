package problems._70_ClimbingStairs;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource(value = {"1, 1", "2, 2", "3, 3", "4, 5"})
    void testClimbStairs(int n, int want) {
        assertEquals(want, new Solution().climbStairs(n));
    }
}
