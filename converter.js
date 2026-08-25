const celsiusToF = (celcius) => (celcius * 9) / 5 + 32;
const fToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

module.exports = { celsiusToF, fToCelsius };