import { twoSum } from "./1_two-sum";

test("", () => {
  const nums = [3, 3];
  const target = 6;
  const expected = [0, 1];
  const actual = twoSum(nums, target);
  expect(actual).toBe(expected);
});
