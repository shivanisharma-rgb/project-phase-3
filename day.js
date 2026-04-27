
let quotes = [
  "Believe in yourself",
  "Never give up",
  "Work hard, stay humble",
  "Success is a journey",
  "Dream big"
];

function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText = quotes[randomIndex];
}


// function abc(p, r, t) {
//   return (p * r * t) / 100;
// }

// let result = abc(1000,10,2);
// console.log(result);