import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = () => {
    const location = useLocation();
    const path = location.pathname;
    const navigate = useNavigate();
    return (
        <div className='w-[18vw] min-h-[100vh] h-full border-r border-r-1 border-r-[#F02946]'>
            <div className='py-[20px]'>
                <div className='flex justify-center'>
                    <img src="../image 2 (1).png" alt="" />
                </div>
                <div className='flex flex-col gap-[16px] mt-[50px] px-[20px]'>
                    <div
                        className={path.startsWith("/dashboard") ? "text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/dashboard")}
                    >
                        <span>
                            {path.startsWith("/dashboard") ? <img src="../icons/Vector (48).png" alt="" /> : <img src="../icons/Vector (47).png" alt="" />
                            }
                        </span>
                        <p>Dashboard</p>

                    </div>
                    <div
                        className={path.startsWith("/visit") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/visit")}
                    >
                        <span>
                            {path.startsWith("/visit") ? <img src="../icons/Vector (50).png" alt="" /> : <img src="../icons/Vector (49).png" alt="" />
                            }
                        </span>
                        <p>Visit Site</p>

                    </div>
                    <div
                        className={path.startsWith("/maped") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/maped")}
                    >
                        <span>
                            {path.startsWith("/maped") ? <img src="../icons/Group 1423 (1).png" alt="" /> : <img src="../icons/Group 1423.png" alt="" />
                            }
                        </span>
                        <p>Maped Site</p>

                    </div>
                    <div
                        className={path.startsWith("/daily-deploy") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/daily-deploy")}
                    >
                        <span>
                            {path.startsWith("/daily-deploy") ? <img src="../icons/Vector (52).png" alt="" /> : <img src="../icons/Vector (51).png" alt="" />
                            }
                        </span>
                        <p>Daily Deployment</p>

                    </div>
                    <div
                        className={path.startsWith("/monthly-deposite") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/monthly-deposite")}
                    >
                        <span>
                            {path.startsWith("/monthly-deposite") ? <img src="../icons/Group 1424 (1).png" alt="" /> : <img src="../icons/Group 1424.png" alt="" />
                            }
                        </span>
                        <p>Monthly Deployment</p>

                    </div>
                    <div
                        className={path.startsWith("/approval") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/approval")}
                    >
                        <span>
                            {path.startsWith("/approval") ? <img src="../icons/Vector (54).png" alt="" /> : <img src="../icons/Vector (53).png" alt="" />
                            }
                        </span>
                        <p>Approval Request</p>

                    </div>
                    <div
                        className={path.startsWith("/attendance") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/attendance")}
                    >
                        <span>
                            {path.startsWith("/attendance") ? <img src="../icons/Mask group (5).png" alt="" /> : <img src="../icons/attendance 1.png" alt="" />
                            }
                        </span>
                        <p>Manual Attendance</p>

                    </div>
                    <div
                        className={path.startsWith("/site") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/site")}
                    >
                        <span>
                            {path.startsWith("/site") ? <img src="../icons/Vector (56).png" alt="" /> : <img src="../icons/Vector (55).png" alt="" />
                            }
                        </span>
                        <p>Site</p>

                    </div>
                    <div
                        className={path.startsWith("/employee") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/employee")}
                    >
                        <span>
                            {path.startsWith("/employee") ? <img src="../icons/Group 1425 (1).png" alt="" /> : <img src="../icons/Group 1425.png" alt="" />
                            }
                        </span>
                        <p>Add Employee</p>

                    </div>
                    <div
                        className={path.startsWith("/profile") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/profile")}
                    >
                        <span>
                            {path.startsWith("/profile") ? <img src="../icons/Vector (58).png" alt="" /> : <img src="../icons/Vector (57).png" alt="" />
                            }
                        </span>
                        <p>Profile</p>

                    </div>
                    <div
                        className={path.startsWith("/updateprofile-request") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/updateprofile-request")}
                    >
                        <span>
                            {path.startsWith("/updateprofile-request") ? <img src="../icons/Group (12).png" alt="" /> : <img src="../icons/Group (11).png" alt="" />
                            }
                        </span>
                        <p>Profile Update Request</p>

                    </div>
                    <div
                        className={path.startsWith("/report") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/report")}
                    >
                        <span>
                            {path.startsWith("/report") ? <img src="../icons/Vector (60).png" alt="" /> : <img src="../icons/Vector (59).png" alt="" />
                            }
                        </span>
                        <p>Report</p>

                    </div>
                    <div
                        className={path.startsWith("/leave") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/leave")}
                    >
                        <span>
                            {path.startsWith("/leave") ? <img src="../icons/Vector (62).png" alt="" /> : <img src="../icons/Vector (61).png" alt="" />
                            }
                        </span>
                        <p>Leave Approval</p>

                    </div>
                    <div
                        className={path.startsWith("/PushNotification") ? " text-[#FFFFFF] border border-b-4 border-b-[#000000] bg-[#F02946] py-[6px] rounded-[50px] flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]" : "flex items-center gap-[10px] pl-[14px] cursor-pointer font-[500]"}
                        onClick={() => navigate("/PushNotification")}
                    >
                        <span>
                            {path.startsWith("/PushNotification") ? <img src="../icons/Vector (64).png" alt="" /> : <img src="../icons/Vector (63).png" alt="" />
                            }
                        </span>
                        <p>Push Notification</p>

                    </div>
                </div>
                <div className='flex justify-end mr-[20px] mt-[50px]' onClick={() => navigate('/')}>
                    <img src="../icons/Vector (65).png" alt="" className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default SideBar