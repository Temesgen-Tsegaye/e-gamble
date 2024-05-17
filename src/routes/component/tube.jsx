import React, { useRef } from 'react'

import { div } from 'three/examples/jsm/nodes/Nodes.js';
import Ball from './ball';
import { forwardRef } from 'react';
const Tube=forwardRef(function Tube(props,ref){

       let filterd
       if(props.next){
         filterd =props.generatedNumbers?.slice(10)

       }else{
             filterd=props.generatedNumbers?.slice(0,10)
       }
return (
<div  ref={ref} className='relative w-[7.5vh] h-[75vh]  bg-white rounded-lg'>

{filterd?.map((val,index)=><Ball number={val} key={val}  classIndex={props.next?`ballright${val}`:`ball${val}`}/>)}
</div>
)
}) 

export default Tube;