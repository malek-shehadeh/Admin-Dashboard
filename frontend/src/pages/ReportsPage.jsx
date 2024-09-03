import React from "react";

const ReportsPage = () => {
  const reports = [
    { id: 1, name: "Monthly Sales Report", date: "2023-04-30" },
    { id: 2, name: "Inventory Status", date: "2023-05-01" },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Reports</h1>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {reports.map((report) => (
          <li
            key={report.id}
            className="border-b border-gray-200 last:border-b-0"
          >
            <a href="#" className="block p-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-red-700">
                  {report.name}
                </span>
                <span className="text-sm text-gray-500">{report.date}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportsPage;
