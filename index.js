// The “while” loop
// **************************************

// While the condition is truthy, the code from the loop body is executed.

// example 1
let i = 5;
while (i <= 10) {
  // as long as the value of i is less than 3, loop keeps run.
  console.log(i);
  i++;
}

// A single execution of the loop body is called an iteration. The loop in the example above makes three iterations.

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

// The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.
// the body of the loop gets executed at least once regardless of the condition being truthy.
let p = 100;
do {
  console.log(p);
  p += 100;
} while (p < 300);
