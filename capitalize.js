function capitalize(string) {
  let firstCharUpper = string.charAt(0).toUpperCase()
  let restOfWord = string.slice(1)
  return firstCharUpper + restOfWord
}
module.exports = capitalize
