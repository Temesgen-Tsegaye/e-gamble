import React, { useEffect, useState } from "react";

export default function NumberBoard({
  generatedNumbers,
  setSelected,
  selected,
}) {

  console.log(setSelected,selected,'sss')
  return (
    <div className="bg-red-500  grid grid-cols-10 flex-1">
      {[...Array(80).keys()]
        .map((val) => val + 1)
        .map((items) => (
          <button
            className={`cards${items} ${selected.includes(items)?'bg-green-500':''}  `}
            onClick={() => setSelected([...selected, items])}
          >
            {items}
          </button>
        ))}
    </div>
  );
}
