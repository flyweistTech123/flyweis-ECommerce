import React, { useState } from "react";
import './login.css'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import useLogin from "../../hooks/useLogin";
const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    handleCheckboxChange,
    handleLogin,
  } = useLogin()
  const [showPassword, setShowPassword] = useState(false);


  const navigate = useNavigate()


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
                <p className="text-[#39434F] text-[28px] font-[700]">Login to Security admin</p>
                <p className="text-[#F02946] text-[24px]">Welcome! Please enter your information below and get started.</p>
              </div>
              <div className="mx-[20px] mt-[30px]">
                <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className="px-[10px] py-[8px] rounded-[8px] w-full mb-[14px]" placeholder="Email" />
                <div className="relative">
                  <input  type={showPassword ? "text" : "password"}  onChange={(e) => setPassword(e.target.value)} value={password} className="px-[10px] pr-[50px] py-[8px] rounded-[8px] w-full" placeholder="Password" />
                  <div className="absolute top-2 right-3 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                    <FontAwesomeIcon
                      icon={showPassword ? faEyeSlash : faEye}
                    />

                  </div>
                </div>
              </div>
              <div className="mx-[20px] mt-[16px] flex justify-between">
                <div>
                  <input onChange={handleCheckboxChange} value={isChecked} type="checkbox" name="" id="" className="w-[20px] h-[16px] " />
                  <label htmlFor="" className="text-[#F02946] pl-[6px]">Remember me</label>
                </div>
                <p className="text-[#39434F] cursor-pointer" onClick={()=>navigate('/forgetpassoword')}>Forgot Password?</p>
              </div>
              <div className="mx-[20px] mt-[30px]">
                <button onClick={handleLogin} className="flex items-center justify-center py-[10px] rounded-[8px] gap-[10px] bg-[#F02946] text-[20px] text-[#FAFAFA] w-full">
                  <span>LOGIN</span>
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

export default Login;
