// *** Solution 1 ***
// function formatPhoneNumber(numbers) {
//   const areaCode = numbers.slice(0, 3).join("");
//   const prefix = numbers.slice(3, 6).join("");
//   const lineNumber = numbers.slice(6).join("");

//   return `(${areaCode}) ${prefix}-${lineNumber}`;
// }

// *** Solution 2 ***
// function formatPhoneNumber(numbers) {
//   const formatted = numbers.join("");
//   const areaCode = formatted.substring(0, 3);
//   const prefix = formatted.substring(3, 6);
//   const lineNumber = formatted.substring(6);

//   return `(${areaCode}) ${prefix}-${lineNumber}`;
// }

// *** Solution 3 ***
const formatPhoneNumber = (numbers) =>
  `(${numbers.slice(0, 3).join("")}) ${numbers.slice(3, 6).join("")}-${numbers
    .slice(6)
    .join("")}`;

module.exports = formatPhoneNumber;
