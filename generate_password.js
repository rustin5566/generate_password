function generatePassword(options) {

  // define things
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  // create a collection to store things
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }
  // remove things

  if (options.excludeCharacters) {
    collection = collection.filter(character => !options.excludeCharacters.includes(character)
    )
  }

  // start generate password
  function sample(collection) {
    let randomIndex = Math.floor(Math.random() * collection.length)
    return collection[randomIndex]
  }

  if (collection.length === 0) {
    return 'There is no valid character can use '
  }

  let password = ''
  for (i = 1; i <= options.length; i++) {
    password += sample(collection)

  }

  return password
}

module.exports = generatePassword