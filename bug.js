function foo(a, b) {
  if (a === null || b === null) {
    return null; //This will cause a bug if the caller expects a default value for null inputs.
  }
  return a + b; 
}