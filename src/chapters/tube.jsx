// Tube.js
import React from 'react';

export const Tube = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <cylinderGeometry args={[1, 1, 10, 32]} />
      <meshStandardMaterial color="blue" opacity={0.3} transparent={true} />
    </mesh>
  );
};
