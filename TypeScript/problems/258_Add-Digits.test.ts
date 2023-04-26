import { addDigits, solution } from "./258_Add-Digits";

test.concurrent.each([
  [38, 2],
  [0, 0],
  [1000, 1],
])(`addDigits(%s) = %s`, (num, expected) => {
  expect(addDigits(num)).toEqual(expected);
});

test.concurrent.each([
  [38, 2],
  [0, 0],
  [1000, 1],
])(`solution(%s) = %s`, (num, expected) => {
  expect(solution(num)).toEqual(expected);
});
