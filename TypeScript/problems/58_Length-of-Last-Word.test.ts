import { lengthOfLastWord } from "./58_Length-of-Last-Word";

test.concurrent.each([
  ["Hello World", 5],
  ["   fly me   to   the moon  ", 4],
  ["luffy is still joyboy", 6],
])(`lengthOfLastWord(%s) = %s`, (s, expected) => {
  expect(lengthOfLastWord(s)).toEqual(expected);
});
