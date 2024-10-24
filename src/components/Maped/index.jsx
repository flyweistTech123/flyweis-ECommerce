import React, { useEffect, useState } from 'react'
import './Maped.css'
import ReactPaginate from 'react-paginate';
import endPoints from '../Repository/apiConfig';
import { getApi } from '../Repository/Api';

import img from '../../Images/img7.png'
import img1 from '../../Images/img8.png'
import { IoSearchSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

import img6 from '../../Images/Dual Ring@1x-1.0s-200px-200px.gif'


const Maped = () => {
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const pageCount = 3;

  useEffect(() => {
    getApi(endPoints.users, {
      setResponse: setUsers,
      setLoading: setLoading,
    });
  }, []);


  return (
    <>
      <div className="dashboard">
        <div className="px-4 dashboard1">
          <p className="font-bold text-[40px]">Maped Site</p>
        </div>

        <div className='maped1'>
          <div className='maped2'>
            <div className='maped3'>
              <img src={img} alt="" />
            </div>
            <div className='maped4'>
              <IoSearchSharp color='#000000' size={20} />
              <input type="search" placeholder='Search by Name/Id/GPS' />
            </div>
          </div>
          <div className='maped5'>
            <div className='maped6'>
              <div className='maped7' onClick={() => navigate('/totalsssignedSite')}>
                <p>Total Assigned Site 1001</p>
              </div>
              <div>
                <img src={img1} alt="" />
              </div>
            </div>
            <div className='maped8'>
              <p>Total Gaurads {users?.data?.length}</p>
            </div>
            <div className='maped9'>
              <span>total Gaurads</span>
              <span>ID</span>
            </div>
            <div className='maped10'>
              {loading ? (
                <div className='loading-container'>
                  <img src={img6} alt="Loading..." /> {/* Display the loading GIF */}
                </div>
              ) : (
                users?.data?.map((i, index) => (
                  <div className='dashboard10'>
                    <div className='dashboard11'>
                      <div className='dashboard12'>
                        <img src={i.aadhaarDocument} alt="" />
                      </div>
                      <div className='dashboard13'>
                        <h5>{i.fullName}</h5>
                        <p>{i.email}</p>
                      </div>
                    </div>
                    <div className='dashboard17'>
                      <h6>#{i.employeeId}</h6>
                      <p>Austin</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className='maped11'>
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
                  pageCount={pageCount}
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

          </div>
        </div>
      </div>
    </>
  )
}

export default Maped