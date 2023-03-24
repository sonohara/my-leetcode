// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.
//
// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
//
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
//
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]
//
// Constraints:
// The number of nodes in both lists is in the range [0, 50].
// -100 <= Node.val <= 100
// Both list1 and list2 are sorted in non-decreasing order.

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null || list1.val === null) {
    return list2;
  }

  if (list2 === null || list2.val === null) {
    return list1;
  }

  const vals = [];

  let node1: ListNode | null = list1;
  while (node1) {
    vals.push(node1.val);
    node1 = node1.next;
  }

  let node2: ListNode | null = list2;
  while (node2) {
    vals.push(node2.val);
    node2 = node2.next;
  }

  console.log(vals);

  vals.sort((a, b) => {
    return a == b ? 0 : b - a;
  });

  console.log(vals);

  let output: ListNode | null = null;
  for (const v of vals) {
    output = new ListNode(v, output);
  }

  return output;
}
