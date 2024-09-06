import React, { useState, useEffect } from "react";
import axios from "axios";

const ChefRecruitmentPage = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get("/api/chefs");
        setApplications(response.data);
      } catch (err) {
        console.error("Failed to fetch chef applications", err);
      }
    };

    fetchApplications();
  }, []);

  const handleApproval = async (id) => {
    try {
      await axios.patch(`/api/chefs/${id}/approve`);
      setApplications(
        applications.map((app) =>
          app._id === id ? { ...app, isApproved: true } : app
        )
      );
    } catch (err) {
      console.error("Failed to approve chef", err);
    }
  };

  const handleDisapproval = async (id) => {
    try {
      await axios.patch(`/api/chefs/${id}/disapprove`);
      setApplications(
        applications.map((app) =>
          app._id === id ? { ...app, isApproved: false } : app
        )
      );
    } catch (err) {
      console.error("Failed to disapprove chef", err);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-4">
        Chef Recruitment Requests
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {applications.map((app) => (
          <div
            key={app._id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 border border-gray-200"
          >
            <img src={app.image} alt="" />
            <h2 className="text-xl font-bold mb-2">{app.username}</h2>
            <p className="text-gray-700">Email: {app.email}</p>
            <p className="text-gray-700">
              Approved: {app.isApproved ? "Yes" : "No"}
            </p>
            <div className="mt-4">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => handleApproval(app._id)}
              >
                Approve
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleDisapproval(app._id)}
              >
                Disapprove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefRecruitmentPage;
