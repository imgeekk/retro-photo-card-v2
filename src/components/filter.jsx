import React from 'react'
import { useState } from 'react';


function Filter(newFilter) {


    const [filter, setFilter] = useState("");
    
      
        const changeFilter = (newFilter) => {
            document.documentElement.classList.remove(
            "retro",
            "sunny",
            "original",
            "bw",
            );
            document.documentElement.classList.add(newFilter);
            setFilter(newFilter);
        };


  return (
    <div className='flex flex-col justify-center'>
        <h1 className='font-semibold text-2xl mb-2 '>Filters</h1>

        <div className='rounded-lg w-70 h-auto bg-white p-3 flex justify-center items-center gap-4 flex-wrap border-2 border-neutral-300 '>

            

            <div className='relative group'>
                <button onClick={()=> changeFilter("original")} className={`size-11 rounded-full bg-[#ffc693] active:scale-97 cursor-pointer overflow-hidden   ${filter === "original" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                    
                    <img src="original.png" alt="" className='w-auto h-full object-right object-cover' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Original
                </span>
            </div>
            


            <div className='relative group'>
                <button onClick={()=> changeFilter("retro")} className={`size-11 rounded-full bg-[#8b4f008b] active:scale-97 cursor-pointer overflow-hidden  ${filter === "retro" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                
                <img src="retro.png" alt="" className='w-auto h-full object-right object-cover' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Retro
                </span>
            </div>
            

            

            <div className='relative group'>
                <button onClick={()=> changeFilter("sunny")} className={`size-11 rounded-full bg-[#ffb700] active:scale-97 cursor-pointer overflow-hidden  ${filter === "sunny" ? "ring-2 ring-black ring-offset-1" : ""}`}>

                <img src="sunny.png" alt="" className='w-auto h-full object-right object-cover' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>Sunny
                </span>
            </div>
            



            <div className='relative group'>
                <button onClick={()=> changeFilter("bw")} className={`size-11 rounded-full bg-[#000000] active:scale-97 cursor-pointer overflow-hidden  ${filter === "bw" ? "ring-2 ring-black ring-offset-1" : ""}`}>
                
                <img src="bw.png" alt="" className='w-auto h-full object-left object-cover ' />
                </button>

                <span className='absolute -top-8 left-1/2 -translate-x-1/2 
                    bg-black text-white text-xs px-2 py-1 rounded
                    opacity-0 group-hover:opacity-100 transition'>B&W
                </span>
            </div>
            


        </div>
    </div>
  )
}

export default Filter