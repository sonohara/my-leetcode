package problems._69_Sqrtx;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource(value = {"4, 2", "8, 2", "0, 0", "1, 1", "36, 6", "2147395599, 46339"})
    void testMySqrt(int x, int want) {
        assertEquals(want, new Solution().mySqrt(x));
    }
}
