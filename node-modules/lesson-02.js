// Alternative Export Method

// Note: "exports" (inside the module) is a reference to "module.exports"
// Adding properties to "exports" (e.g., exports.sum = ...) works
// but replacing the entire "exports" object will not work
const specificSymbol = "`";

/**
 * @description Adds the 'sum' property to the exported object
 * @param {number} a The first operand
 * @param {number} b The second operand
 * @returns {number} The sum of a and b
 */
module.exports.sum = function (a, b) {
  return a + b;
};

module.exports.specificSymbol = specificSymbol;
