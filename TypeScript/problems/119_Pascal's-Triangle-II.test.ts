import { getRow } from "./119_Pascal's-Triangle-II";

test.concurrent.each([[3, [1, 3, 3, 1]]])(
  `getRow(%s) = %s`,
  (rowIndex, expected) => {
    expect(getRow(rowIndex)).toEqual(expected);
  }
);
