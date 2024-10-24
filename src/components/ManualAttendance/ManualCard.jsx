import React, { useRef, useState } from "react";
import ApprovalProfileCard from "../Approval/ApprovalProfileCard";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ManualCard = ({
  requestNumber,
  user,
  department,
  contact,
  location,
  requestDetails,
  onApprove,
  onReject,
  link
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tempDate, setTempDate] = useState(new Date())
  const [confirmedDate, setConfirmedDate] = useState("");
  const [isAttendance, setIsAttendance] = useState(false);



  // Function to handle date change
  const handleDateChange = (date) => {
    setTempDate(date); // Update temporary date
  };


  // Function to open the modal
  const openCalendar = () => {
    setIsOpen(true);
  };


  // Function to handle the "OK" button
  const handleConfirm = () => {
    setSelectedDate(tempDate); // Confirm the selected date
    setIsOpen(false); // Close the modal
    setConfirmedDate(tempDate.toDateString()); // Save the confirmed date for display
  };

  // Function to handle the "Cancel" button
  const handleCancel = () => {
    setIsOpen(false); // Close the modal without changing the date
  };

  // Function to close the modal when clicking outside
  const closeModal = () => {
    setIsOpen(false);
  };



  const options = [
    { value: "Select Site", label: "Select Site" },
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedHour, setSelectedHour] = useState(null);

  const hours = [8, 9, 10, 11, 12];
  return (
    <div className="flex flex-col md:flex-row bg-[#EFEFEF] border rounded-lg shadow-lg p-4 mb-4">
      {/* Left Section */}
      <ApprovalProfileCard
        requestNumber={requestNumber}
        user={user}
        department={department}
        contact={contact}
        location={location}
        link={link}
      />

      {/* Right Section */}
      <div className="flex-1 mt-4 md:mt-0">
        <div className="flex flex-col gap-4">
          <div className="flex justify-between mt-4">
            <div>
              <h2 className="manualattendance">
                Select Total Hours of Duty Today
              </h2>
              <div className="grid grid-cols-3 gap-4 mt-4">
                {hours.map((hour) => (
                  <div
                    key={hour}
                    className={`w-[80px] py-2 text-center font-bold rounded-lg cursor-pointer  manualattendance3 ${selectedHour === hour ? "bg-[#F02946] text-white" : "bg-white"
                      }`}
                    onClick={() => setSelectedHour(hour)}
                  >
                    {hour} Hrs
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6">
                <p className="manualattendance">Date</p>
                <img
                  src="../Vector (75).png"
                  alt="Select Date"
                  onClick={openCalendar}
                  className="h-fit cursor-pointer"
                />
              </div>

              {/* Modal for the Calendar */}
              {isOpen && (
                <>
                  {/* Background overlay */}
                  <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeModal}
                  ></div>

                  {/* Calendar positioned in the center */}
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="shadow-lg manualattendance5">
                      <div className="manualattendance6">
                        <div className="manualattendance7">
                          <span>DATE</span>
                        </div>
                        {/* Dynamic year and selected date */}
                        <p>{tempDate.getFullYear()}</p>
                        <h6>{tempDate.toDateString()}</h6>
                      </div>

                      <Calendar
                        onChange={handleDateChange} // Update temporary date
                        value={tempDate} // Currently selected date in the calendar
                      />

                      <div className="manualattendance8">
                        <button onClick={handleConfirm}>OK</button> {/* Confirm date */}
                        <button onClick={handleCancel}>Cancel</button> {/* Cancel selection */}
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Display the confirmed date */}
              {confirmedDate && (
                <p className="manualattendance mt-4">{confirmedDate}</p>
              )}
            </div>
            <button
              onClick={() => {
                setIsAttendance(!isAttendance)
              }}
              className={isAttendance ? "bg-[#94FF91] w-[120px] px-4  h-fit  py-2 rounded-2xl manualattendance1" : "bg-[#BDBDBD] w-[120px] px-4  h-fit  py-2 rounded-2xl manualattendance2"}
            >
              {isAttendance ? "Manual Attendance" : "Add Manual Attendance"}
            </button>
          </div>
          <div className="flex gap-5  mt-4">
            <div className="manualattendance4">
              <p className="manualattendance">Site</p>

              <select name="" id="">
                {options.map((month, index) => (
                  <option key={index} value={month}>
                    {month.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className="manualattendance">Check In Time</p>
              <input
                type="text"
                placeholder="Hours-Minutes-Seconds"
                className="shadow px-4 py-2 w-[200px] rounded-md"
              />
            </div>
            <div>
              <p className="manualattendance">Check Out Time</p>
              <input
                type="text"
                placeholder="Hours-Minutes-Seconds"
                className="shadow px-4 py-2 w-[200px] rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Approve / Reject Buttons */}
      </div>
    </div>
  );
};

export default ManualCard;
