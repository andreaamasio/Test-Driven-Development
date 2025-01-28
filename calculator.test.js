const createCalculator = require("./calculator")

let calculator = createCalculator()
test("add", () => {
  expect(calculator.add(3, 7)).toBe(10)
})
test("subtract", () => {
  expect(calculator.subtract(16, 3)).toBe(13)
})
test("divide", () => {
  expect(calculator.divide(20, 5)).toBe(4)
})
test("multiply", () => {
  expect(calculator.multiply(3, 7)).toBe(21)
})
