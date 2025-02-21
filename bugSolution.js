function foo(a, b) {
  if (a === b) {
    return true; 
  }
  //For NaN check
  if(Number.isNaN(a) && Number.isNaN(b)){
    return true;
  }
  return false;
}

console.log(foo(NaN, NaN)); //true
console.log(foo(0, -0));  //false