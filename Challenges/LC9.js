function shinyDiamondRug(n) {
  let result = "";

  // Loop for 2n-1 lines
  for (let i = 1; i <= 2 * n - 1; i++) {
    // Calculate stars and spaces
    let stars, spaces;
    if (i <= n) {
      // Upper half (including middle)
      stars = 2 * i - 1;
      spaces = n - i;
    } else {
      // Lower half (mirror of upper half)
      let k = 2 * n - i;
      stars = 2 * k - 1;
      spaces = n - k;
    }

    // Build the line
    let line = "";
    // Add spaces
    for (let j = 1; j <= spaces; j++) {
      line += " ";
    }
    // Add stars
    for (let j = 1; j <= stars; j++) {
      line += "*";
    }

    // Add line to result
    result += line;
    // Add newline except for the last line
    if (i < 2 * n - 1) {
      result += "\n";
    }
  }

  return result;
}

// You just need to implement the shinyDiamondRug function
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const n = parseInt(input.trim(), 10); // Get the number input
  const result = shinyDiamondRug(n); // Call our function
  process.stdout.write(result); // Output the result
});
