import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DetailsCard = ({
    photoURL,
    ID,
    Name,
    Father,
    Mother,
    SSC_Batch,
    SSC_Completed_School_Name,
    HSC_Batch,
    College_Name,
    Subject,
    Area_Name,
    Service,
    Service_Field,
    Has_Business,
    Business_Address,
    Date_of_Birth,
    NID,
    Birth_Certificate,
    Interested,
    Phone,
    Email,
}) => {
    const loadedClient = useLoaderData();
    console.log(loadedClient);

    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "15px",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.1)",
                maxWidth: "500px",
                margin: "30px auto",
                fontFamily: "'Roboto', sans-serif",
                overflow: "hidden",
                backgroundColor: "#fff",
            }}
        >
            {/* Header with Profile Picture */}
            <div
                style={{
                    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
                    textAlign: "center",
                    padding: "20px",
                    color: "#fff",
                }}
            >
                <img
                    src={loadedClient.Picture_URL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                    alt="Profile"
                    style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "50%",
                        border: "5px solid #fff",
                        objectFit: "cover",
                    }}
                />
                <h2 style={{ marginTop: "15px", marginBottom: "5px" }}>{'Name || "N/A"'}</h2>
                <p style={{ fontSize: "14px", marginBottom: "5px" }}>{'Service || "N/A"'}</p>
                <p style={{ fontSize: "12px" }}>{'Area_Name || "N/A"'}</p>
            </div>

            {/* Details Section */}
            <div style={{ padding: "20px", color: "#333" }}>
                <p>
                    <strong>ID:</strong> {loadedClient.ID || "N/A"}
                </p>
                <p>
                    <strong>Father:</strong> {loadedClient.Father || "N/A"}
                </p>
                <p>
                    <strong>Mother:</strong> {Mother || "N/A"}
                </p>
                <p>
                    <strong>SSC Batch:</strong> {SSC_Batch || "N/A"}
                </p>
                <p>
                    <strong>SSC School:</strong> {SSC_Completed_School_Name || "N/A"}
                </p>
                <p>
                    <strong>HSC Batch:</strong> {HSC_Batch || "N/A"}
                </p>
                <p>
                    <strong>College Name:</strong> {College_Name || "N/A"}
                </p>
                <p>
                    <strong>Subject:</strong> {Subject || "N/A"}
                </p>
                <p>
                    <strong>Has Business:</strong> {Has_Business ? "Yes" : "No"}
                </p>
                {Has_Business && (
                    <p>
                        <strong>Business Address:</strong> {Business_Address || "N/A"}
                    </p>
                )}
                <p>
                    <strong>Date of Birth:</strong> {Date_of_Birth || "N/A"}
                </p>
                <p>
                    <strong>NID:</strong> {NID || "N/A"}
                </p>
                <p>
                    <strong>Birth Certificate:</strong> {Birth_Certificate || "N/A"}
                </p>
                <p>
                    <strong>Interested In:</strong> {Interested || "N/A"}
                </p>
                <p>
                    <strong>Phone:</strong> {Phone || "N/A"}
                </p>
                <p>
                    <strong>Email:</strong> {Email || "N/A"}
                </p>

                <Link to={'/'}>
                    <button style={{ position: "relative", top: "10px", left: "80%", }}
                        className="btn btn-sm bg-gray-700 hover:bg-gray-900"
                    >Go Back</button>
                </Link>
            </div>
        </div>
    );
};

export default DetailsCard;
