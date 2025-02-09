function foo(a, b) {
  a = a === null ? 0 : a; //Provide default value if a is null
  b = b === null ? 0 : b; //Provide default value if b is null
  return a + b;
}
//Alternative solution that throws an error instead of providing a default value
// function foo(a, b) {
//   if (a === null || b === null) {
//     throw new Error('Null values not allowed for parameters a and b.');
//   }
//   return a + b;
// }