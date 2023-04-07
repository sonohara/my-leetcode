package problems._83_RemoveDuplicatesfromSortedList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.stream.Stream;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.MethodSource;
import problems._83_RemoveDuplicatesfromSortedList.Solution.ListNode;

public class SolutionTest {
    @ParameterizedTest
    @MethodSource("provide")
    void testDeleteDuplicates(ListNode head, ListNode want) {
        ListNode got = new Solution().deleteDuplicates(head);
        while (want.next != null) {
            assertEquals(want.val, got.val);
            got = got.next;
            want = want.next;
        }
    }

    static Stream<Arguments> provide() {
        return Stream.of(
                Arguments.of(new ListNode(1, new ListNode(1, new ListNode(2))),
                        new ListNode(1, new ListNode(2))),
                Arguments.of(new ListNode(1, new ListNode(1, new ListNode(1))), new ListNode(1)));
    }
}
