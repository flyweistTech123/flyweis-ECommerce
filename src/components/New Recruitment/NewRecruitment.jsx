import React, { useEffect, useState } from 'react';
import EmployeeCard from '../Employee/EmployeeCard';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import endPoints from '../Repository/apiConfig';
import { getApi } from '../Repository/Api';
import Pagination from '../common/Pagination'; // Import your pagination component
import img6 from '../../Images/Dual Ring@1x-1.0s-200px-200px.gif';

const NewRecruitment = () => {
    const [newrecuitment, setNewRecuitment] = useState({ data: [] });
    const [pagination, setPagination] = useState({ totalUsers: 0, totalPages: 1, currentPage: 1, limit: 10 });
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const navigate = useNavigate();

    const fetchData = (page = 1) => {
        setLoading(true);
        getApi(endPoints.newuserRecuitment(page, pagination.limit, search, year, month), {
            setResponse: (response) => {
                setNewRecuitment(response);
                // Assuming the response contains pagination info
                if (response.pagination) {
                    setPagination(response.pagination);
                }
            },
            setLoading: setLoading,
        });
    };

    useEffect(() => {
        fetchData(pagination.currentPage);
    }, [year, month, search, pagination.limit]);

    const handlePageChange = (selectedPage) => {
        const newPage = selectedPage.selected + 1; // ReactPaginate is zero-based, hence +1
        setPagination({ ...pagination, currentPage: newPage });
        fetchData(newPage);
    };

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div className="px-4 dashboard1 flex items-center gap-3">
                    <FaArrowLeft color="#000000" size={30} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                    <p className="font-bold text-[40px]">New Recruitment ({pagination.totalUsers})</p>
                </div>
                <div className='flex items-center gap-4 '>
                    <div className='bg-[#94FF91] rounded-[20px] px-3 py-2 font-bold h-fit'>
                        Month
                    </div>
                    <div className='bg-[#A8A8A84D] rounded-[20px] px-3 py-2 font-bold h-fit'>
                        Year
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 mt-4'>
                {loading ? (
                    <div className='loading-container'>
                        <img src={img6} alt="Loading..." /> {/* Display the loading GIF */}
                    </div>
                ) : (
                    newrecuitment.data.map((employee, index) => (
                        <EmployeeCard key={index} employee={employee} index={index} />
                    ))
                )}
            </div>

            {/* Pagination Component */}
            <Pagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default NewRecruitment;
