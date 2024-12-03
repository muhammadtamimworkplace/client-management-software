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
                <h2 className="text-3xl" style={{ marginTop: "15px", marginBottom: "5px" }}>{loadedClient.Name || "N/A"}</h2>
                <p style={{ fontSize: "14px", marginBottom: "5px" }}>{loadedClient.Service || "N/A"}</p>
                <p style={{ fontSize: "12px" }}>{loadedClient.Area_Name || "N/A"}</p>
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
                    <strong>Mother:</strong> {loadedClient.Mother || "N/A"}
                </p>
                <p>
                    <strong>SSC Batch:</strong> {loadedClient.SSC_Batch || "N/A"}
                </p>
                <p>
                    <strong>SSC School:</strong> {loadedClient.SSC_Completed_School_Name || "N/A"}
                </p>
                <p>
                    <strong>HSC Batch:</strong> {loadedClient.HSC_Batch || "N/A"}
                </p>
                <p>
                    <strong>College Name:</strong> {loadedClient.College_Name || "N/A"}
                </p>
                <p>
                    <strong>Subject:</strong> {loadedClient.Subject || "N/A"}
                </p>
                <p>
                    <strong>Has Business:</strong> {loadedClient.Has_Business || "N/A"}
                </p>
                {loadedClient.Has_Business && (
                    <p>
                        <strong>Business Address:</strong> {loadedClient.Business_Address || "N/A"}
                    </p>
                )}
                <p>
                    <strong>Date of Birth:</strong> {loadedClient.Date_of_Birth || "N/A"}
                </p>
                <p>
                    <strong>NID:</strong> {loadedClient.NID || "N/A"}
                </p>
                <p>
                    <strong>Birth Certificate:</strong> {loadedClient.Birth_Certificate || "N/A"}
                </p>
                <p>
                    <strong>Interested In:</strong> {loadedClient.Interested || "N/A"}
                </p>
                <p>
                    <strong>Phone:</strong> {loadedClient.Phone || "N/A"}
                </p>
                <p>
                    <strong>Email:</strong> {loadedClient.Email || "N/A"}
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
