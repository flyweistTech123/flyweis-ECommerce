import React from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const DownloadReport = () => {
  const navigate = useNavigate('')
  const monthOptions = [
    { label: "Employee Wise", value: "Employee Wise" },
    { label: "Option 2", value: "Option 2" },
    { label: "Option 3", value: "Option 3" },
  ];
  const month = [
    { label: "Option 1", value: "Option 1" },
    { label: "Option 2", value: "Option 2" },
    { label: "Option 3", value: "Option 3" },
  ];
  const typeOptions = [
    { label: "Day Wise", value: "Day Wise" },
    { label: "Month Wise", value: "Month Wise" },
    { label: "From To", value: "From To" },
  ];
  return (
    <div>
      <div className="flex items-center gap-[20px] mb-4">
        <img
          src="../Vector (68).png"
          alt=""
          className="w-[34px] h-fit cursor-pointer"
          onClick={() => navigate('/report')}
        />
        <div>
          <p className="font-bold text-[40px]">Download Employee Report</p>
        </div>
      </div>
      <div className="border border-1 border-[#F02946] p-4 rounded-[20px]">
        <p className="text-[#F02946] font-bold text-end">Export To Excel</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex gap-4 items-center">
            <p className="font-bold">Type</p>
            <Select
              className="basic-single w-[200px]"
              classNamePrefix="select"
              defaultValue={typeOptions[0]}
              name="month"
              options={typeOptions}
            />
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-bold">Option</p>
            <Select
              className="basic-single w-[200px]"
              classNamePrefix="select"
              defaultValue={monthOptions[0]}
              name="month"
              options={monthOptions}
            />
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-bold">Emp Id/Name</p>
            <Select
              className="basic-single w-[200px]"
              classNamePrefix="select"
              defaultValue={month[0]}
              name="month"
              options={month}
            />
          </div>
          <div className="flex gap-4 items-center">
            <p className="font-bold">Month</p>
            <Select
              className="basic-single w-[200px]"
              classNamePrefix="select"
              defaultValue={month[0]}
              name="month"
              options={month}
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button className="bg-[#F02946] text-white px-4 py-2 rounded-xl">PDF</button>
          <button className="bg-[#F02946] text-white px-4 py-2 rounded-xl">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadReport;
