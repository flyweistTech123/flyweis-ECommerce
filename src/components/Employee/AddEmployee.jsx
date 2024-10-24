import React from "react";
import { useNavigate } from "react-router-dom";

import Select from "react-select";

const AddEmployee = () => {
  const navigate = useNavigate();
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const RankOptions = [
    { value: "BRANCHHEAD", label: "BRANCH HEAD" },
    { value: "AREAMANAGER", label: "AREA MANAGER" },
    { value: "SECURITYSUPERVISOR", label: "SECURITY SUPERVISOR" },
    { value: "SECURITYGUARD", label: "SECURITY GUARD" },
    { value: "ADMIN", label: "ADMIN" },
  ];
  return (
    <div>
      <div className="bg-[#D9D9D9] h-[200px] w-full rounded-t-[20px]">
        <div className="flex items-center gap-[50px] px-4">
          <img
            src="../Vector (68).png"
            alt=""
            className="w-[34px] h-fit cursor-pointer"
            onClick={() => navigate("/employee")}
          />
          <div className="flex items-center gap-[20px]">
            <p className="font-bold text-[40px]">Add Employee</p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-[20px]">
          <img src="../Vector (73).png" alt="" />
        </div>
      </div>
      <div className="flex justify-between -mt-7 mx-4">
        <div className="w-[80px] h-[80px] bg-[#D9D9D9] flex justify-center items-center rounded-full border border-1 border-[#F02946] relative">
          <img src="../Vector (73).png" alt="" className="w-[30px] " />
          <div className="absolute -bottom-1 right-1">
            <img src="../Group 48096266.png" alt="" className="w-[20px]" />
          </div>
        </div>
        <div>
          <p className="font-bold pb-2">Rank Designation</p>
          <Select
            closeMenuOnSelect={false}
            className="w-[200px]"
            defaultValue={RankOptions[0]}
            options={RankOptions}
          />
        </div>
        <div>
          <p className="font-bold pb-2">Maped Site</p>
          <Select
            closeMenuOnSelect={false}
            className="w-[200px]"
            defaultValue={options[0]}
            isMulti
            options={options}
          />
        </div>
        <div>
          <p className="font-bold pb-2">Bank Account No.</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold pb-2">Name</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">Email</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">IFSC Code</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>

      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold pb-2">Pf No/ Employee ID</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">Mobile</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">Emergency Contact No.</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>

      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold pb-2">Father/Husband Name</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">Current Address</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">UAN No</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>

      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold pb-2">DOB</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">Aadhar No</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">Nominee Name</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>

      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold pb-2">DOJ</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">Pan No</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>
        <div>
          <p className="font-bold pb-2">Relation with Nominee</p>
          <input
            type="text"
            className="shadow px-4 py-2 w-[200px] rounded-md"
          />
        </div>

      </div>
      <div className="flex justify-end mt-6">
        <button onClick={() => navigate("/employee/recruitment")} className="w-[150px] rounded-2xl bg-[#F02946] text-white h-[30px]">Save</button>
      </div>
    </div>
  );
};

export default AddEmployee;
