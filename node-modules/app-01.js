// To run JS outside the browser , we need to use 'node pathToFile'

// Import module by using require(path)
// require(path) - also run the module one time
const { sum: sumTwoNums, specificSymbol } = require("./lesson-01");

console.log(sumTwoNums(10, 5));

/*
 * EXPECTED OUTPUT:
 * -------------------
 * Importing objects...
 * 15
 */
