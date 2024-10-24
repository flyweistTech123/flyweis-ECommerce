import React, { useState } from 'react'
import EmployeeCard from './EmployeeCard'
import { useNavigate } from 'react-router-dom';

const Recruitment = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()

    const requestData = [1,2,3,4,5,5,5,5,55,5,3]
  const rowsPerPage = 3;

  // Calculate pagination data
  const totalPages = Math.ceil(requestData.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = requestData.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
   
      const handleApprove = (requestNumber) => {
        console.log(`Approved request ${requestNumber}`);
      };
    
      const handleReject = (requestNumber) => {
        console.log(`Rejected request ${requestNumber}`);
      };
  return (
    <div>
        <div className='flex justify-between'>
        <div className="flex items-center gap-[30px] px-4 mb-4">
          <img
            src="../Vector (68).png"
            alt=""
            className="w-[34px] h-fit cursor-pointer"
            onClick={() => navigate("/employee")}
          />
          <div className="flex items-center gap-[20px]">
            <p className="font-bold text-[40px]">New Recruitment (20)</p>
          </div>
        </div>
        <div className='flex gap-4 '>
         <div className='bg-[#94FF91] rounded-[20px] px-3 py-2 font-bold h-fit'>
         Month
         </div>
         <div className='bg-[#A8A8A84D] rounded-[20px] px-3 py-2 font-bold h-fit'>
         Week
         </div>
        </div>
        </div>
        <div className='flex flex-col gap-4'>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
        </div>
        <div className="flex justify-end items-center mt-4 space-x-2">
      <button
        className="px-4 py-2 rounded-lg text-black cursor-pointer"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
         <span className="flex items-center">
              <span className="mr-2 ">‹</span> Previous
            </span>
      </button>

      {/* Display page numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 rounded-lg ${
            currentPage === index + 1
              ? 'bg-[#F02946] text-white'
              : 'bg-[#FFAFBB] text-[#A0A0A0]'
          }`}
          onClick={() => handlePageClick(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="px-4 py-2 rounded-lg text-black cursor-pointer"
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        <span className="flex items-center">
              Next <span className="ml-2">›</span>
            </span>
      </button>
    </div>
    </div>
  )
}

export default Recruitment