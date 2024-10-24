import React from 'react'
import { useNavigate } from 'react-router-dom'
import UnmappedCard from './UnmappedCard'

const UnmappedPage = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="flex items-center gap-[50px] pr-4 pb-4">
        <img src="../Vector (68).png" alt="" className="w-[34px] h-fit cursor-pointer" onClick={()=>navigate('/daily-deploy')}/>
        <div className="flex items-center gap-[20px]">
          <p className="font-bold text-[40px]">Unmapped Site</p>
        </div>
      </div>
        <div className='grid grid-cols-3 gap-4 h-[90vh] overflow-y-auto'>
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     <UnmappedCard />
     {/* <UnmappedCard />
     <UnmappedCard /> */}

        </div>
    </div>
  )
}

export default UnmappedPage