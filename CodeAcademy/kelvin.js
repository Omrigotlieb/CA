// Temperature in kelvin
const kelvin = 0;

// Temperature in celsius
const celsius = kelvin - 273;

// Temperature in fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// round floor fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)