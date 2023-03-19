import { addTwoNumbers, ListNode } from "./2_Add-Two-Numbers";

test.concurrent.each([
  [
    new ListNode(2, new ListNode(4, new ListNode(3))),
    new ListNode(5, new ListNode(6, new ListNode(4))),
    new ListNode(7, new ListNode(0, new ListNode(8))),
  ],
  [new ListNode(0), new ListNode(0), new ListNode(0)],
  [
    new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9))))
        )
      )
    ),
    new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9)))),
    new ListNode(
      8,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(1))))
          )
        )
      )
    ),
  ],
])(`addTwoNumbers(%p, %p) = %p`, (l1, l2, expected) => {
  expect(addTwoNumbers(l1, l2)).toEqual(expected);
});
