package problems._67_AddBinary;

import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;

public class SolutionTest {
    @ParameterizedTest
    @CsvSource(value = {"11, 1, 100", "1010, 1011, 10101", "0, 0, 0",})
    void testAddBinary(String a, String b, String want) {
        assertEquals(want, new Solution().addBinary(a, b));
    }
}
