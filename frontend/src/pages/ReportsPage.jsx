// import React from "react";

// const ReportsPage = () => {
//   const reports = [
//     { id: 1, name: "Monthly Sales Report", date: "2023-04-30" },
//     { id: 2, name: "Inventory Status", date: "2023-05-01" },
//   ];

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Reports</h1>
//       <ul className="bg-white shadow-md rounded-lg overflow-hidden">
//         {reports.map((report) => (
//           <li
//             key={report.id}
//             className="border-b border-gray-200 last:border-b-0"
//           >
//             <a href="#" className="block p-4 hover:bg-gray-50">
//               <div className="flex justify-between items-center">
//                 <span className="font-semibold text-red-700">
//                   {report.name}
//                 </span>
//                 <span className="text-sm text-gray-500">{report.date}</span>
//               </div>
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ReportsPage;
// /////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const ReportsPage = () => {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReports = async () => {
//       try {
//         const response = await axios.get("/api/reports");
//         setReports(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError("Failed to fetch reports");
//         setLoading(false);
//       }
//     };

//     fetchReports();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Reports</h1>
//       <ul className="bg-white shadow-md rounded-lg overflow-hidden">
//         {reports.length === 0 ? (
//           <li className="p-4 text-center">No reports available</li>
//         ) : (
//           reports.map((report) => (
//             <li
//               key={report._id}
//               className="border-b border-gray-200 last:border-b-0"
//             >
//               <a href="#" className="block p-4 hover:bg-gray-50">
//                 <div className="flex justify-between items-center">
//                   <div>
//                     <div className="font-semibold text-red-700">
//                       {report.reason}
//                     </div>
//                     <div className="text-sm text-gray-500">
//                       <p>
//                         Reporter:{" "}
//                         {report.reporterId ? report.reporterId.name : "Unknown"}
//                       </p>
//                       <p>Dish: {report.dishId ? report.dishId.title : "N/A"}</p>
//                       <p>
//                         Recipe: {report.recipeId ? report.recipeId.name : "N/A"}
//                       </p>
//                       <p>
//                         Comment:{" "}
//                         {report.commentId ? report.commentId.content : "N/A"}
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-sm text-gray-500">
//                     {new Date(report.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </a>
//             </li>
//           ))
//         )}
//       </ul>
//     </div>
//   );
// };

// export default ReportsPage;
/////
import React, { useState, useEffect } from "react";
import axios from "axios";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get("/api/reports");
        setReports(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch reports");
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Reports</h1>
      <ul className="bg-white shadow-md rounded-lg overflow-hidden">
        {reports.length === 0 ? (
          <li className="p-4 text-center">No reports available</li>
        ) : (
          reports.map((report) => (
            <li
              key={report._id}
              className="border-b border-gray-200 last:border-b-0"
            >
              <a href="#" className="block p-4 hover:bg-gray-50">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-red-700">
                      {report.reason}
                    </div>
                    <div className="text-sm text-gray-500">
                      <p>
                        Reporter:{" "}
                        {report.reporterId
                          ? report.reporterId.username
                          : "Unknown"}
                      </p>
                      <p>Dish: {report.dishId ? report.dishId.title : "N/A"}</p>
                      <p>
                        Recipe: {report.recipeId ? report.recipeId.name : "N/A"}
                      </p>
                      <p>
                        Comment:{" "}
                        {report.commentId ? report.commentId.content : "N/A"}
                      </p>
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {new Date(report.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ReportsPage;
