import React, { useState } from 'react'
import EmployeeCard from './EmployeeCard'
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

import { FaPlus } from "react-icons/fa6";


const Employee = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate()

  const requestData = [1, 2, 3, 4, 5, 5, 5, 5, 55, 5, 3]
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
      <div className='flex justify-between items-center'>
        <div className="px-4 dashboard1">
          <p className="font-bold text-[40px]">Add Employee</p>
        </div>
        <div className="site1"  onClick={() => navigate("/profile")}>
          <button><FaPlus />Add Employee</button>
        </div>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <EmployeeCard />
        <EmployeeCard />
        <EmployeeCard />
      </div>
      
      <div className="flex justify-end mt-4 mr-4">
        <ReactPaginate
          previousLabel={
            <span className="flex items-center">
              <span className="mr-2">‹</span> Previous
            </span>
          }
          nextLabel={
            <span className="flex items-center">
              Next <span className="ml-2">›</span>
            </span>
          }
          breakLabel="..."
          pageCount={totalPages}
          // onPageChange={(page) => gotoPage(page.selected)}
          containerClassName="flex items-center space-x-2"
          pageClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-[#A0A0A0] bg-pink-200 hover:bg-red-400 transition"
          previousClassName="text-black font-semibold hover:text-red-500 transition"
          nextClassName="text-red-500 font-semibold hover:text-red-700 transition"
          breakClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-gray-500 bg-pink-200"
          activeClassName="bg-red-500 text-white font-bold"
        />
      </div>
    </div>
  )
}

export default Employee