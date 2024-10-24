import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'react-notifications/lib/notifications.css';
import { toast } from 'react-toastify';
import { BaseUrl } from '../components/BaseURl/BaseUrl';


const useLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Fill all the fields");
    }

    const formData = {
      email,
      password,
    };
    const headers = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post(
        `${BaseUrl}api/v1/admin/signin`,
        formData,
        headers
      );
      toast.success("Login Successfully!");
      sessionStorage.setItem("token", response?.data?.data?.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Wrong email or password");
      return error;
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isChecked,
    setIsChecked,
    handleCheckboxChange,
    handleLogin,
  };
};

export default useLogin;
