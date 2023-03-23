import { isValid } from "./20_Valid-Parentheses";

test.concurrent.each([
  ["()", true],
  ["()[]{}", true],
  ["(]", false],
  ["[", false],
  ["((", false],
  ["{[]}", true],
  ["([)]", false],
  ["(){}}{", false],
  ["(([]){})", true],
])(`isValid(%p) = %p`, (s, expected) => {
  expect(isValid(s)).toEqual(expected);
});
