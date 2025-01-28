function caesarCipher(string, shiftNum) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
  let letters = string.split("")
  let newString = letters.map((letter) => {
    if (/[,.?\-!]/.test(letter)) {
      return letter
    }
    let index = alphabet.indexOf(letter.toLowerCase()) + shiftNum

    if (index >= alphabet.length) {
      index -= 26
    }

    if (letter === letter.toUpperCase()) {
      return alphabet[index].toUpperCase()
    } else return alphabet[index]
  })

  return newString.join("")
}
console.log(caesarCipher("?andrea!", 1))
module.exports = caesarCipher
