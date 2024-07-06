import React from 'react'
import Tick from '../assets/tick-icon.jpg'
import Not_tick from '../assets/not_tick.png'
import Delete from '../assets/delete icon.jpg'
const Todoitems = ({text , id, iscomplete, deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={iscomplete ? Tick : Not_tick} alt="" className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 
            ${iscomplete ? "line-through" : ""} `}>
                {text}</p>
        </div>

        <img  onClick={()=>{deleteTodo(id)}}  src={Delete} alt=""  className='w-3.5 cursor-pointer' />
    </div>


)
}

export default Todoitems