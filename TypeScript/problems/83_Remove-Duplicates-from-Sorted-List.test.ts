import {
  deleteDuplicates,
  ListNode,
} from "./83_Remove-Duplicates-from-Sorted-List";

test.concurrent.each([
  [
    new ListNode(1, new ListNode(1, new ListNode(2))),
    new ListNode(1, new ListNode(2)),
  ],
  [
    new ListNode(
      1,
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3))))
    ),
    new ListNode(1, new ListNode(2, new ListNode(3))),
  ],
  [new ListNode(1, new ListNode(1, new ListNode(1))), new ListNode(1)],
])(`deleteDuplicates(%s) = %s`, (n, expected) => {
  expect(deleteDuplicates(n)).toEqual(expected);
});
