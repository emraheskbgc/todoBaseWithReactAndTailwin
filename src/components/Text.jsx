import { useState } from "react"
import React from 'react'

const Text = () => {
    const[inputValue, setInputValue] = useState("")
    const[text, setText] = useState([])
   const handleChange = (event) => {
    setInputValue(event.target.value)
   }
   const handleSubmit  = () => {
    setText([...text, {value:inputValue, completed:false}])
    setInputValue("")
    
   }
   const handleToggle = (index) => {
    const newValue = [...text];
    newValue[index].completed = !newValue[index].completed
    setText(newValue)
   }  

  return (
    <div className='flex flex-col items-center justify-center mt-3 '>
        
      <div>
      <input type="text" value={inputValue} onChange={handleChange} className='bg-stone-300 border-2 border-cyan-900 rounded-full px-2 py-2 font-bold w-[300px]' />
      <button onClick={handleSubmit} className='border-2 border-cyan-900 rounded-full px-2 py-2 bg-green-500 w-[70px] font-bold '>Ekle</button>
      </div>
      <div >
        {
            text.map((item,index) => (
                <ul key={index} className="list-disc">
                    <li onClick={() => handleToggle(index)} className={`text-2xl backdrop-blur-sm bg-amber-300 rounded-full px-3 py-1 mt-2 ${item.completed?"line-through text-gray-400":""}`}>
                        {
                            item.value
                            
                        }
                    </li>
                </ul>
            ))
        }
      </div>
    </div>
  )
}

export default Text
