import React from "react";
import VisitTable from "../common/VisitTable";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const TotalAssignedSite = () => {
  const columns = [
    { Header: "Site Code", accessor: "SiteCode" },
    { Header: "Site Name", accessor: "siteName" },
    { Header: "State", accessor: "state" },
    { Header: "City", accessor: "city" },
    { Header: "Pin Code", accessor: "pincode" },
    { Header: "Total Deplyment", accessor: "totaldeplyment" },
  ];

  const data = [
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",

    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },
    {
      SiteCode: "#125486",
      siteName: "Lorem Ipsum",
      city: "Lorem",
      state: "Lorem Ipsum",
      pincode: "700001",
      totaldeplyment: "10",
    },

  ];



  const navigate = useNavigate()

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div className="px-4 dashboard1 flex items-center gap-3">
          <FaArrowLeft color="#000000" size={30} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} />
          <p className="font-bold text-[40px]">Total Assigned Site</p>
        </div>
        <div className='flex items-center gap-4 '>
          <div className="notificationpush">
            <label htmlFor="">Sort By</label>
            <select name="" id="" style={{ width: '127px' }}>
              <option value="">Site Name</option>
              <option value="">Site Id</option>
              <option value="">City</option>
              <option value="">State</option>
              <option value="">Pin Code</option>
            </select>
          </div>
          <div className="mt-4">  <img src="../Vector (66).png" alt="Download" className="" style={{ width: "25px", cursor: 'pointer' }} /></div>
        </div>
      </div>


      <VisitTable columns={columns} data={data} />

    </div>
  );
};

export default TotalAssignedSite;
