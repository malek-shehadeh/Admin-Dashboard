import React, { useState } from "react";

const ChefRecruitmentPage = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      name: "Giuseppe Verdi",
      experience: "5 years",
      speciality: "Pasta",
    },
    {
      id: 2,
      name: "Maria Bianchi",
      experience: "8 years",
      speciality: "Desserts",
    },
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-4">
        Chef Recruitment Requests
      </h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Experience</th>
            <th className="p-3 text-left">Speciality</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr
              key={app.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="p-3">{app.name}</td>
              <td className="p-3">{app.experience}</td>
              <td className="p-3">{app.speciality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChefRecruitmentPage;
