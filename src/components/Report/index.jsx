import React from 'react'
import { useNavigate } from 'react-router-dom'

const Report = () => {
    const navigate = useNavigate('')
    return (
        <>
            <div>
                <div className='flex items-center justify-between gap-4'>
                    <div className="px-4 dashboard1">
                        <p className="font-bold text-[40px]">Report</p>
                    </div>
                    <div className='flex gap-4'>
                        <button className='border border-1 h-fit  border-[#F02946] text-[#F02946] text-[20px] rounded-[20px] p-1 px-3 font-bold' onClick={()=>navigate('/viewreport')}>View</button>
                        <button className='border border-1 h-fit border-[#F02946] text-[#F02946] text-[20px] rounded-[20px] p-1 px-3 font-bold' onClick={()=>navigate('/editreport')}>Edit</button>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-6 m-2'>
                    <div onClick={() => navigate('/report/download')} className='flex  items-center justify-between	 border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                        <p className='text-[26px] font-bold'>Profile Update Report</p>
                        <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]' />
                    </div>
                    <div onClick={() => navigate('/report/download')} className='flex  items-center justify-between	 border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                        <p className='text-[26px] font-bold'>Leave Approval Report</p>
                        <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]' />
                    </div>
                    <div onClick={() => navigate('/report/download')} className='flex  items-center justify-between	 border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                        <p className='text-[26px] font-bold'>Add Employee Report</p>
                        <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]' />
                    </div>
                    <div onClick={() => navigate('/report/download')} className='flex  items-center justify-between	 border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                        <p className='text-[26px] font-bold'>Daily Deployment Report</p>
                        <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]' />
                    </div>
                    <div onClick={() => navigate('/report/download')} className='flex  items-center justify-between	 border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                        <p className='text-[26px] font-bold'>Monthly Deployment Report</p>
                        <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]' />
                    </div>
                    <div className='flex  items-center justify-between	 border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                        <p className='text-[26px] font-bold'>Manual Attendance Report</p>
                        <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]' />
                    </div>

                    <div onClick={() => navigate('/report/download')} className='flex  items-center justify-between	 border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                        <p className='text-[26px] font-bold'>Muster Roll Report</p>
                        <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]' />
                    </div>
                    <div onClick={() => navigate('/report/download')} className='flex  items-center justify-between	 border border-1 cursor-pointer border-[#F02946] hover:bg-[#e38996] rounded-[20px] px-6 py-4'>
                        <p className='text-[26px] font-bold'>Employee Report</p>
                        <img src="../Vector (66).png" alt="" className='w-[24px] h-[28px]' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Report