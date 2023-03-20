import { isPalindrome } from "./9_Palindrome-Number";

test.concurrent.each([
  [121, true],
  [-121, false],
  [10, false],
])(`isPalindrome(%p) = %p`, (x, expected) => {
  expect(isPalindrome(x)).toEqual(expected);
});
