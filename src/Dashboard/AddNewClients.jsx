import React, { useState } from "react";

const StylishForm = () => {
    const [formData, setFormData] = useState({
        ID: "9",
        Name: "Rima",
        Father: "Ali Akbar",
        Mother: "Amina Begum",
        SSC_Batch: "2020",
        SSC_Completed_School_Name: "Sunshine Academy, Chittagong",
        HSC_Batch: "2022",
        College_Name: "Chittagong University of Engineering and Technology",
        Subject: "Chemical Engineering",
        Area_Name: "Chittagong, Bangladesh",
        Service: "Process Engineer",
        Service_Field: "Chemical Industry",
        Date_of_Birth: "2001-06-20",
        Phone: "0176987450",
        Email: "rima.akbar@example.com",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="flex items-center my-5 py-5 justify-center min-h-screen bg-gray-100">
            <form
                className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-blue-500">
                    Profile Information
                </h2>

                {/* ID */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">ID</label>
                    <input
                        type="text"
                        name="ID"
                        value={formData.ID}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Name */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="Name"
                        value={formData.Name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Father's Name */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Father</label>
                    <input
                        type="text"
                        name="Father"
                        value={formData.Father}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Mother's Name */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Mother</label>
                    <input
                        type="text"
                        name="Mother"
                        value={formData.Mother}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* SSC Batch */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">SSC Batch</label>
                    <input
                        type="text"
                        name="SSC_Batch"
                        value={formData.SSC_Batch}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* College Name */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">College Name</label>
                    <input
                        type="text"
                        name="College_Name"
                        value={formData.College_Name}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Subject */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        name="Subject"
                        value={formData.Subject}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Phone</label>
                    <input
                        type="tel"
                        name="Phone"
                        value={formData.Phone}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Email */}
                <div className="mb-4">
                    <label className="block font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="Email"
                        value={formData.Email}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default StylishForm;
