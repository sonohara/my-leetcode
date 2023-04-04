import { addBinary, solution } from "./67_Add-Binary";

test.concurrent.each([
  ["11", "1", "100"],
  ["1010", "1011", "10101"],
  ["0", "0", "0"],
  ["1111", "1111", "11110"],
])(`addBinary(%s, %s) = %s`, (a, b, expected) => {
  expect(addBinary(a, b)).toEqual(expected);
});

test.concurrent.each([
  ["11", "1", "100"],
  ["1010", "1011", "10101"],
  ["0", "0", "0"],
  ["1111", "1111", "11110"],
])(`solution(%s, %s) = %s`, (a, b, expected) => {
  expect(solution(a, b)).toEqual(expected);
});
