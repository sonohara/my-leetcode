package problems._94_BinaryTreeInorderTraversal;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;

public class SolutionTest {
    @ParameterizedTest
    @MethodSource("provide")
    void testInorderTraversal(Solution.TreeNode root, List<Integer> want) {
        var got = new Solution().inorderTraversal(root);
        for (int i = 0; i < want.size(); i++) {
            assertEquals(want.get(i), got.get(i));
        }
    }

    public static Stream<Arguments> provide() {
        return Stream.of(Arguments.of(
                new Solution.TreeNode(1, null,
                        new Solution.TreeNode(2, new Solution.TreeNode(3), null)),
                Arrays.asList(1, 3, 2)));
    }
}
