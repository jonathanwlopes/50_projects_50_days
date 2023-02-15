/* ASCII CHARACTER CODES 
https://www.petefreitag.com/cheatsheets/ascii-codes/
*/
const firstLowerCode = 97
const firstUpperCode = 65
const firstNumberCode = 48
const alphabetQtd = 26
const maxNumber = 10

const getRandomLower = () =>
  String.fromCharCode(Math.floor(Math.random() * alphabetQtd) + firstLowerCode)

const getRandomUpper = () =>
  String.fromCharCode(Math.floor(Math.random() * alphabetQtd) + firstUpperCode)

const getRandomNumber = () =>
  String.fromCharCode(Math.floor(Math.random() * maxNumber) + firstNumberCode)

const getRandomSymbol = () => {
  const symbols = "!@#$%¨&*()_+,.;?<>"
  const randomIDX = Math.floor(Math.random() * symbols.length)

  return symbols[randomIDX]
}

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
}

const resultEl = document.getElementById("result")
const lengthEl = document.getElementById("length")
const uppercaseEl = document.getElementById("uppercase")
const lowercaseEl = document.getElementById("lowercase")
const numbersEl = document.getElementById("numbers")
const symbolsEl = document.getElementById("symbols")
const generateEl = document.getElementById("generate")
const clipboardEl = document.getElementById("clipboard")

generateEl.addEventListener("click", () => {
  const length = +lengthEl.value
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumbers = numbersEl.checked
  const hasSymbols = symbolsEl.checked

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumbers,
    hasSymbols,
    length
  )
})

const generatePassword = (lower, upper, number, symbol, length) => {
  let generatedPassword = ""
  const typesCount = lower + upper + number + symbol
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    item => Object.values(item)[0]
  )

  if (!typesCount) return ""

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)

  return finalPassword
}

async function copyPassword(text) {
  try {
    await navigator.clipboard.writeText(text)
    alert("Password copied")
  } catch (err) {
    console.error("Failed to copy: ", err)
  }
}

clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerText
  if (!password) return
  copyPassword(password)
})
