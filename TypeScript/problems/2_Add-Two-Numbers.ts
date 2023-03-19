// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

export function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  let l1Node: ListNode | null = l1;
  let l1Vals = "";
  while (l1Node) {
    l1Vals = `${l1Node!.val}${l1Vals}`;
    l1Node = l1Node!.next;
  }

  let l2Node: ListNode | null = l2;
  let l2Vals = "";
  while (l2Node) {
    l2Vals = `${l2Node!.val}${l2Vals}`;
    l2Node = l2Node!.next;
  }

  const sum = BigInt(l1Vals) + BigInt(l2Vals);

  let output: ListNode | null = null;
  for (const v of sum.toString().split("")) {
    output = new ListNode(Number(v), output == null ? undefined : output);
  }

  return output;
}

/**
 * Definition for singly-linked list.
 * */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
