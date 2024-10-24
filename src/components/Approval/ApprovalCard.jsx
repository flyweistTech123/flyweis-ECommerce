import React from 'react';
import ApprovalProfileCard from './ApprovalProfileCard';

const RequestCard = ({ requestNumber, user, department, contact, location, requestDetails, onApprove, onReject,link }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow-lg p-4 mb-4">
      {/* Left Section */}
      <ApprovalProfileCard requestNumber={requestNumber} user={user} department={department} contact={contact} location={location} link={link}/>

      {/* Right Section */}
      <div className="flex-1 mt-4 md:mt-0">
        <div className='flex gap-4'>
          <div className='bg-[#D9D9D9] flex-1 p-4 rounded-[10px]'>
            <h2 className="text-xl font-bold text-red-500">Request for regularization</h2>
            <p className="text-#000000-600 mt-2">{requestDetails}</p>
          </div>

          {/* Approve / Reject Buttons */}
          <div className="flex flex-col gap-4 mt-4">
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

export default RequestCard;
