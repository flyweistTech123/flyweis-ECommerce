import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Select from "react-select";

const data = [
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
  {
    guardName: "Wilson Donin",
    guardId: "#123456",
    siteName: "Wilson Donin",
    siteCode: "#123456",
    city: "Lorem",
    state: "Lorem Ipsum",
    date: "03-05-2024",
    checkin: "06:00am",
    checkout: "02:00pm",
    hour: "1 hour",
  },
    
  ];
  

const CheckOutPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()
  const rowsPerPage = 10;

  // Calculate pagination data
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentData = data.slice(startIndex, endIndex);

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

  const monthOptions = [
    { label: "Previous Month", value: "Previous" },
    { label: "Current Month", value: "Current" },

  ];
  return (
    <div>
  <div className="flex items-center gap-[50px] pr-4">
        <img src="../Vector (68).png" alt="" className="w-[34px] h-fit cursor-pointer" onClick={()=>navigate('/daily-deploy')}/>
        <div className="flex items-center gap-[20px]">
          <p className="font-bold text-[40px]">Early Check Out</p>
          <p className="font-bold text-[24px] pt-4">7</p>
          <p className="font-bold text-[16px] pt-4">Sort By</p>
        </div>
        <div className="flex-1 flex items-center justify-between">
        <Select
              className="basic-single w-[200px]"
              classNamePrefix="select"
              defaultValue={monthOptions[0]}
              name="month"
              options={monthOptions}
            />
               <div className="mt-4"> 
                 <img src="../Vector (66).png" alt="Download" className="" />
                 </div>

        </div>
      </div>
    <div className="p-4">
    <table className="min-w-full border border-blue-500 rounded-lg">
      <thead className="bg-red-500 text-white">
        <tr>
          <th className="px-4 py-2 border">Guard Name</th>
          <th className="px-4 py-2 border">Guard Id</th>
          <th className="px-4 py-2 border">Site Name</th>
          <th className="px-4 py-2 border">Site Code</th>
          <th className="px-4 py-2 border">City</th>
          <th className="px-4 py-2 border">State</th>
          <th className="px-4 py-2 border">Date</th>
          <th className="px-4 py-2 border">Check In</th>
          <th className="px-4 py-2 border">Check Out</th>
          <th className="px-4 py-2 border">Hours To Spend</th>
        </tr>
      </thead>
      <tbody>
        {currentData.map((row, rowIndex) => (
          <tr key={rowIndex} className="border-b text-[#737373]">
            <td className="px-4 py-2 border ">{row.guardName}</td>
            <td className="px-4 py-2 border">   
                <div  className="flex justify-between items-center mb-2">
                  <span>{row.guardId}</span>

                </div></td>
            <td className="px-4 py-2 border">
            {row.siteName}
            </td>
            <td className="px-4 py-2 border">
            {row.siteCode}
            </td>
            <td className="px-4 py-2 border">
            {row.city}
            </td>
            <td className="px-4 py-2 border">
            {row.state}
            </td>
            <td className="px-4 py-2 border">
            {row.date}
            </td>
            <td className="px-4 py-2 border">
            {row.checkin}
            </td>
            <td className="px-4 py-2 border">
            {row.checkout}
            </td>
            <td className="px-4 py-2 border">
            {row.hour}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Pagination Controls */}
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
    </div>
  )
}

export default CheckOutPage