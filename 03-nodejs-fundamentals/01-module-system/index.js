const math = require('./math');
const sapa = require('./greeting');

console.log('=== Math Module ===');
console.log('2 + 3 =', math.tambah(2, 3));
console.log('10 - 4 =', math.kurang(10, 4));
console.log('5 * 6 =', math.kali(5, 6));

console.log('\n=== Greeting Module ===');
console.log(sapa('Sawala'));
console.log(sapa('Budi'));