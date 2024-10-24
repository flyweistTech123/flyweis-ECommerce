import React, { useState } from "react";

import { BaseUrl } from '../../components/BaseURl/BaseUrl';
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";





const ForgetPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOTP] = useState('');

    const [show, setShow] = useState(false)


    const navigate = useNavigate()

    const handleForgetPassword = async () => {
        try {
            if (!email) {
                toast.error('Please input your email!');
                return;
            }

            const response = await axios.post(`${BaseUrl}api/v1/admin/forgotPassword`, {
                email: email,
            });

            const { message, otp } = response.data;
            toast.success(`${message}. OTP: ${otp}`);
            setShow(true);
        } catch (error) {
            // Check if the error response exists and display the specific message from the server
            if (error.response && error.response.data) {
                const { status, message } = error.response.data;
                if (status === 404) {
                    toast.error(`Error: ${message}`); // Custom error message from the server
                } else {
                    toast.error(`Error: ${message || 'Something went wrong!'}`);
                }
            } else {
                // Generic error message if there's no response data
                toast.error('An unexpected error occurred. Please try again later.');
            }
        }
    };


    const handleVerifyOTP = async () => {
        try {
            if (!otp) {
                toast.error('Please input your otp!');
                return;
            }

            const response = await axios.post(`${BaseUrl}api/v1/admin/verifyOTP`, {
                email: email,
                otp: otp
            });
            toast.success(`OTP verified successfully!`);
            navigate('/Newpassoword', { state: { email: email } })
        } catch (error) {
            // Check if the error response exists and display the specific message from the server
            if (error.response && error.response.data) {
                const { status, message } = error.response.data;
                if (status === 404) {
                    toast.error(`Error: ${message}`); // Custom error message from the server
                } else {
                    toast.error(`Error: ${message || 'Something went wrong!'}`);
                }
            } else {
                // Generic error message if there's no response data
                toast.error('An unexpected error occurred. Please try again later.');
            }
        }
    };


    return (
        <>
            <div className="flex justify-center items-center h-[100vh] w-full bg-black">
                <div className="h-[100vh] w-[100%] relative">
                    <img src="../Login.png" alt="" className="h-[100vh] w-[100%]" />
                    <div className="absolute top-6">
                        <img src="../image 2.png" alt="" className="w-[100px]" />
                        <div className="formContainer w-[35vw] py-[10px] rounded-[18px] mt-[10px] ml-[60px]" >
                            <div className="flex justify-center">
                                <img src="../uil_user.png" alt="" className="w-[100px]" />
                            </div>
                            <div className="text-center mt-[10px] mx-[20px]">
                                <p className="text-[#39434F] text-[25px] font-[700]">Forget the Password to Security admin</p>
                                <p className="text-[#F02946] text-[20px]">Please enter your Email below and get otp.</p>
                            </div>
                            <div className="mx-[20px] mt-[30px]">
                                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="px-[10px] py-[8px] rounded-[8px] w-full mb-[14px]" placeholder="Email" />
                            </div>
                            {show &&
                                <div className="mx-[20px] mt-[30px]">
                                    <input type="number" onChange={(e) => setOTP(e.target.value)} value={otp} className="px-[10px] py-[8px] rounded-[8px] w-full mb-[14px]" placeholder="otp" />
                                </div>
                            }
                            <p className="text-[#39434F] cursor-pointer text-right pr-4" onClick={() => navigate('/')}>Login?</p>
                            <div className="mx-[20px] mt-[30px]">
                                <button onClick={show ? handleVerifyOTP : handleForgetPassword} className="flex items-center justify-center py-[10px] rounded-[8px] gap-[10px] bg-[#F02946] text-[20px] text-[#FAFAFA] w-full">
                                    <span>{show ? "Verify OTP" : "Send OTP"}</span>
                                    <img src="../ArrowRight.png" alt="" />
                                </button>

                            </div>
                        </div>

                    </div>
                    <div className="absolute top-6 right-[100px] flex items-center gap-2">
                        <span className="text-white">English ( UK )</span>
                        <img src="../teenyicons_down-solid.png" alt="" className="h-fit" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPassword;
