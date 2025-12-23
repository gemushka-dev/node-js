const os = require("os");

const myCpus = {
  // Returns the operating system CPU architecture
  cpuArch: os.arch(),
  // Returns an array of objects containing information about each logical CPU core
  cores: os.cpus().map((core, index) => ({
    id: index,
    model: core.model,
    speed: `${core.speed} MHz`,
  })),
};

console.log(myCpus);
/*
 * EXPECTED OUTPUT:
 * -------------------
 * cpuArch: 'x64',
 * cores: [
 *   {
 *     id: 0,
 *     model: '11th Gen Intel(R) Core(TM) i5-11400H @ 2.70GHz',
 *    speed: '2688 MHz'
 *   },
 *   {...}
 * ]
 */
