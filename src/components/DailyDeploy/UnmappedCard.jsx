import React from 'react'
import { useNavigate } from 'react-router-dom'

const UnmappedCard = () => {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between gap-2 border border-1 border-[#F02946] rounded-[10px] p-4'>
       <div className='flex gap-2 '>
        <div className='relative'>
        <img src="../Ellipse 5.png" alt="" className='w-[60px] h-[60px] rounded-full'/>
        <div className='w-[10px] h-[10px] rounded-full bg-green-500 absolute bottom-1 right-1'></div>

        </div>
        <div>
          <p className='font-bold pb-2'>Aspen Dias</p>
          <p className='font-bold'>Site Name</p>
        </div>
       </div>
       <div className='flex '>
        <div>
          <p className='font-bold text-right'>Date: 06/25/24
            <br />
             11:20 am</p>
   
        </div>
       </div>
    
    </div>
  )
}

export default UnmappedCard