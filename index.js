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
