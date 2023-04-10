package problems._88_MergeSortedArray;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.stream.Stream;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

public class SolutionTest {
    @ParameterizedTest
    @MethodSource("provide")
    void testMerge(int[] nums1, int m, int[] nums2, int n, int[] want) {
        new Solution().merge(nums1, m, nums2, n);
        for (int i = 0; i < want.length; i++) {
            assertEquals(want[i], nums1[i]);
        }
    }

    static Stream<Arguments> provide() {
        return Stream.of(Arguments.of(new int[] {1, 2, 3, 0, 0, 0}, 3, new int[] {2, 5, 6}, 3,
                new int[] {1, 2, 2, 3, 5, 6}));
    }
}
