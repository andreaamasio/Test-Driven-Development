const analyzeArray = require("./analyzeArray")

test("return an object with average, min, max, lenght", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  })
})
test("return an object with average, min, max, lenght", () => {
  expect(analyzeArray([25, 10, 25])).toEqual({
    average: 20,
    min: 10,
    max: 25,
    length: 3,
  })
})
