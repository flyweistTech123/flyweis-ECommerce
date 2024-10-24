import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const AddSite = () => {
    const navigate = useNavigate()


    // State for managing deployments
    const [deployments, setDeployments] = useState([{ role: '', total: '', shiftA: '', shiftB: '', shiftC: '', shiftD: '' }]);
    const [shifts, setShifts] = useState([
        { label: "Shift-A", start: "", end: "" },
        { label: "Shift-B", start: "", end: "" },
        { label: "Shift-C", start: "", end: "" },
    ]);

    // Function to add more shifts
    const handleAddShift = () => {
        const newShift = {
            label: `Shift-${String.fromCharCode(65 + shifts.length)}`, // Auto increment alphabet
            start: "",
            end: "",
        };
        setShifts([...shifts, newShift]);
    };

    // Function to update shift data
    const handleShiftChange = (index, field, value) => {
        const updatedShifts = shifts.map((shift, idx) =>
            idx === index ? { ...shift, [field]: value } : shift
        );
        setShifts(updatedShifts);
    };


    // Function to add more deployments
    const addDeployment = () => {
        setDeployments([...deployments, { role: '', total: '', shiftA: '', shiftB: '', shiftC: '', shiftD: '' }]);
    };


    const handleDeploymentChange = (index, event) => {
        const values = [...deployments];
        values[index][event.target.name] = event.target.value;
        setDeployments(values);
    };

    return (
        <div>
            <div className="flex items-center gap-[50px]">
                <img src="../Vector (68).png" alt="" className="w-[34px] h-fit cursor-pointer" onClick={() => navigate(-1)} />
                <div className="flex items-center gap-[20px] dashboard1">
                    <p className="font-bold text-[40px]">Add New Site</p>
                </div>
            </div>

            <div className="addsite">
                <div className="addsite1">
                    <p>New Site Details</p>
                </div>

                <div className="addsite2">
                    <div className="addsite3">
                        <div className="addsite4">
                            <label htmlFor="">Area Manager</label>
                            <select name="" id="">
                                <option value="">Option 1</option>
                            </select>
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Client Name</label>
                            <input type="text" placeholder="Hours" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Site Name and Address</label>
                            <input type="text" placeholder="Hours" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Site Code</label>
                            <input type="text" placeholder="Hours" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">City</label>
                            <input type="text" placeholder="Hours" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Start Date of Deployment</label>
                            <input type="date" placeholder="Hours" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">End Date of Deployment</label>
                            <input type="date" placeholder="Hours" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">State</label>
                            <input type="text" placeholder="Hours" />
                        </div>
                        <div className="addsite1">
                            <p>Security In-charge Details</p>
                            <p>Level -0</p>
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Samad" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Mobile Number</label>
                            <input type="text" placeholder="+91 1234567890" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Email-ID</label>
                            <input type="text" placeholder="abcd@gmail.com" />
                        </div>
                        <div className="addsite1">
                            <p>Level -1</p>
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Name</label>
                            <input type="text" placeholder="Samad" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Mobile Number</label>
                            <input type="text" placeholder="+91 1234567890" />
                        </div>
                        <div className="addsite4">
                            <label htmlFor="">Email-ID</label>
                            <input type="text" placeholder="abcd@gmail.com" />
                        </div>
                    </div>
                    <div className="addsite3">
                        <div className="addsite4">
                            <label htmlFor="">Field Manager</label>
                            <select name="" id="">
                                <option value="">Option 1</option>
                            </select>
                        </div>
                        <div className="addsite5">
                            <label htmlFor="">Site Type</label>
                            <select name="" id="">
                                <option value="">Sat/Sun (Off)</option>
                            </select>
                        </div>
                        {shifts.map((shift, index) => (
                            <div key={index} className="addsite4">
                                <label>{shift.label} (Start timing)</label>
                                <input
                                    type="time"
                                    value={shift.start}
                                    onChange={(e) =>
                                        handleShiftChange(index, "start", e.target.value)
                                    }
                                />

                                <label>{shift.label} (End timing)</label>
                                <input
                                    type="time"
                                    value={shift.end}
                                    onChange={(e) =>
                                        handleShiftChange(index, "end", e.target.value)
                                    }
                                />
                            </div>
                        ))}
                        <div className="addsite4">
                            <button onClick={handleAddShift}>Add More Shifts</button>
                        </div>
                        {deployments.map((deployment, index) => (
                            <div key={index}>
                                <div className="addsite4">
                                    <label htmlFor={`role-${index}`}>Select Role</label>
                                    <input
                                        type="text"
                                        name="role"
                                        value={deployment.role}
                                        onChange={e => handleDeploymentChange(index, e)}
                                        placeholder="SG"
                                    />
                                </div>
                                <div className="addsite4">
                                    <label htmlFor={`total-${index}`}>Total Deployment</label>
                                    <input
                                        type="number"
                                        name="total"
                                        value={deployment.total}
                                        onChange={e => handleDeploymentChange(index, e)}
                                        placeholder="10"
                                    />
                                </div>
                                <div className="addsite4">
                                    <label htmlFor={`shiftA-${index}`}>Shift-A</label>
                                    <input
                                        type="number"
                                        name="shiftA"
                                        value={deployment.shiftA}
                                        onChange={e => handleDeploymentChange(index, e)}
                                        placeholder="07"
                                    />
                                </div>
                                <div className="addsite4">
                                    <label htmlFor={`shiftA-${index}`}>Shift-B</label>
                                    <input
                                        type="number"
                                        name="shiftA"
                                        value={deployment.shiftA}
                                        onChange={e => handleDeploymentChange(index, e)}
                                        placeholder="07"
                                    />
                                </div>
                                {/* Shift B, C, D ... */}
                            </div>
                        ))}
                        <div className="addsite4">
                            <button onClick={addDeployment}>Add More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddSite;
