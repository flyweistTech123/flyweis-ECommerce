import React, { useEffect, useState } from "react";
import Table from "../common/Table";
import { fetchApiData } from "../../utiils";

import { BaseUrl, getAuthHeaders } from '../../components/BaseURl/BaseUrl'

const MonthlyDeposite = () => {

  const [deploy, setDeploy] = useState({})

  const getMonthlyDeployment = async () => {
    const data = await fetchApiData(`${BaseUrl}api/v1/admin/getMonthlyDeployment`, getAuthHeaders)
    setDeploy(data?.data)
  }

  useEffect(() => {
    getMonthlyDeployment()
  }, [])




  const columns = [
    { Header: "Site Id", accessor: "siteId" },
    { Header: "Site Name", accessor: "siteName" },
    { Header: "City", accessor: "city" },
    { Header: "State", accessor: "state" },
    // { Header: "Total Security Guards", accessor: "totalSecurityGuards" },
    // { Header: "Total Security Supervisors", accessor: "totalSecuritySupervisors" },
    // { Header: "Total Deployments", accessor: "totalDeployments" },
    { Header: "Present Count", accessor: "presentCount" },
  ];



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

  return (
    <div>
      <div className="flex justify-between px-4">
        <div className="px-4 dashboard1">
          <p className="font-bold text-[40px]">Monthly Deployment</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className='visit1'>
            <label>Year</label>
            <select name="" id="">
              {yearOptions.map((month, index) => (
                <option key={index} value={month}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
          <div className='visit1'>
            <label>Month</label>
            <select name="" id="">
              {monthOptions.map((month, index) => (
                <option key={index} value={month}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      {!!deploy?.length && <Table columns={columns} data={deploy} />}
    </div>
  );
};

export default MonthlyDeposite;
