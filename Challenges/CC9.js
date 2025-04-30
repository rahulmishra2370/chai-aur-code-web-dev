function convertTemperature(value, scale) {
  // Validate inputs
  if (typeof value !== "number" || isNaN(value)) {
    return "Invalid temperature: Please provide a valid number";
  }
  if (typeof scale !== "string") {
    return "Invalid scale: Please provide a valid scale";
  }

  switch (scale) {
    case "C":
      return `${Math.round((value * 9) / 5 + 32)}°F`; // Convert Celsius to Fahrenheit
    case "F":
      return `${Math.round(((value - 32) * 5) / 9)}°C`; // Convert Fahrenheit to Celsius
    default:
      return "Invalid scale: Please use C or F";
  }
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { value, scale } = JSON.parse(input);
  const result = convertTemperature(value, scale);
  process.stdout.write(JSON.stringify(result));
});
