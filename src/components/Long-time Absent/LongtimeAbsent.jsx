import React, { useState } from 'react'
import './LongtimeAbsent.css'


import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import LongtimrabsentCard from './LongtimrabsentCard';


const requestData = [
    {
        requestNumber: 1,
        user: {
            name: 'Jenny Wilson',
            avatar: '../Ellipse 31.png',
            assignedSite: 'Site Name',
        },
        department: 'Department',
        contact: 'Contact',
        location: 'West Bengal',
        requestDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
        requestNumber: 2,
        user: {
            name: 'Jenny Wilson',
            avatar: '../Ellipse 31.png',
            assignedSite: 'Site Name',
        },
        department: 'Department',
        contact: 'Contact',
        location: 'West Bengal',
        requestDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
        requestNumber: 3,
        user: {
            name: 'Jenny Wilson',
            avatar: '../Ellipse 31.png',
            assignedSite: 'Site Name',
        },
        department: 'Department',
        contact: 'Contact',
        location: 'West Bengal',
        requestDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
        requestNumber: 4,
        user: {
            name: 'Jenny Wilson',
            avatar: '../Ellipse 31.png',
            assignedSite: 'Site Name',
        },
        department: 'Department',
        contact: 'Contact',
        location: 'West Bengal',
        requestDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
        requestNumber: 5,
        user: {
            name: 'Jenny Wilson',
            avatar: '../Ellipse 31.png',
            assignedSite: 'Site Name',
        },
        department: 'Department',
        contact: 'Contact',
        location: 'West Bengal',
        requestDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
        requestNumber: 6,
        user: {
            name: 'Jenny Wilson',
            avatar: '../Ellipse 31.png',
            assignedSite: 'Site Name',
        },
        department: 'Department',
        contact: 'Contact',
        location: 'West Bengal',
        requestDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
    {
        requestNumber: 7,
        user: {
            name: 'Jenny Wilson',
            avatar: '../Ellipse 31.png',
            assignedSite: 'Site Name',
        },
        department: 'Department',
        contact: 'Contact',
        location: 'West Bengal',
        requestDetails: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
    },
];

const LongtimeAbsent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()
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
                <div className="px-4 dashboard1 flex items-center gap-3">
                    <FaArrowLeft color="#000000" size={30} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                    <p className="font-bold text-[40px]">Long-time Absent (7)</p>
                </div>
                <div className='flex items-center gap-4 '>
                    <div className="site2">
                        <IoFilterSharp color="#52525B" size={20} />
                        <p>Sort By</p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto p-4">
                {currentData.map((request) => (
                    <LongtimrabsentCard
                        key={request.requestNumber}
                        requestNumber={request.requestNumber}
                        user={request.user}
                        department={request.department}
                        contact={request.contact}
                        location={request.location}
                        requestDetails={request.requestDetails}
                        onApprove={() => handleApprove(request.requestNumber)}
                        onReject={() => handleReject(request.requestNumber)}
                    />
                ))}
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
                        className={`px-4 py-2 rounded-lg ${currentPage === index + 1
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

export default LongtimeAbsent