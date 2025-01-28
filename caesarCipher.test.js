const caesarCipher = require("./caesarCipher")
test("andrea with 1 shift should return boesfb", () => {
  expect(caesarCipher("andrea", 1)).toBe("boesfb")
})
test("test for letter at the end of array", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc")
})
test("test for cases", () => {
  expect(caesarCipher("xYz", 3)).toBe("aBc")
})

test("test punctuation", () => {
  expect(caesarCipher("?andrea!", 1)).toBe("?boesfb!")
})
