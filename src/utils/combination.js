function factorial(n) {
  if (n < 0) {
    return "Invalid input: factorial is not defined for negative numbers";
  }
  if (n === 0 || n === 1) {
    return BigInt(1);
  }
  let result = BigInt(1);
  for (let i = BigInt(2); i <= n; i++) {
    result *= i;
  }
  return result;
}

function Combination(selected, match) {
  return factorial(selected) / (factorial(match) * factorial(selected - match));
}

function Probablity(selection, match) {
  // console.log(Combination(selection, match), "1");
  // console.log(Combination(80 - selection, 20 - match), "2");
  // console.log(Combination(80, 20), "3");

  return (
    (Combination(selection, match) * Combination(80 - selection, 20 - match)) /Combination(80, 20)
  );
}

export function payBoard(selection, match) {
  const Edge = 0.3;

  const fairPay = 1/(Probablity(selection, match))-1;
  
  
    
  return Math.floor(fairPay);
}

console.log( Probablity(7,1),'ll')

