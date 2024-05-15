

import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
export default function Particls() {

    const ref=useRef()

    useFrame((state,delta)=>{
        ref.rotation.x+=0.01
    })
  return (
    
      <points ref={ref}>
        <sphereGeometry/>
        <pointsMaterial size={0.02}/>
      </points>

  )
}
