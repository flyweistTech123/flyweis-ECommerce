import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import './ViewReport.css'

import { RiEdit2Fill } from "react-icons/ri";
import { FaArrowLeft } from "react-icons/fa6";
import { IoIosStar } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";



import img from '../../Images/img16.jfif'
import img1 from '../../Images/img17.jfif'
import img2 from '../../Images/img18.jfif'
import img3 from '../../Images/img19.jfif'
import img4 from '../../Images/img20.jfif'

const ViewReport = () => {
    const navigate = useNavigate()
    const [rating, setRating] = useState(4);

    // Function to handle star click and set the rating
    const handleStarClick = (index) => {
        // If clicking on the same rating, set it to that number or lower the rating
        setRating(index + 1 === rating ? index : index + 1);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);


    setTimeout(() => {
        setIsModalOpen(false)
    }, 4000)


    return (
        <>
            <div className="dashboard">
                <div className='flex justify-between items-center'>
                    <div className="px-4 dashboard1 flex items-center gap-3">
                        <FaArrowLeft color="#000000" size={30} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
                        <p className="font-bold text-[40px]">View Report</p>
                    </div>
                    <div className="viewreport1">
                        <h6>Edit</h6>
                        <RiEdit2Fill color="#F02946" size={20} />
                    </div>
                </div>

                <div className='viewreport2'>
                    <div className='viewreport3'>
                        <div className='viewreport4'>
                            <img src="../image 2 (1).png" alt="" />
                        </div>
                        <div className='viewreport5'>
                            <h4>Company Name</h4>
                        </div>
                        <div className='viewreport6'>
                            <h6>Company Address: Lorem Ipsum is simply dummy text </h6>
                        </div>
                    </div>
                    <div className='viewreport7'>
                        <div className='viewreport8'>
                            <label htmlFor="">Visited By</label>
                            <input type="text" placeholder='Loremipsum....' />
                        </div>
                        <div className='viewreport8'>
                            <label htmlFor="">Check In</label>
                            <input type="text" placeholder='6:00 am' />
                        </div>
                        <div className='viewreport8'>
                            <label htmlFor="">Check Out</label>
                            <input type="text" placeholder='3:00 pm' />
                        </div>
                        <div className='viewreport8'>
                            <label htmlFor="">Site Name</label>
                            <input type="text" placeholder='Loremipsum....' />
                        </div>
                        <div className='viewreport8'>
                            <label htmlFor="">Site Address</label>
                            <input type="text" placeholder='Loremipsum....' />
                        </div>
                        <div className='viewreport8'>
                            <label htmlFor="">Check In Address</label>
                            <input type="text" placeholder='Lorem Ipsum' />
                        </div>

                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Supervisor Personnel Behaviour</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    {[...Array(5)].map((_, index) => (
                                        index < rating ? (
                                            // Filled star if index is less than the current rating
                                            <IoIosStar
                                                key={index}
                                                color='#FFB039'
                                                size={30}
                                                onClick={() => handleStarClick(index)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        ) : (
                                            // Outline star if index is greater or equal to current rating
                                            <IoIosStarOutline
                                                key={index}
                                                color='#000000'
                                                size={30}
                                                onClick={() => handleStarClick(index)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )
                                    ))}
                                </div>
                                <h5><span>{rating}</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Grooming Standards of Security Personnel</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    {[...Array(5)].map((_, index) => (
                                        index < rating ? (
                                            // Filled star if index is less than the current rating
                                            <IoIosStar
                                                key={index}
                                                color='#FFB039'
                                                size={30}
                                                onClick={() => handleStarClick(index)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        ) : (
                                            // Outline star if index is greater or equal to current rating
                                            <IoIosStarOutline
                                                key={index}
                                                color='#000000'
                                                size={30}
                                                onClick={() => handleStarClick(index)}
                                                style={{ cursor: 'pointer' }}
                                            />
                                        )
                                    ))}
                                </div>
                                <h5><span>{rating}</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img1} alt="" />
                            </div>
                        </div>
                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Alertness Level of Security Personnel</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStarOutline color='#000000' size={30} />
                                </div>
                                <h5><span>5</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Any General Information About The Site</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStarOutline color='#000000' size={30} />
                                </div>
                                <h5><span>5</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img2} alt="" />
                            </div>
                        </div>
                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Maintainace of Records</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStarOutline color='#000000' size={30} />
                                </div>
                                <h5><span>5</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img3} alt="" />
                            </div>
                        </div>
                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Whether any Security Threat observed</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStarOutline color='#000000' size={30} />
                                </div>
                                <h5><span>5</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img4} alt="" />
                            </div>
                        </div>
                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Grooming Standards of Security Personnel</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStarOutline color='#000000' size={30} />
                                </div>
                                <h5><span>5</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Grooming Standards of Security Personnel</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStarOutline color='#000000' size={30} />
                                </div>
                                <h5><span>5</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img} alt="" />
                            </div>
                        </div>
                        <div className='viewreport9'>
                            <div className='viewreport10'>
                                <h6>Grooming Standards of Security Personnel</h6>
                                <p>(Rate 1 to 5 )</p>
                            </div>
                            <div className='viewreport11'>
                                <div className='viewreport12'>
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStar color='#FFB039' size={30} />
                                    <IoIosStarOutline color='#000000' size={30} />
                                </div>
                                <h5><span>5</span>/5</h5>
                            </div>
                            <div className='viewreport13'>
                                <img src={img} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='viewreport14'>
                        <button onClick={() => setIsModalOpen(true)}>Send</button>
                    </div>
                </div>
            </div >
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-4 py-[60px] rounded shadow-lg w-1/3">
                        <div className='flex flex-col items-center gap-[20px]'>
                            <img src="../Frame 48095930.png" alt="" />
                            <p className='font-bold text-[#121212]'>Report Send Successfully</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ViewReport