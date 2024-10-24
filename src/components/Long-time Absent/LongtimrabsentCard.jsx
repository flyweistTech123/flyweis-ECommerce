import React from 'react';
import ApprovalProfileCard from '../Approval/ApprovalProfileCard';
import './LongtimeAbsent.css'


const LongtimrabsentCard = ({ requestNumber, user, department, contact, location, requestDetails, onApprove, onReject }) => {
    return (
        <div className="flex flex-col md:flex-row bg-white border rounded-lg shadow-lg p-4 mb-4 items-center">
            {/* Left Section */}
            <ApprovalProfileCard requestNumber={requestNumber} user={user} department={department} contact={contact} location={location} />

            {/* Right Section */}
            <div className="flex-1 mt-4 md:mt-0">
                <div className='flex gap-5 items-center	'>
                    <div className="grid grid-cols-3 gap-5">
                        <div>
                            <p className="font-bold">Name</p>
                            <div className="shadow-lg p-4 w-[190px] rounded-lg">
                                Nolan Bergson
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Email</p>
                            <div className="shadow-lg p-4 w-[200px] rounded-lg">
                                Nolan Bergson
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Aadhar No.</p>
                            <div className="shadow-lg p-4 w-[200px] rounded-lg">
                                Nolan Bergson
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Father/Husband Name</p>
                            <div className="shadow-lg p-4 w-[190px] rounded-lg">
                                Nolan Bergson
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Mobile</p>
                            <div className="shadow-lg p-4 w-[190px] rounded-lg">
                                Nolan Bergson
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">Pan No.</p>
                            <div className="shadow-lg p-4 w-[190px] rounded-lg">
                                Nolan Bergson
                            </div>
                        </div>
                    </div>

                    {/* Approve / Reject Buttons */}
                    <div className="flex flex-col gap-4 mt-4 longtermabsent">
                        <button>Message</button>
                        <button>Disable</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LongtimrabsentCard;
