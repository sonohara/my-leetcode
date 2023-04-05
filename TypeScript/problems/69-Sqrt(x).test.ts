import { mySqrt } from "./69-Sqrt(x)";

test.concurrent.each([
  [4, 2],
  [8, 2],
  [0, 0],
  [1, 1],
  [100, 10],
  [36, 6],
])(`mySqrt(%s) = %s`, (x, expected) => {
  expect(mySqrt(x)).toEqual(expected);
});
