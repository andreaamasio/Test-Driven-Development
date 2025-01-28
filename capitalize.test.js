const capitalize = require("./capitalize")

test("capitalize the first letter", () => {
  expect(capitalize("prova")).toBe("Prova")
})
