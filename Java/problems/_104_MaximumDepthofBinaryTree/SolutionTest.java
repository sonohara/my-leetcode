package problems._104_MaximumDepthofBinaryTree;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.stream.Stream;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

public class SolutionTest {
        @ParameterizedTest
        @MethodSource("provide")
        void testInorderTraversal(Solution.TreeNode root, int want) {
                assertEquals(want, new Solution().maxDepth(root));
        }

        public static Stream<Arguments> provide() {
                return Stream.of(Arguments.of(new Solution.TreeNode(3, new Solution.TreeNode(9),
                                new Solution.TreeNode(20, new Solution.TreeNode(15),
                                                new Solution.TreeNode(7)

                                )), 3));
        }
}
