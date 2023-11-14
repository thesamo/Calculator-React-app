import { useState } from "react"

function App() {

const [value, setValue] = useState("")


const reset = () => {
  setValue ("")
};


const equalValue = () =>{
  setValue(eval(value))
}


const deleteBack = () =>{
 setValue(value.slice(0, -1))
}

const percent = () =>{
  setValue(parseFloat(value) / 100)
}

  return (
  <div className="flex items-center justify-center h-screen w-full bg-black ">
    <div className="calculator px-6 py-8 bg-[#1c1c1c]">
     <div>
        <input  className = "text-end text-2xl		 text-white border-none outline-none	bg-transparent	cursor-pointer w-full h-20" type="text" value={value} onChange={e => setValue(e.target.value) } />
      </div>
      <div className="buttons grid grid-rows-5 grid-flow-col gap-3 ">
        <input    onClick={reset} className="text-black cursor-pointer bg-[#9c9999] rounded-full w-14	h-14" type="button"  value="C" />
        <input   onClick={e => setValue(value + e.target.value)} className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="7" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="4" />
        <input   onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="1" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-start px-4 text-white  cursor-pointer bg-[#505050] col-span-2 rounded-full"  type="button"  value="0" />
        <input   onClick={deleteBack} className="text-black cursor-pointer bg-[#9c9999] rounded-full w-14	h-14" type="button"  value="DE" />
        <input  onClick={e => setValue(value + e.target.value) }className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="8" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="5" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="2" />
        <input  onClick={percent} className="text-black cursor-pointer	  bg-[#9c9999] rounded-full w-14	h-14" type="button"  value="%" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="9" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="6" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#505050] rounded-full w-14	h-14" type="button"  value="3" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer  bg-[#505050] rounded-full w-14	h-14" type="button"  value="." />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#FF9500] rounded-full w-14	h-14" type="button"  value="/" />
        <input onClick={e => setValue(value + e.target.value)} className="text-white cursor-pointer bg-[#FF9500] rounded-full w-14 h-14" type="button" value="*" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#FF9500] rounded-full w-14	h-14" type="button"  value="-" />
        <input  onClick={e => setValue(value + e.target.value) } className="text-white cursor-pointer	 bg-[#FF9500] rounded-full w-14	h-14" type="button"  value="+" />
        <input  onClick={equalValue}  className="text-white cursor-pointer bg-[#FF9500] rounded-full w-14	h-14" type="button" name="" id="" value="=" />
     </div>
    </div>
  </div>
  )
}

export default App
