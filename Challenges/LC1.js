// You just need to implement the distributeGifts function
function distributeGifts(totalGifts, friends) {
  // write your code here
  return Math.min(totalGifts, friends);
}

// Please don't remove the code below
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (input) => {
  const { totalGifts, friends } = JSON.parse(input); // Parse input as number
  // Call our function
  const result = distributeGifts(totalGifts, friends);

  // Output the result as a JSON string
  process.stdout.write(JSON.stringify(result));
});
// Please don't remove the code above
