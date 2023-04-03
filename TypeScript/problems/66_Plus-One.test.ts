import { plusOne, solution } from "./66_Plus-One";

test.concurrent.each([
  [
    [1, 2, 3],
    [1, 2, 4],
  ],
  [
    [4, 3, 2, 1],
    [4, 3, 2, 2],
  ],
  [[9], [1, 0]],
])(`plusOne(%s) = %s`, (digits, expected) => {
  expect(plusOne(digits)).toEqual(expected);
});

test.concurrent.each([
  [
    [1, 2, 3],
    [1, 2, 4],
  ],
  [
    [4, 3, 2, 1],
    [4, 3, 2, 2],
  ],
  [[9], [1, 0]],
])(`solution(%s) = %s`, (digits, expected) => {
  expect(solution(digits)).toEqual(expected);
});
