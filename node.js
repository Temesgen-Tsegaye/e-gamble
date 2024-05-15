export function generateArryOfRandNumbers(){

    const arrOf20=[]

    for(let i=1;i<=20;i++){
     let number=Math.floor(Math.random()*81)
     while(arrOf20.includes(number)){
         
        number=Math.floor(Math.random()*81)
        console.log(number)
     console.log('jjj')
    }

    arrOf20.push(number)

}

console.log(arrOf20,'2020')
return arrOf20
       

}

console.log(generateArryOfRandNumbers())