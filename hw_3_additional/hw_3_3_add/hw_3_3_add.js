let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// пункт 1

// let i = 0;
// while (i < array.length) {
//   document.write(`${array[i]};`);
//   i++;
// }

// пункт 2

// for (let i = 0; i < array.length; i++) {
//   document.write(`${array[i]};`);
// }

// пункт 3
let i = 0;
while (i < array.length) {
  let not = 2 * i;
  if (not < array.length) {
    document.write(`${array[not]};`);
  }
  i++;
}
