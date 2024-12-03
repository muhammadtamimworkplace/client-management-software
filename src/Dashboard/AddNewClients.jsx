import React, { useState } from 'react';

const AddNewClients = () => {
    const [formData, setFormData] = useState({
        ID: "",
        Name: "",
        Father: "",
        Mother: "",
        SSC_Batch: "",
        SSC_Completed_School_Name: "",
        HSC_Batch: "",
        College_Name: "",
        Subject: "",
        Area_Name: "",
        Service: "",
        Service_Field: "",
        Has_Business: false,
        Business_Address: "",
        Date_of_Birth: "",
        NID: "",
        Birth_Certificate: "",
        Interested: "",
        Phone: "",
        Email: "",
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);

        fetch('http://localhost:5000/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Inform the server about the content type
            },
            body: JSON.stringify(formData), // Convert formData to a JSON string
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json();
            })
            .then(data => {
                console.log(data); // Handle response data here

                // Reset the form state after submission
                setFormData({
                    ID: "",
                    Name: "",
                    Father: "",
                    Mother: "",
                    SSC_Batch: "",
                    SSC_Completed_School_Name: "",
                    HSC_Batch: "",
                    College_Name: "",
                    Subject: "",
                    Area_Name: "",
                    Service: "",
                    Service_Field: "",
                    Has_Business: false,
                    Business_Address: "",
                    Date_of_Birth: "",
                    NID: "",
                    Birth_Certificate: "",
                    Interested: "",
                    Phone: "",
                    Email: "",
                });
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error); // Error handling
            });
    };

    return (
        <div className="max-w-4xl mx-auto py-6 ">
            <h2 className="text-3xl font-bold text-center mb-6">Submit Your Information</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* ID */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">ID</span>
                    </label>
                    <input
                        type="text"
                        name="ID"
                        value={formData.ID}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter ID"
                    />
                </div>

                {/* Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Name"
                    />
                </div>

                {/* Father Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Father's Name</span>
                    </label>
                    <input
                        type="text"
                        name="Father"
                        value={formData.Father}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Father's Name"
                    />
                </div>

                {/* Mother Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Mother's Name</span>
                    </label>
                    <input
                        type="text"
                        name="Mother"
                        value={formData.Mother}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Mother's Name"
                    />
                </div>

                {/* SSC Batch */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">SSC Batch</span>
                    </label>
                    <input
                        type="text"
                        name="SSC_Batch"
                        value={formData.SSC_Batch}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter SSC Batch"
                    />
                </div>

                {/* SSC Completed School Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">SSC Completed School Name</span>
                    </label>
                    <input
                        type="text"
                        name="SSC_Completed_School_Name"
                        value={formData.SSC_Completed_School_Name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter School Name"
                    />
                </div>

                {/* HSC Batch */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">HSC Batch</span>
                    </label>
                    <input
                        type="text"
                        name="HSC_Batch"
                        value={formData.HSC_Batch}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter HSC Batch"
                    />
                </div>

                {/* College Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">College Name</span>
                    </label>
                    <input
                        type="text"
                        name="College_Name"
                        value={formData.College_Name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter College Name"
                    />
                </div>

                {/* Subject */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Subject</span>
                    </label>
                    <input
                        type="text"
                        name="Subject"
                        value={formData.Subject}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Subject"
                    />
                </div>

                {/* Area Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Area Name</span>
                    </label>
                    <input
                        type="text"
                        name="Area_Name"
                        value={formData.Area_Name}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Area Name"
                    />
                </div>

                {/* Service */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service</span>
                    </label>
                    <input
                        type="text"
                        name="Service"
                        value={formData.Service}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Service"
                    />
                </div>

                {/* Service Field */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Field</span>
                    </label>
                    <input
                        type="text"
                        name="Service_Field"
                        value={formData.Service_Field}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Service Field"
                    />
                </div>
                {/* Bussiness Has */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Bussiness Field</span>
                    </label>
                    <input
                        type="text"
                        name="Has_Business"
                        value={formData.Has_Business}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Service Field"
                    />
                </div>


                {/* Business Address */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Business Address</span>
                    </label>
                    <input
                        type="text"
                        name="Business_Address"
                        value={formData.Business_Address}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Business Address"
                    />
                </div>

                {/* Date of Birth */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date of Birth</span>
                    </label>
                    <input
                        type="date"
                        name="Date_of_Birth"
                        value={formData.Date_of_Birth}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                    />
                </div>

                {/* NID */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">NID</span>
                    </label>
                    <input
                        type="text"
                        name="NID"
                        value={formData.NID}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter NID"
                    />
                </div>

                {/* Birth Certificate No. */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Birth Certificate No.</span>
                    </label>
                    <input
                        type="text"
                        name="Birth_Certificate"
                        value={formData.Birth_Certificate}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Birth Certificate No."
                    />
                </div>

                {/* Interested */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Interested In</span>
                    </label>
                    <input
                        type="text"
                        name="Interested"
                        value={formData.Interested}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Your Interests"
                    />
                </div>

                {/* Phone */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="text"
                        name="Phone"
                        value={formData.Phone}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Phone Number"
                    />
                </div>

                {/* Email */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        className="input input-bordered w-full"
                        placeholder="Enter Email Address"
                    />
                </div>

                {/* Submit Button */}
                <div className="form-control mt-4">
                    <button type="submit" className="btn btn-primary w-full">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddNewClients;
