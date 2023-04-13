package problems._100_SameTree;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.stream.Stream;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

public class SolutionTest {
    @ParameterizedTest
    @MethodSource("provide")
    void testInorderTraversal(Solution.TreeNode p, Solution.TreeNode q, Boolean want) {
        assertEquals(want, new Solution().isSameTree(p, q));
    }

    public static Stream<Arguments> provide() {
        return Stream.of(Arguments.of(
                new Solution.TreeNode(1, new Solution.TreeNode(2), new Solution.TreeNode(1)),
                new Solution.TreeNode(1, new Solution.TreeNode(2), new Solution.TreeNode(1)), true),
                Arguments.of(
                        new Solution.TreeNode(1, new Solution.TreeNode(2),
                                new Solution.TreeNode(1)),
                        new Solution.TreeNode(1, new Solution.TreeNode(1),
                                new Solution.TreeNode(2)),
                        false));
    }
}
