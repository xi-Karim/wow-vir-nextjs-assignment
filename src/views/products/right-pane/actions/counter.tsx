"use client"

import { useState } from "react";

export default function ActionCounter() {
  const [counter, setCounter] = useState<number>(1)
  const increase = () => setCounter(counter + 1)
  const decrease = () => {
    if (counter === 1) return;
    setCounter(counter - 1);
  }

  return (
    <div className="flex flex-row gap-4 border border-rose-700 text-rose-700 font-semibold rounded-md w-1/2 justify-around py-3 items-center">
      <button className=" hover:bg-red-50 px-2 rounded-full transition text-2xl" onClick={decrease}>-</button>
      <p>{counter}</p>
      <button className=" hover:bg-red-50 px-2 rounded-full transition text-2xl" onClick={increase}>+</button>
    </div>
  );
}