

function marcoPoloInstructions(n) {
  
  let string = '';
  
  for (let i = 1; i <= n; i++) {
    if (i % 28 == 0) {  // Number divisible by 4 and 7 must be divisible by 28 i.e 4*7=28
       string += 'marcopolo';
    }
    else if (i % 4 == 0) {
      string += 'marco';
    }
    else if (i % 7 == 0) {
      string += 'polo';
    }
    else {
      string += i;
    }
    if (i != n) string += ",";
  }
  return string;
}

console.log(marcoPoloInstructions(100));

module.exports = marcoPoloInstructions; 
