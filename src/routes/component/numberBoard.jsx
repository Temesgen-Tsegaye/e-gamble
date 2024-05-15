import React from 'react'

export default function NumberBoard({generatedNumbers}) {
  return (
    <div className='bg-red-500 h-[70%] grid grid-cols-10'> 
              {[...Array(80).keys()].map((val)=> val + 1).map((items)=><button className={`cards${items}`}>{items}</button>)}
    </div>
  )
}
