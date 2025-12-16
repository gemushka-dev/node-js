// Creating new function/vars/classes

/**
 * @description Calculates the sum of two numbers
 * @param {number} a The first operand
 * @param {number} b The second operand
 * @returns {number} The sum of a and b
 */
const sum = (a, b) => {
  return a + b;
};
const specificSymbol = "`";

console.log("Importing objects...");

// Export objects
module.exports = { sum, specificSymbol };
