// *** Solution 1 ***
// function findFirstNonRepeatingCharacter(str) {
//   let charCount = {};

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     charCount[char] = (charCount[char] || 0) + 1;
//     // if (charCount[char]) {
//     //   charCount[char] = charCount[char] + 1;
//     // } else {
//     //   charCount[char] = 1;
//     // }
//   }

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   return null;
// }

// *** Solution 2 ***
function findFirstNonRepeatingCharacter(str) {
  const charCount = new Map();

  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
}

module.exports = findFirstNonRepeatingCharacter;
