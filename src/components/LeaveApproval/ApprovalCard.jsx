import React from 'react';
import ApprovalProfileCard from '../Approval/ApprovalProfileCard';


const ApprovalCard = ({ requestNumber, user, department, contact, location, requestDetails, onApprove, onReject, link }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow-lg p-4 mb-4">
      {/* Left Section */}
      <ApprovalProfileCard requestNumber={requestNumber} user={user} department={department} contact={contact} location={location} link={link} />

      {/* Right Section */}
      <div className="flex-1 mt-4 md:mt-0">
        <div className='flex gap-4'>
          <div className='bg-[#D9D9D9] flex-1 p-4 rounded-[10px]'>
            <div className='flex justify-between'>
              <h2 className="text-[32px] font-bold text-red-500">Leave Application</h2>
              <p className='text-[#F02946]'>Guard ID: #123654</p>
            </div>
            <div className='flex gap-4'>
              <p className='text-[20px] text-[#F02946] font-bold'>From: 18/06/2024</p>
              <p className='text-[20px] text-[#F02946] font-bold'>To: 28/06/2024</p>
            </div>
            <p className=" mt-2">{requestDetails}</p>

          </div>

          {/* Approve / Reject Buttons */}
          <div className="flex flex-col gap-4  mt-4">
            <button
              onClick={onApprove}
              className="bg-[#94FF91] w-[150px] text-[#008E17] font-bold py-2 rounded-full hover:bg-green-600"
            >
              Approve
            </button>
            <button
              onClick={onReject}
              className="bg-[#FF9191] w-[150px] text-[#720202] font-bold py-2 rounded-full hover:bg-red-600"
            >
              Reject
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
