// The “while” loop
// **************************************

// example 1
let i = 5;
while (i <= 7) {
  // as long as the value of i is less than 3, loop keeps run.
  console.log(i);
  i++;
}

// example 2
let j = 3;
while (j) {
  console.log(j);
  j--;
}

// Curly braces are not required for a single-line body

let k = 3;
while (k) console.log('k: ', k--);

// The “do…while” loop
// **************************************

// syntax:
//  do {
// loop body
// } while (condition);

let p = 100;
do {
  console.log(p);
  p += 100;
} while (p <= 300);

// The “for” loop
// *******************************************

// syntax:
// for (begin; condition; step) {
//   // ... loop body ...
// }

// example 1: Generating natural numbers
for (let i = 0; i < 3; i++) {
  // shows 0, then 1, then 2
  console.log(i);
}

// example 2: Generating even numbers
for (let i = 0; i < 6; i += 2) {
  // shows 0, then 1, then 2
  console.log('Even: ', i);
}

// example 3: Generating odd numbers in reverse oreder
for (let i = 5; i > 0; i -= 2) {
  // shows 0, then 1, then 2
  console.log('Odd: ', i);
}

// example 4: Breaking the loop
let x = 0;
// without the begin part because it is already declared above this line
for (; x < 3; x++) {
  console.log(x);
}

//example 5: Without begin and steps parts
let y = 0;
for (; y < 3; ) {
  console.log(y++);
}
