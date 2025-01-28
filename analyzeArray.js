function analyzeArray(array) {
  const average = array.reduce((prev, next) => prev + next) / array.length

  const min = Math.min(...array)
  const max = Math.max(...array)
  const length = array.length
  return { average, min, max, length }
}
const obj = analyzeArray([1, 8, 3, 4, 2, 6])
module.exports = analyzeArray
