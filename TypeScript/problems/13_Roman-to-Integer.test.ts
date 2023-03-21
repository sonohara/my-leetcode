import { romanToInt } from "./13_Roman-to-Integer";

test.concurrent.each([
  ["III", 3],
  ["LVIII", 58],
  ["MCMXCIV", 1994],
])(`romanToInt(%p) = %p`, (s, expected) => {
  expect(romanToInt(s)).toEqual(expected);
});
