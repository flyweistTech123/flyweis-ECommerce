import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const ProfileDetailsCard = ({ requestNumber, user, department, contact, location,link }) => {
  const navigate = useNavigate()
  return (
    <div className="flex flex-col  md:mr-4 cardConatiner rounded-[20px] p-4 w-[250px]" onClick={()=>navigate(`/${link}`)}>
      <div className="flex justify-between ">
        <div className='flex gap-2'>
          <span className="text-xl font-bold">{requestNumber}.</span>
          <img
            className="rounded-full "
            src={user.avatar}
            alt={user.name}
            width="60"
            height="60"
          />

        </div>
        <img src="../Group 1423 (2).png" alt="" className='h-fit' />
      </div>
      <div className="mt-2">
      </div>
      <div className="mt-2">
        <p className="font-bold">{user.name}</p>
        <p className="text-[#000000]">{location}</p>
      </div>
      <div className="mt-2">
        <div className='flex justify-between'>
          <div className='flex flex-col gap-2'>
            <p className="text-[14px] font-semibold">{department}</p>
            <button className="text-blue-500 font-semibold text-left text-[13px] hover:underline">{contact}</button>
          </div>
          <div className='flex flex-col gap-2'>
            <p>Gaurad</p>
            <div className='flex gap-4'>
              <img src="../Vector (69).png" alt="" />
              <img src="../Group (13).png" alt="" />

            </div>
          </div>

        </div>

        <div className='border border-dashed border-[#757575] my-3'></div>


        <div className="">
          <p className='font-bold text-[12px]'>Phone No:
            <br />
            +91 9876543210</p>
          <p className='font-bold text-[12px]'>Emergency No:
            <br />
            +91 1234567890 </p>
        </div>

      </div>
    </div>
  )
}

export default ProfileDetailsCard