import { strStr } from "./28_Find-the-Index-of-the-First-Occurrence-in-a-String";

test.concurrent.each([
  ["sadbutsad", "sad", 0],
  ["leetcode", "leeto", -1],
  ["hello", "ll", 2],
  ["a", "a", 0],
])(`strStr(%p) = %p`, (haystack, needle, expected) => {
  expect(strStr(haystack, needle)).toEqual(expected);
});
