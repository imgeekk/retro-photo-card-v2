import React, { useState } from 'react'

function Bgcolor({newColor}) {

    const [color, setColor] = useState("");

  
    const changeColor = (newColor) => {
        document.documentElement.classList.remove(
        "yellow",
        "sky",
        "pink",
        "green",
        "red",
        "indigo",
        "neutral",
        "purple",
        'teal',
        "orange",
        );
        document.documentElement.classList.add(newColor);
        setColor(newColor);
    };


  return (
    <div className='flex flex-col'>
        <h1 className='font-semibold text-2xl flex mb-2'>Colors</h1>

        <div className='rounded-lg w-70 h-auto bg-white p-3 flex justify-center items-center gap-2 flex-wrap border-2 border-neutral-300 '>

            <button onClick={()=> changeColor("yellow")} className='size-10 rounded-full bg-yellow-300 active:scale-97 cursor-pointer '></button>

            <button onClick={()=> changeColor("sky")} className='size-10 rounded-full bg-sky-300 active:scale-97 cursor-pointer '></button>

            <button onClick={()=> changeColor("pink")} className='size-10 rounded-full bg-pink-400 active:scale-97 cursor-pointer'></button>

            <button onClick={()=> changeColor("green")} className='size-10 rounded-full bg-green-400 active:scale-97 cursor-pointer'></button>

            <button onClick={()=> changeColor("red")} className='size-10 rounded-full bg-red-400 active:scale-97 cursor-pointer'></button>

            <button onClick={()=> changeColor("indigo")} className='size-10 rounded-full bg-indigo-400 active:scale-97 cursor-pointer'></button>

            <button onClick={()=> changeColor("neutral")} className='size-10 rounded-full bg-neutral-400 active:scale-97 cursor-pointer'></button>

            <button onClick={()=> changeColor("purple")} className='size-10 rounded-full bg-purple-400 active:scale-97 cursor-pointer'></button>

            <button onClick={()=> changeColor("teal")} className='size-10 rounded-full bg-teal-400 active:scale-97 cursor-pointer'></button>

            <button onClick={()=> changeColor("orange")} className='size-10 rounded-full bg-orange-400 active:scale-97 cursor-pointer'></button>
            
        </div>
    </div>
  )
}

export default Bgcolor