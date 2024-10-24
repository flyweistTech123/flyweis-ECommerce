import React, { useState } from "react";
import './PushNotification.css'
import { FiUpload } from "react-icons/fi";



import { MdCircle } from "react-icons/md";

import img from '../../Images/img11.png'
import img1 from '../../Images/img12.png'
import img2 from '../../Images/img13.png'
import img3 from '../../Images/img14.png'
import img4 from '../../Images/img15.png'




const PushNotification = () => {


    const users = [
        {
            name: 'Zaire Mango',
            email: 'ZaireMango@gmail.com',
            img: img
        },
        {
            name: 'Aspen Dias',
            email: 'AspenDias@gmail.com',
            img: img1
        },
        {
            name: 'Zaire Mango',
            email: 'ZaireMango@gmail.com',
            img: img2
        },
        {
            name: 'Aspen Dias',
            email: 'AspenDias@gmail.com',
            img: img3
        },
        {
            name: 'Zaire Mango',
            email: 'ZaireMango@gmail.com',
            img: img
        },
        {
            name: 'Aspen Dias',
            email: 'AspenDias@gmail.com',
            img: img4
        },
        {
            name: 'Zaire Mango',
            email: 'ZaireMango@gmail.com',
            img: img2
        },
        {
            name: 'Aspen Dias',
            email: 'AspenDias@gmail.com',
            img: img3
        },
    ];

    const [selectedHour, setSelectedHour] = useState(null);
    return (
        <>
            <div className="">
                <div className="flex  justify-between px-4">
                    <div className="px-4 dashboard1">
                        <p className="font-bold text-[40px]">Push Notification</p>
                    </div>
                    <div className="notificationpush">
                        <label htmlFor="">Sort By</label>
                        <select name="" id="">
                            <option value="">Employee Id/Nane</option>
                            <option value="">Site</option>
                        </select>
                    </div>
                    <div className="notificationpush">
                        <label htmlFor="">Select All</label>
                        <input type="checkbox" name="" id="" />
                    </div>
                </div>

                <div className="notificationpush1">
                    <div className="notificationpush2">
                        {users.map((user, index) => (
                            <div
                                className="notificationpush3"
                                key={index}
                                style={{
                                    background: selectedHour === index ? '#F02946' : 'white', // change background if selected
                                }}
                                onClick={() => setSelectedHour(index)}
                            >
                                <div className="notificationpush4">
                                    <div className="notificationpush5">
                                        <img src={user.img} alt={user.name} />
                                    </div>
                                    <div className="notificationpush6">
                                        <MdCircle color="#289900" />
                                    </div>
                                </div>
                                <div className="notificationpush7">
                                    <h6 style={{
                                        color: selectedHour === index ? 'white' : '#000000', // change background if selected
                                    }}>{user.name}</h6>
                                    <p style={{
                                        color: selectedHour === index ? 'white' : '#000000', // change background if selected
                                    }}>{user.email}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="notificationpush9">
                        <div className="notification-form">
                            <div className="notificationpush10">
                                <label htmlFor="">Title*</label>
                                <input type="text" placeholder="Notification" />
                            </div>
                            <div className="notificationpush10">
                                <label htmlFor="">Subject*</label>
                                <input type="text" placeholder="Subject....." />
                            </div>
                            <div className="notificationpush10">
                                <label htmlFor="">Message*</label>
                                <textarea name="" id="" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."></textarea>
                            </div>
                            <div className="notificationpush10">
                                <label htmlFor="">Attach Document*</label>
                                <div className="notificationpush11">
                                    <FiUpload color="#F02946" size={25} />
                                </div>
                            </div>
                        </div>
                        <div className="notificationpush12">
                            <button>Cancel</button>
                            <button>Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PushNotification;
