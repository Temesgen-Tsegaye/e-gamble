import React, { useState } from "react";
import { useRef } from "react";
import Tube from "./component/tube";
import styles from "./component/tube.module.css";
import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import NumberBoard from "./component/numberBoard";
import { generateArryOfRandNumbers } from "../utils/generateNumbers";
import PayBoard from "./component/payBoard";

export default function Keno() {
  const container = useRef();
  const [generated, setGenerated] = useState([]);

  const [selected,setSelected]=useState([])
  const { contextSafe } = useGSAP(
    () => {
      if (generated.length != 0) {
        generated?.slice(0, 10)?.map((items, index) => {
          const vh = window.innerHeight;
          let hh = (75 * vh) / 100 - index * ((7.5 * vh) / 100);
          gsap.to(`.ball${items}`, {
            rotation: 720,
            y: hh,
            delay: index,
            duration: 1,
            ease: "bounce.out",
          });
          gsap.to(`.cards${items}`, {
            background: "#D97706",
            duration: 1,
            delay: index,
          });
        });
        generated?.slice(10)?.map((items, index) => {
          const vh = window.innerHeight;
          let hh = (75 * vh) / 100 - index * ((7.5 * vh) / 100);
          gsap.to(`.ballright${items}`, {
            rotation: 720,
            y: hh,
            delay: 10 + 1 * index,
            duration: 1,
            ease: "bounce.out",
          });
          gsap.to(`.cards${items}`, {
            background: "#D97706",
            duration: 1,
            delay: 10 + index,
          });
        });
      }
    },
    { scope: container, dependencies: [generated] }
  );
  const onPlay = () => {
    const randArray = generateArryOfRandNumbers();
    setGenerated(randArray);
  };

  return (
    <div
      ref={container}
      className="flex justify-between p-10   align-bottom items-end w-full h-full"
    >
      <Tube generatedNumbers={generated} />
      <div className="flex flex-col justify-around pt-14 h-full w-[75%]">
        <div className=" flex gap-4">
        <NumberBoard  selected={selected} setSelected={setSelected} generatedNumbers={generated}  />
        {/* <PayBoard selected={selected} setSelected={setSelected}/> */}

        </div>
        <div className="flex justify-around">
          <button className={styles.button} onClick={()=>{
               generated.map((items,index)=>{
                gsap.to(`.cards${items}`, {
                  background: "#EF4444",
                
                });
               })
            setGenerated([])}}>Restart</button>
          <button className={`${styles.button}`}>Play</button>
          <button className={styles.button} onClick={onPlay}>
            Play
          </button>
        </div>
      </div>
      <Tube generatedNumbers={generated} next={true} />
    </div>
  );
}
