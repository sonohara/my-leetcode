import { generate } from "./118_Pascal's-Triangle";

test.concurrent.each([
  [5, [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]],
])(`generate(%s) = %s`, (numRows, expected) => {
  expect(generate(numRows)).toEqual(expected);
});
