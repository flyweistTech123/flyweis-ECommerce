import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FaArrowLeft } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa6";

import img from '../../Images/img10.png'

import './Employeeprofile.css'

const EmpProfile = () => {

  const navigate = useNavigate();

  const inputFields = [
    {
      label: "Name",
      placeholder: "Name",
      type: "text"
    },
    {
      label: "Email",
      placeholder: "name@gmail.com",
      type: "email"
    },
    {
      label: "IFSC Code",
      placeholder: "1111 1111 1111 1111",
      type: "text"
    },
    {
      label: "Pf No/ Employee ID",
      placeholder: "ID",
      type: "text"
    },
    {
      label: "Mobile",
      placeholder: "91+ 9876543210",
      type: "number"
    },
    {
      label: "Emergency Contact No.",
      placeholder: "91+ 9876543210",
      type: "number"
    },
    {
      label: "Father/Husband Name",
      placeholder: "Huaband Name",
      type: "text"
    },
    {
      label: "Current Address",
      placeholder: "9800 9900 8989",
      type: "text"
    },
    {
      label: "UAN No",
      placeholder: "9800 9900 8989",
      type: "number"
    },
    {
      label: "DOB",
      placeholder: "dd/mm/yyyy",
      type: "date"
    },
    {
      label: "Aadhar No",
      placeholder: "1111 2222 3333",
      type: "number"
    },
    {
      label: "Nominee Name",
      placeholder: "Emery Bator",
      type: "text"
    },
    {
      label: "DOJ",
      placeholder: "dd/mm/yyyy",
      type: "date"
    },
    {
      label: "Pan No",
      placeholder: "1111 2222 3333",
      type: "text"
    },
    {
      label: "Relation with Nominee",
      placeholder: "Mother",
      type: "text"
    },
  ];

  const [edit, setEdit] = useState(false)

  const edittoggle = () => {
    setEdit(!edit)
  }

  return (
    <>
      <div>
        <div className="employeeprofile">
          <div className="employeeprofile1">
            <div className="employeeprofile2">
              <div className="employeeprofile3">
                <FaArrowLeft color="#ffffff" size={25} onClick={() => navigate(-1)} />
                <h6>{edit ? "Edit" : ""} Profile</h6>
              </div>
              <div className="employeeprofile4" onClick={edittoggle}>
                <h6>Edit</h6>
                <RiEdit2Fill color="#ffffff" size={20} />
              </div>
            </div>
          </div>
          <div className="employeeprofile5">
            <div className="employeeprofile10">
              <div className="employeeprofile6">
                <img src={img} alt="" />
              </div>
              <div className="employeeprofile9">
                <FaCheck color="#FFFFFF" />
              </div>
            </div>
            <div className="employeeprofile7">
              <div className="employeeprofile8">
                <label htmlFor="">Rank Designation</label>
                <select name="" id="">
                  <option value="">SG</option>
                </select>
              </div>
              <div className="employeeprofile8">
                <label htmlFor="">Maped Site</label>
                <select name="" id="">
                  <option value="">Option 1</option>
                </select>
              </div>
              <div className="employeeprofile8">
                <label htmlFor="">Bank Account No.</label>
                <input type="text" placeholder="1111 1111 1111 1111" />
              </div>
            </div>
          </div>
        </div>

        <div className="employeeprofile11">
          {inputFields.map((field, index) => (
            <div className="employeeprofile12" key={index}>
              <label htmlFor={field.label.toLowerCase()}>{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                id={field.label.toLowerCase()}
              />
            </div>
          ))}
        </div>

        <div className="employeeprofile13">
          <button>Save</button>
        </div>
      </div>

    </>
  );
};

export default EmpProfile;
