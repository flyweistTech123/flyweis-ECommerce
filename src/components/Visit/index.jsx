import React from "react";
import Select from "react-select";
import './Visit.css'
import VisitTable from "../common/VisitTable";


const Visit = () => {
  const columns = [
    { Header: "Site Code", accessor: "SiteCode" },
    { Header: "Site Name", accessor: "siteName" },
    { Header: "City", accessor: "city" },
    { Header: "State", accessor: "state" },
    { Header: "Site Visited By", accessor: "SiteVisitedBy" },
    { Header: "Check In Timeing", accessor: "CheckinTimeing" },
    { Header: "Check Out Timeing", accessor: "CheckOutTimeing" },
  ];

  const data = [
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      SiteVisitedBy: "Brandon Vetrovs",
      CheckinTimeing: "03-05-2024 at 06:00am",
      CheckOutTimeing: "03-05-2024 at 06:00am",
      shortManDay: "03-05-2024 At 06:00am",

    },

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

  const report = [
    { label: "Client", value: "Client" },
    { label: "Site", value: "Site" },
    { label: "Employee", value: "Employee" },

  ];

  const yearOptions = Array.from(new Array(50), (val, index) => {
    const year = 2024 - index;
    return { label: year.toString(), value: year.toString() };
  });

  return (
    <div>
      <div className="flex justify-between px-4">
        <div className="px-4 dashboard1">
          <p className="font-bold text-[40px]">Visit site</p>
        </div>
        <div className="flex gap-4 items-center">
          <div className='visit1'>
            <label>Download Report</label>
            <select name="" id="">
              {report.map((month, index) => (
                <option key={index} value={month}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
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
          <div className="mt-4">  <img src="../Vector (66).png" alt="Download" className="" /></div>
        </div>
      </div>

      <VisitTable columns={columns} data={data} />

    </div>
  );
};

export default Visit;
