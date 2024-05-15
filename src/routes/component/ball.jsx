import React from "react";

export default function Ball({number,classIndex}) {
    console.log(classIndex,'in')
  return (
    <div className={`absolute top-[-7.5vh]  w-[7.5vh] h-[7.5vh] bg-green-500  rounded-full flex justify-center items-center ${classIndex}`}>
      {number}
    </div>
  );
}
