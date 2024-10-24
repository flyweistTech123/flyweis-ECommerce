import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[80px] border-b border-b-1 border-b-[#F02946]  w-full'>
        <div className='flex items-center justify-between h-[80px] px-[20px] '>
            <div className='relative '>
                <input type="text" placeholder='Type to search' className='w-[52vw] py-[8px] pl-[50px] pr-[10px] rounded-[10px] border border-1 border-[#F02946]' />
                <img src="../search.png" alt="" className='absolute top-3 left-3'/>
            </div>
            <div className='flex items-center gap-[8px]'>
            <span className="text-[#F02946]">English ( UK )</span>
            <img src="../teenyicons_down-solid (1).png" alt="" className="h-fit"/>
            </div>
            <img src="../mail.png" alt="" />
            <img src="../bell.png" alt="" />
            <div className=''>
                <img src="../Ellipse 6.png" alt="" className='w-[50px] h-[50px] rounded-full' />
            </div>
        </div>
    </div>
  )
}

export default Navbar