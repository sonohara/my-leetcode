import { mergeTwoLists, ListNode } from "./21_Merge-Two-Sorted-Lists";

test.concurrent.each([
  [
    new ListNode(1, new ListNode(2, new ListNode(4))),
    new ListNode(1, new ListNode(3, new ListNode(4))),
    new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    ),
  ],
  [null, null, null],
  [null, new ListNode(0), new ListNode(0)],
])(`mergeTwoLists(%p, %p) = %p`, (list1, list2, expected) => {
  expect(mergeTwoLists(list1, list2)).toEqual(expected);
});
