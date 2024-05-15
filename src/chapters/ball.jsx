// Balls.js
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Balls = () => {
  const ballRefs = useRef([]);
  const ballDiameter = 1; // Assuming each ball has a diameter of 1 unit

  useEffect(() => {
    ballRefs.current.forEach((ref, index) => {
      const targetY = -4.5 + (index * ballDiameter);
      gsap.to(ref.position, {
        y: targetY,
        duration: 1,
        delay: index * 1,
        ease: "bounce.out",
      });
    });
  }, []);

  return (
    <>
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          ref={(el) => (ballRefs.current[i] = el)}
          position={[0, 4 + i , 0]}
        >
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="red" />
        </mesh>
      ))}
    </>
  );
};
