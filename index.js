// Video 26

// Usage of my own math module
let math = require('./mathModule');
console.log(math.multiply(5,6));
console.log(math.sum(5,6));
console.log(math.factorial(6));
// Built-n / Core Modules
let os = require('os');
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.platform());
console.log(os.arch());
console.log(os.uptime());