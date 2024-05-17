import React from 'react'
import { payBoard } from '../../utils/combination'
export default function PayBoard({setSelected,selected}) {
  return (
    <div className='bg-gray-100 w-[15%] p-4'> 
        <p className='mx-auto'>Pay Board</p>
       <div className='flex justify-between'><span>Match</span><span>PayOut</span></div>

       <div className='flex justify-between'><span>10</span><span></span>{payBoard(selected.length,10)}</div>
       <div className='flex justify-between'><span>9</span><span>{payBoard(selected.length,9)}</span></div>
       <div className='flex justify-between'><span>8</span><span>{payBoard(selected.length,8)}</span></div>
       <div className='flex justify-between'><span>7</span><span>{payBoard(selected.length,7)}</span></div>
       <div className='flex justify-between'><span>6</span><span>{payBoard(selected.length,6)}</span></div>
       <div className='flex justify-between'><span>5</span><span>{payBoard(selected.length,5)}</span></div>
       <div className='flex justify-between'><span>4</span><span>{payBoard(selected.length,4)}</span></div>
       <div className='flex justify-between'><span>3</span><span>{payBoard(selected.length,3)}</span></div>
       <div className='flex justify-between'><span>2</span><span>{payBoard(selected.length,2)}</span></div>
       <div className='flex justify-between'><span>1</span><span>{payBoard(selected.length,1)}</span></div>
       
    </div>
  )
}
