const capitalize = require("../code/capitalize");

test("properly capitalizes first character", () => {
  expect(capitalize("hello")).toBe("Hello");
});
