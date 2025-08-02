const checkParity = (a) => {
  if (typeof a !== 'number') {
    return 'a not is number';
  }
  
  return a % 2 === 0 ? `${a} is an even number` : `${a} is odd`;
};


console.log(checkParity(10));
console.log(checkParity(7)); 
console.log(checkParity("x"));
