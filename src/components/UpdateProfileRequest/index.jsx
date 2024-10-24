import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UpdateProfileCard from "./UpdateProfileCard";

import ReactPaginate from 'react-paginate';


const UpdateProfileRequest = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const requestData = [
    {
      requestNumber: 1,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        link: 'profile',
    },
    {
      requestNumber: 2,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        link: 'profile',
    },
    {
      requestNumber: 3,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        link: 'profile',
    },
    {
      requestNumber: 4,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        link: 'profile',
    },
    {
      requestNumber: 5,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        link: 'profile',
    },
    {
      requestNumber: 6,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        link: 'profile',
    },
    {
      requestNumber: 7,
      user: {
        name: "Jenny Wilson",
        avatar: "../Ellipse 31.png",
        assignedSite: "Site Name",
      },
      department: "Department",
      contact: "Contact",
      location: "West Bengal",
      requestDetails:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        link: 'profile',
    },
  ];

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
      <div className="flex justify-between mb-4">
        <div className="px-4 dashboard1">
          <p className="font-bold text-[40px]">Profile Update Request</p>
        </div>
        <div className='flex items-center gap-4 '>
          <div className='bg-[#94FF91] rounded-[20px] px-3 py-2 font-bold h-fit'>
            Month
          </div>
          <div className='bg-[#A8A8A84D] rounded-[20px] px-3 py-2 font-bold h-fit'>
            Year
          </div>
          <img src="../Vector (66).png" alt="" className="w-[20px] h-[25px]" />
        </div>
      </div>
      {currentData.map((request) => (
        <div className="flex flex-col gap-4">
          <UpdateProfileCard
            key={request.requestNumber}
            requestNumber={request.requestNumber}
            user={request.user}
            department={request.department}
            contact={request.contact}
            location={request.location}
            requestDetails={request.requestDetails}
            onApprove={() => handleApprove(request.requestNumber)}
            onReject={() => handleReject(request.requestNumber)}
            link={request.link}
          />
        </div>
      ))}
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
          pageClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-[#FFFFFF] bg-pink-200 hover:bg-pink-300 transition"
          previousClassName="text-black font-semibold hover:text-red-500 transition"
          nextClassName="text-red-500 font-semibold hover:text-red-700 transition"
          breakClassName="w-8 h-8 flex items-center justify-center rounded-[10px] text-gray-500 bg-pink-200"
          activeClassName="bg-red-500 text-white font-bold"
        />
      </div>
    </div>
  );
};

export default UpdateProfileRequest;
