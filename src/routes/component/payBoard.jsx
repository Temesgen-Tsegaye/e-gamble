import React from 'react'

export default function PayBoard({setSelected,selected}) {
  return (
    <div className='bg-gray-100 w-[15%] p-4'> 
        <p className='mx-auto'>Pay Board</p>
       <div className='flex justify-between'><span>Match</span><span>PayOut</span></div>
       <div className='flex justify-between'><span>10</span><span></span></div>
       <div className='flex justify-between'><span>9</span><span></span></div>
       <div className='flex justify-between'><span>8</span><span></span></div>
       <div className='flex justify-between'><span>7</span><span></span></div>
       <div className='flex justify-between'><span>6</span><span></span></div>
       <div className='flex justify-between'><span>5</span><span></span></div>
       <div className='flex justify-between'><span>4</span><span></span></div>
       <div className='flex justify-between'><span>3</span><span></span></div>
       <div className='flex justify-between'><span>2</span><span></span></div>
       <div className='flex justify-between'><span>1</span><span></span></div>
       
    </div>
  )
}
