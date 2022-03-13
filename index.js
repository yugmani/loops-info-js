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

// example 4
let x = 0;
// without the begin part because it is already declared above this line
for (; x < 3; x++) {
  console.log('x: ', x);
}

//example 5: Without begin and steps parts
let y = 0;
for (; y < 3; ) {
  console.log('y: ', y++);
}

// example 6:remove everything, to create an infinite loop:
// for(;;){
// // without limits
// }

//Breaking the loop
// *******************************************

let sum = 0;
// while (true) {
// uncomment line below to see the result
// let value = +prompt('Enter a number', '');
// if (!value) break; //to break the loop

// sum += value;
// }

console.log('Sum: ' + sum);

// Continue to the next iteration
for (let r = 0; r < 5; r++) {
  //if true, skip the remaining part of the body and do the next iteration
  if (r % 2 === 0) continue;
  console.log(r); // logs 1, 3 but not 2;
}

// Which values does the while loop show?
// ++i vs i++ (prefix vs postfix)
let m = 0;
while (++m < 5) console.log('m: ' + m); // 1,2,3,4
let n = 0;
while (n++ < 5) console.log('n: ' + n); // 1,2,3,4,5

//++i vs i++ (prefix vs postfix) in for loop
//Prefix
for (let i = 0; i < 5; i++) {
  console.log('Prefix: ', i); // 0,1,2,3,4
}

//Postfix
for (let i = 0; i < 5; ++i) {
  console.log('postfix: ', i); // 0,1,2,3,4
}

//Repeat until the input is correct
let value;
do {
  // value = +prompt('Enter a number: ', 0);
  console.log(value);
} while (value < 100 && value);

//Output prime numbers
// const num = +prompt("Enter a number: ", 0)
const num = 10;
const prime = [2];
for (let i = 3; i < num; i++) {
  for (let j = 3; j <= i; j++) {
    if (i % j !== 0) {
      prime.push(i);
    }  
  }  
}

console.log(prime);
