let emptyArray = [];
let number = 0;

// for (let i = 0; i <= 50; i++) {
//   if (i % 2 === 0 && i <= 50) {
//     emptyArray[i] = i;
//   }
// }

while (emptyArray.length <= 50) {
  if (number % 2 === 0) {
    emptyArray.push(number);
  }
  number++;
}
document.write(emptyArray);
console.log(emptyArray);
