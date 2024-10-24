import React, { useEffect, useState } from 'react';
import './Dashboard.css'
import { useNavigate } from "react-router-dom";

import { getApi } from "../Repository/Api";
import endPoints from "../Repository/apiConfig";



import { MdDownload } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";
import { MdRemoveRedEye } from "react-icons/md";


import img from '../../Images/img1.jpeg'
import img1 from '../../Images/img2.png'
import img2 from '../../Images/img3.png'
import img3 from '../../Images/Vector.png'
import img4 from '../../Images/img4.png'
import img5 from '../../Images/img5.png'
import img6 from '../../Images/Dual Ring@1x-1.0s-200px-200px.gif'
import axios from 'axios';


const monthOptions = [
  { label: "January", value: "01" },
  { label: "February", value: "02" },
  { label: "March", value: "03" },
  { label: "April", value: "04" },
  { label: "May", value: "05" },
  { label: "June", value: "06" },
  { label: "July", value: "07" },
  { label: "August", value: "08" },
  { label: "September", value: "09" },
  { label: "October", value: "10" },
  { label: "November", value: "11" },
  { label: "December", value: "12" },
];



const yearOptions = Array.from(new Array(50), (val, index) => {
  const year = 2024 - index;
  return { label: year.toString(), value: year.toString() };
});


const Dashboard = () => {
  const navigate = useNavigate()
  const [newrecuitment, setNewRecuitment] = useState({ data: [] });
  const [limit, setLimit] = useState(10)
  const [search, setSearch] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [absentusers, setAbsentUsers] = useState({ data: [] });
  const [dailydeployment, setDailydeployment] = useState('');
  const [doubleDutyDaily, setDoubleDutyDaily] = useState('');
  const [sitewisepresent, setSitewisePresent] = useState('');
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);


  useEffect(() => {
    getApi(endPoints.newuserRecuitment(1, limit, search, year, month), {
      setResponse: setNewRecuitment,
    });
  }, [year, month, search, limit]);


  useEffect(() => {
    getApi(endPoints.absentuser, {
      setResponse: setAbsentUsers,
      setLoading: setLoading,
    });
  }, []);

  useEffect(() => {
    getApi(endPoints.totalDeploymentDaily, {
      setResponse: setDailydeployment,
      setLoading: setLoading,
    });
  }, []);
  useEffect(() => {
    getApi(endPoints.doubleDutyDaily, {
      setResponse: setDoubleDutyDaily,
      setLoading: setLoading,
    });
  }, []);

  useEffect(() => {
    getApi(endPoints.siteWiseAttendance, {
      setResponse: setSitewisePresent,
      setLoading: setLoading,
    });
  }, []);


  const handleDownload = async () => {
    setLoading(true); // Set loading state
    try {
      const response = await axios.get('https://royal-security-backend.vercel.app/api/v1/admin/downloadAbsentUsersLastTwoMonths', {
        responseType: 'blob', // Important for binary data
      });

      // Create a blob from the response
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'absent_users_last_two_months.pdf'); // Specify the file name

      // Append to the document and trigger download
      document.body.appendChild(link);
      link.click();

      // Clean up and remove the link
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url); // Release the blob URL
      setIsModalOpen(true)
    } catch (error) {
      console.error('Error downloading the PDF:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };
  const handleDownload1 = async () => {
    setLoading(true); // Set loading state
    try {
      const response = await axios.post('https://royal-security-backend.vercel.app/downloadUsersByTypeAndDate', {
        responseType: 'blob', // Important for binary data
      });

      // Create a blob from the response
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);

      // Create a link element
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'absent_users_last_two_months.pdf'); // Specify the file name

      // Append to the document and trigger download
      document.body.appendChild(link);
      link.click();

      // Clean up and remove the link
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url); // Release the blob URL
      setIsModalOpen(true)
    } catch (error) {
      console.error('Error downloading the PDF:', error);
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  setTimeout(() => {
    setIsModalOpen(false)
    setIsModalOpen1(false)
  }, 4000)






  return (
    <>
      <div className="dashboard">
        <div className="px-4 dashboard1">
          <p className="font-bold text-[40px]">Dashboard</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div className="border-2 border-[#F02946] rounded-[20px] p-4 cursor-pointer">
            <div className='dashboard21'>
              <div className="flex gap-4 items-center mb-4">
                <img src="../Group 1361.png" alt="" />
                <p className="dashboard23">Daily Deployment</p>
              </div>
              <div className='dashboard22'>
                <p>{dailydeployment?.data?.totalCountDeployment}</p>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#F02946] rounded-[20px] p-4 cursor-pointer" onClick={() => navigate('/daily-deploy/present')}>
            <div className='dashboard21'>
              <div className="flex gap-4 items-center mb-4">
                <img src="../Group 1363 (1).png" alt="" />
                <p className="dashboard23">Present</p>
              </div>
              <div className='dashboard22'>
                <p>{sitewisepresent?.data?.totalCount}%</p>
              </div>
            </div>
          </div>
          <div className=" border-2 border-[#F02946] rounded-[20px] p-4 cursor-pointer" onClick={() => navigate('/daily-deploy/shortage')}>
            <div className='dashboard21'>
              <div className="flex gap-4 items-center mb-4">
                <img src="../Group 1363 (2).png" alt="" />
                <p className="dashboard23">Shortage</p>
              </div>
              <div className='dashboard22'>
                <p>{dailydeployment?.data?.totalCountDeployment}%</p>
              </div>
            </div>

          </div>
          <div className=" border-2 border-[#F02946] rounded-[20px] p-4 cursor-pointer" onClick={() => navigate('/daily-deploy/double-duty')}>
            <div className='dashboard21'>
              <div className="flex gap-4 items-center mb-4">
                <img src="../Group 1363 (3).png" alt="" />
                <p className="dashboard23">Double Duty</p>
              </div>
              <div className='dashboard22'>
                <p>{doubleDutyDaily?.data?.dailyDoubleDutyCount}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='dashboard2'>
          <div className='dashboard3'>
            <div className="border-2 border-[#F02946] rounded-[20px] dashboard4">
              <img src={img} alt="" />
            </div>
            <div className='dashboard5'>
              <p>Live Location</p>
            </div>
          </div>
          <div className='dashboard6'>
            <div className='dashboard7'>
              <h6>New Recruitment ({newrecuitment?.pagination?.totalUsers})</h6>
              <div className='dashboard8'>
                <label htmlFor="">Year</label>
                <select
                  name=""
                  id="year-select"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}>
                  {yearOptions.map((year, index) => (
                    <option key={index} value={year.value}>
                      {year.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className='dashboard8'>
                <label htmlFor="">Month</label>
                <select
                  name=""
                  id="month-select"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}>
                  {monthOptions.map((month, index) => (
                    <option key={index} value={month.value}>
                      {month.label}
                    </option>
                  ))}
                </select>
              </div>
              <MdDownload color='#000000' size={25} onClick={handleDownload1} style={{ cursor: 'pointer' }} />
            </div>
            <div className='dashboard9'>
              {loading ? (
                <div className='loading-container'>
                  <img src={img6} alt="Loading..." /> {/* Display the loading GIF */}
                </div>
              ) : (
                newrecuitment?.data?.map((i, index) => (
                  <div className='dashboard10' key={index}>
                    <div className='dashboard11'>
                      <div className='dashboard12'>
                        <img src={img1} alt="" />
                      </div>
                      <div className='dashboard13'>
                        <h5>{i.fullName}</h5>
                        <p>DOJ: {i.createdAt.slice(0, 10)}</p>
                      </div>
                    </div>
                    <div className='dashboard13'>
                      <h6 style={{ textAlign: "end" }}>{i.userType === "SECURITYGUARD" ? "SG" : i.userType === "SECURITYSUPERVISOR" ? "SS" : ""}</h6>
                      <p>Maped site location </p>
                    </div>
                  </div>
                ))
              )}
              {/* <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img1} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Jenny Wilson</h5>
                    <p>DOJ: 8/12/2024</p>
                  </div>
                </div>
                <div className='dashboard13'>
                  <h6 style={{ textAlign: "end" }}>SG</h6>
                  <p>Maped site location </p>
                </div>
              </div>
              <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img2} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Devon Lane</h5>
                    <p>DOJ: 8/12/2024</p>
                  </div>
                </div>
                <div className='dashboard13'>
                  <h6 style={{ textAlign: "end" }}>ESG</h6>
                  <p>Maped site location </p>
                </div>
              </div>
              <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img2} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Jane Cooper</h5>
                    <p>DOJ: 8/12/2024</p>
                  </div>
                </div>
                <div className='dashboard13'>
                  <h6 style={{ textAlign: "end" }}>SO</h6>
                  <p>Maped site location </p>
                </div>
              </div>
              <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img2} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Jane Cooper</h5>
                    <p>DOJ: 8/12/2024</p>
                  </div>
                </div>
                <div className='dashboard13'>
                  <h6 style={{ textAlign: "end" }}>SO</h6>
                  <p>Maped site location </p>
                </div>
              </div> */}
            </div>

            <div className='dashboard14' onClick={() => navigate('/newrecruitment')}>
              <h6>See All</h6>
              <IoIosArrowForward size={15} />
            </div>
          </div>
        </div>

        <div className='dashboard2'>
          <div className='dashboard16'>
            <div className='dashboard7'>
              <h6>Reports</h6>
              <img src={img3} alt="" />
            </div>
            <div className='dashboard9'>
              <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img4} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Zaire Mango</h5>
                    <p>w.lawson@example.com</p>
                  </div>
                </div>
                <div className='dashboard17'>
                  <h6>11,234</h6>
                  <p>Austin</p>
                </div>
                <div className='dashboard18'>
                  <p>Visit Report</p>
                </div>
                <div>
                  <RiEdit2Fill color='#000000' size={25} onClick={() => navigate('/editreport')} style={{ cursor: 'pointer' }} />
                </div>
                <div>
                  <MdRemoveRedEye color='#000000' size={25} onClick={() => navigate('/viewreport')} style={{ cursor: 'pointer' }} />
                </div>
                <div className='dashboard18' onClick={() => setIsModalOpen1(true)}>
                  <p>Send</p>
                </div>
              </div>
              <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img5} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Cristofer Vetrovs</h5>
                    <p>w.lawson@example.com</p>
                  </div>
                </div>
                <div className='dashboard17'>
                  <h6>11,234</h6>
                  <p>Austin</p>
                </div>
                <div className='dashboard18'>
                  <p>Visit Report</p>
                </div>
                <div>
                  <RiEdit2Fill color='#000000' size={25} onClick={() => navigate('/editreport')} style={{ cursor: 'pointer' }} />
                </div>
                <div>
                  <MdRemoveRedEye color='#000000' size={25} onClick={() => navigate('/viewreport')} style={{ cursor: 'pointer' }} />
                </div>
                <div className='dashboard18'>
                  <p>Send</p>
                </div>
              </div>
              <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img2} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Kadin Rhiel Madsen</h5>
                    <p>w.lawson@example.com</p>
                  </div>
                </div>
                <div className='dashboard17'>
                  <h6>11,234</h6>
                  <p>Austin</p>
                </div>
                <div className='dashboard18'>
                  <p>Visit Report</p>
                </div>
                <div>
                  <RiEdit2Fill color='#000000' size={25} onClick={() => navigate('/editreport')} style={{ cursor: 'pointer' }} />
                </div>
                <div>
                  <MdRemoveRedEye color='#000000' size={25} onClick={() => navigate('/viewreport')} style={{ cursor: 'pointer' }} />
                </div>
                <div className='dashboard18'>
                  <p>Send</p>
                </div>
              </div>
              <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img5} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Kadin Rhiel Madsen</h5>
                    <p>w.lawson@example.com</p>
                  </div>
                </div>
                <div className='dashboard17'>
                  <h6>11,234</h6>
                  <p>Austin</p>
                </div>
                <div className='dashboard18'>
                  <p>Visit Report</p>
                </div>
                <div>
                  <RiEdit2Fill color='#000000' size={25} onClick={() => navigate('/editreport')} style={{ cursor: 'pointer' }} />
                </div>
                <div>
                  <MdRemoveRedEye color='#000000' size={25} onClick={() => navigate('/viewreport')} style={{ cursor: 'pointer' }} />
                </div>
                <div className='dashboard18'>
                  <p>Send</p>
                </div>
              </div>
            </div>
            <div className='dashboard14' onClick={() => navigate('/visit')}>
              <h6>See All</h6>
              <IoIosArrowForward size={15} />
            </div>
          </div>
          <div className='dashboard6'>
            <div className='dashboard7'>
              <h6>Long-time Absent ({absentusers.data.length})</h6>
              <div className='dashboard20'>
                <div className='dashboard19'>
                  <h4>Last 2 Months</h4>
                </div>
                <MdDownload color='#000000' size={25} style={{ cursor: 'pointer' }} onClick={handleDownload} />
              </div>
            </div>
            <div className='dashboard9'>
              {loading ? (
                <div className='loading-container'>
                  <img src={img6} alt="Loading..." /> {/* Display the loading GIF */}
                </div>
              ) : (

                absentusers.data.map((i, index) => (
                  <div className='dashboard10' key={index}>
                    <div className='dashboard11'>
                      <div className='dashboard12'>
                        <img src={img1} alt="" />
                      </div>
                      <div className='dashboard13'>
                        <h5>{i.fullName}</h5>
                        <p>LWD: 8/12/2024</p>
                      </div>
                    </div>
                    <div className='dashboard13'>
                      <h6 style={{ textAlign: "end" }}>11,234</h6>
                      <p>Last site location</p>
                    </div>
                    <div>
                      <label className="switch">
                        <input
                          type="checkbox"
                          id="schedule-toggle"
                        />
                        <span className="slider round"></span>
                      </label>

                    </div>
                  </div>
                ))
              )}
              {/* <div className='dashboard10'>
                <div className='dashboard11'>
                  <div className='dashboard12'>
                    <img src={img2} alt="" />
                  </div>
                  <div className='dashboard13'>
                    <h5>Devon Lane</h5>
                    <p>Last day of work: 8/12/2024</p>
                  </div>
                </div>
                <div className='dashboard13'>
                  <h6 style={{ textAlign: "end" }}>11,234</h6>
                  <p>Last site location</p>
                </div>
                <div>
                  <label className="switch">
                    <input
                      type="checkbox"
                      id="schedule-toggle"
                    />
                    <span className="slider round"></span>
                  </label>

                </div>
              </div> */}
            </div>

            <div className='dashboard14' onClick={() => navigate('/longtimeabsent')}>
              <h6>See All</h6>
              <IoIosArrowForward size={15} />
            </div>
          </div>
        </div>

      </div >
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 py-[60px] rounded shadow-lg w-1/3">
            <div className='flex flex-col items-center gap-[20px]'>
              <img src="../Frame 48095930.png" alt="" />
              <p className='font-bold text-[#121212]'>Successfully Downloaded</p>
            </div>
          </div>
        </div>
      )}
      {isModalOpen1 && (
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

export default Dashboard