function invertedMountain(n) {
  // Handle invalid input (n <= 0)
  if (n <= 0) {
    return "";
  }

  let result = "";

  // Loop for n lines
  for (let i = 0; i < n; i++) {
    // Calculate stars for current line
    let stars = n - i;

    // Build the line with stars
    let line = "*".repeat(stars);

    // Add line to result
    result += line;

    // Add newline except for the last line
    if (i < n - 1) {
      result += "\n";
    }
  }

  return result;
}

// Please don't remove the code below
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const n = parseInt(input.trim(), 10); // Get the number input
  const result = invertedMountain(n); // Call our function
  process.stdout.write(result); // Output the result
});
