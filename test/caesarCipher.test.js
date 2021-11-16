const caesarCipher = require("../code/caesarCipher");

test("run cipher properly", () => {
  expect(caesarCipher("c", 5)).toBe("H");
});
