import React, { useState } from "react";

import { BaseUrl } from '../../components/BaseURl/BaseUrl';
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation } from 'react-router-dom';




const NewPassword = () => {
    const location = useLocation();
    const [password, setPassword] = useState('');
    const [confpassword, setConfPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const email = location.state?.email || '';

    const navigate = useNavigate()

    const handleForgetPassword = async () => {
        try {
            if (!password) {
                toast.error('Please input your password!');
                return;
            }
            if (!confpassword) {
                toast.error('Please input your Confirm password!');
                return;
            }

            const response = await axios.post(`${BaseUrl}/api/v1/admin/resetPassword`, {
                email: email,
                newPassword: password,
                confirmPassword: confpassword
            });

            const { message } = response.data;
            toast.success(`${message}.`);
            navigate('/')
        } catch (error) {
            console.error('Error:', error.message);
            toast.error(error.message);
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
                                <p className="text-[#39434F] text-[25px] font-[700]">Reset the Password to Security admin</p>
                                <p className="text-[#F02946] text-[20px]">Please enter your New and Confirm Password below.</p>
                            </div>
                            <div className="mx-[20px] mt-[30px]">
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} onChange={(e) => setPassword(e.target.value)} value={password} className="px-[10px] pr-[50px] py-[8px] rounded-[8px] w-full" placeholder="New Password" />
                                    <div className="absolute top-2 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEyeSlash : faEye}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mx-[20px] mt-[30px]">
                                <div className="relative">
                                    <input type={showPassword ? "text" : "password"} onChange={(e) => setConfPassword(e.target.value)} value={confpassword} className="px-[10px] pr-[50px] py-[8px] rounded-[8px] w-full" placeholder="Confirm Password" />
                                    <div className="absolute top-2 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        <FontAwesomeIcon
                                            icon={showPassword ? faEyeSlash : faEye}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="mx-[20px] mt-[30px]">
                                <button onClick={handleForgetPassword} className="flex items-center justify-center py-[10px] rounded-[8px] gap-[10px] bg-[#F02946] text-[20px] text-[#FAFAFA] w-full">
                                    <span>Submit</span>
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

export default NewPassword;
