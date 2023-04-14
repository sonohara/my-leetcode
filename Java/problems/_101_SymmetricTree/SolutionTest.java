package problems._101_SymmetricTree;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.stream.Stream;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

public class SolutionTest {
        @ParameterizedTest
        @MethodSource("provide")
        void testInorderTraversal(Solution.TreeNode root, Boolean want) {
                assertEquals(want, new Solution().isSymmetric(root));
        }

        public static Stream<Arguments> provide() {
                return Stream.of(Arguments.of(new Solution.TreeNode(1,
                                new Solution.TreeNode(2, new Solution.TreeNode(3),
                                                new Solution.TreeNode(4)),
                                new Solution.TreeNode(2, new Solution.TreeNode(4),
                                                new Solution.TreeNode(3)

                                )), true));
        }
}
