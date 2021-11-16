const calculator = require("../code/calculator");

test("properly adds numbers", () => {
  expect(calculator.add(3, 4)).toBe(7);
});

test("properly substract numbers", () => {
  expect(calculator.sub(3, 4)).toBe(-1);
});

test("properly divide numbers", () => {
  expect(calculator.div(4, 2)).toBe(2);
});

test("properly multiply numbers", () => {
  expect(calculator.mul(5, 6)).toBe(30);
});
