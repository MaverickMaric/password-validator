function validatePassword(password) {
  let lowerCaseCheck = 0
  let upperCaseCheck = 0
  let numberCheck = 0
  let specCharCheck = 0

  if (password.length < 8) {
    return false
  }

  for (let i = 0; i < password.length; i++) {
    let char = password.charCodeAt(i)

    if (char >= 97 && char <= 122) {
      lowerCaseCheck++
    } else if (char >= 65 && char <= 90) {
      upperCaseCheck++
    } else if (char >= 48 && char <= 57) {
      numberCheck++
    } else if ((char >= 32 && char <= 47) ||
      (char >= 58 && char <= 64) ||
      (char >= 91 && char <= 96) ||
      (char >= 123 && char <= 126)) {
      specCharCheck++
    }
  }

  return lowerCaseCheck > 0 && upperCaseCheck > 0 && numberCheck > 0 && specCharCheck > 0
}
module.exports = validatePassword
