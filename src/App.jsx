
import { useRef, useState } from 'react'
import './App.css'
import { toPng } from 'html-to-image'

import { MdOutlineFileDownload } from "react-icons/md";
import { TbUpload } from "react-icons/tb";
import { RiResetLeftLine } from "react-icons/ri";

import Bgcolor from './components/bgcolor';



function App() {

  // all useRefs
  const dateRef = useRef()
  const titleRef = useRef()
  const imgBoxRef = useRef();

// all usestates
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [date, setdate] = useState()


  

// for image upload
  function handleUpload(e){
    e.preventDefault()
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result)
    };
    reader.readAsDataURL(file);
  }


// for reset
  function handleReset(e){
    e.preventDefault()
    setImage(null)
    setTitle('')
    setdate()

    dateRef.current.value = ''
    titleRef.current.value = ''
  }



  // for image download
 const handleDownload = () => {
  if (!imgBoxRef.current) return;

  toPng(imgBoxRef.current, { cacheBust: true, pixelRatio: 4 })
    .then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "card.png";
      link.href = dataUrl;
      link.click();
    });
};




  return (
    <>
      <div className='flex selection:text-white selection:bg-black'>
        <div className='h-screen w-100 bg-neutral-100 flex flex-col items-center pt-20 gap-5'>

          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl'>Title</h1>
            <form action="" >

              <input 
              value={title}
              onChange={(e) => setTitle(e.target.value)} 
              type="text" 
              className='border-3 rounded-md p-2.5 w-70 text-lg font-semibold' 
              placeholder="What’s on your mind?"
              maxLength={50}
              ref={titleRef} />
            </form>
          </div>

          <div className='flex flex-col gap-2'>
            <h1 className='font-semibold text-2xl'>Date</h1>
            <form action=""  onClick={() => dateRef.current.showPicker()} >

              <input 
              onChange={(e) => {
                const value = e.target.value;
                const [y, m, d] = value.split("-");
                const formatted = `${d}.${m}.${y}`; 
                setdate(formatted);
              }} 
              type="date" 
              onFocus={(e) => e.target.blur()}
              className='border-3 rounded-md p-2.5 w-70 text-lg font-semibold selection:bg-none'
              
              ref={dateRef}
            />

            </form>
          </div>

          <div>

            <Bgcolor/>

          </div>

        </div>

        <div className='h-screen w-800 flex-1 flex flex-col justify-center items-center -mt-7 selection:text-white selection:bg-black
        bg-[radial-gradient(circle,_#e5e7eb_1px,_transparent_1px)]
        bg-[size:10px_10px]
        '>


            <div ref={imgBoxRef} className='inline-block'>

              <div className=' w-[320px] h-[400px bg-[#e0f2fe] m-6 mb-10 rounded-lg shadow-lg border-2 border-[#7dd3fc] flex flex-col  hover:rotate-5 transition-all duration-400 px-5 pt-5 pb-4 overflow-hidden 
              yellow:bg-yellow-200 yellow:border-yellow-400
              
              sky:bg-sky-200 sky::border-sky-400
              
              green:bg-green-200 green:border-green-500
              
              pink:bg-rose-200 pink:border-rose-300
              
              red:bg-red-200 red:border-red-400
              
              indigo:bg-indigo-200 indigo:border-indigo-400
              
              neutral:bg-neutral-200 neutral:border-neutral-400
              
              purple:bg-purple-200 purple:border-purple-400
              
              teal:bg-teal-200 teal:border-teal-500
              
              orange:bg-orange-200 orange:border-orange-400
              '>
                
                <div className='w-full aspect-square rounded-sm  overflow-hidden '>
                  {image ?
                    (<img src={image} className='w-full h-full  rounded-xm object-cover   ' />) : null
                  }
                  

                </div>
                <div className='flex  flex-wrap '>
                  <h1 className='mt-2 font-semibold text-lg break-words '>{title}</h1>
                </div>
                <div className='w-full h-11 flex justify-end items-end'>
                  <p className='mt-2  text-sm text-[#a3a3a3] font-mono '>{date}</p>
                </div>
              </div>

            </div>

            
          <form action="" className='flex  flex-row gap-4 justify-center   items-center mb-4'>

            <input id='file' onChange={ handleUpload} type="file" className='border-2 cursor-pointer rounded-md p-2 hidden'/>


              
              <button   onClick={handleReset}  className='border-2 py-2 w-35 flex justify-center items-center rounded-md text-black font-semibold mt-2  text-xl cursor-pointer bg-white hover:bg-neutral-200 transition-all duration-300 active:scale-95'>
                <RiResetLeftLine className='mr-2 '/>
                Reset</button>

              <label htmlFor='file' className='bg-black py-2.5 w-35 flex justify-center items-center  rounded-md text-xl text-white mt-2  cursor-pointer hover:bg-neutral-700 transition-all duration-300 active:scale-95'>
                <TbUpload className='mr-2'/>
                Upload</label>
          </form>
            
            <div>
                { image ? 
                  (<button  onClick={handleDownload} className='bg-black py-2.5 w-74 flex justify-center items-center  rounded-md text-xl text-white   cursor-pointer hover:bg-neutral-700 transition-all duration-300 active:scale-95 '>
                    <MdOutlineFileDownload className='mr-2 size-6'/>
                    Download</button>) : null
                
                 }
              
            </div>
        </div>
      </div>
    </>
  )
}

export default App
