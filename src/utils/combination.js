function Combination(selection,match ) {
    let nPerminutation = 1;
    let mPermiutation = 1;
    let sub = 1;
    for (let i = 1; i <= match; i++) {
      nPerminutation *= i;
    }
    for (let i = 1; i <= selection; i++) {
      mPermiutation *= i;
    }
    for (let i = 1; i <= selection - match; i++) {
      sub *= i;
    }
  
    return (mPermiutation / nPerminutation) * sub;
  }


  //return win amount
function payBoard(selection,match){
     const Edge=0.3
    let probablity=(Combination(selection,match)*Combination(80-selection,20-match))/Combination(80,20)
   const fairPay= 1/probablity

   const withHouseEdge=fairPay*(1-Edge)
   return Math.floor(withHouseEdge)
}


//amount,no of selection
//amount 

  