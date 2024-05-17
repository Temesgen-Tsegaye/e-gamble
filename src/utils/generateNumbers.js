export function generateArryOfRandNumbers(){

    const arrOf20=[]

    for(let i=1;i<=20;i++){
     let number=Math.floor(Math.random()*81)
     while(arrOf20.includes(number)){
         
        number=Math.floor(Math.random()*81)
     
    }

    arrOf20.push(number)

}

return arrOf20
       
}


