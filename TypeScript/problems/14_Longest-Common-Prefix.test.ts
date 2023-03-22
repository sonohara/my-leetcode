import { longestCommonPrefix } from "./14_Longest-Common-Prefix";

test.concurrent.each([
  [["flower", "flow", "flight"], "fl"],
  [["dog", "racecar", "car"], ""],
])(`longestCommonPrefix(%p) = %p`, (s, expected) => {
  expect(longestCommonPrefix(s)).toEqual(expected);
});
