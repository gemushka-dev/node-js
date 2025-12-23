// Import os module by using require('os')
const os = require("os");

const pc = {
  memory: {
    // Returns the amount of free system memory(RAM) in bytes as an integer
    free: (os.freemem() / Math.pow(1024, 3)).toFixed(2),
    // Returns the total amount of system memory(RAM) in bytes as an integer
    total: (os.totalmem() / Math.pow(1024, 3)).toFixed(2),
  },
  osInformation: {
    // Returns the operating system name
    type: os.type(),
    // Returns the operating system
    release: os.release(),
    // Returns a string identifying the operating system platform
    platform: os.platform(),
    // Returns a string identifying the kernel version
    version: os.version(),
  },
  // Returns information about the currently effective user
  userInformation: os.userInfo(),
};

console.log(pc);
/*
 * EXPECTED OUTPUT:
 * -------------------
 * {
 *  memory: { free: 9.17, total: 15.30 },
 *  osInformation: { type: 'Windows_NT', version: '10.0.19045', platform: 'win32', version: 'Windows 10 Home' },
 *  userInformation: {...},
 * }
 *
 */
