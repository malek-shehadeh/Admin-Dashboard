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
// /////
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
//                         {report.reporterId
//                           ? report.reporterId.username
//                           : "Unknown"}
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
///////////////////////////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { AlertCircle, ChevronDown, ChevronUp } from "lucide-react";

const ReportsPage = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedReports, setExpandedReports] = useState({});

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

  const toggleReportExpansion = (reportId) => {
    setExpandedReports((prev) => ({
      ...prev,
      [reportId]: !prev[reportId],
    }));
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <motion.div
          className="h-16 w-16 border-t-4 border-red-800 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );

  if (error)
    return (
      <div
        className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-4"
        role="alert"
      >
        <div className="flex">
          <AlertCircle className="h-6 w-6 mr-2" />
          <div>
            <p className="font-bold">Error</p>
            <p>{error}</p>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-red-800 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Manage Reports
        </motion.h1>
        {reports.length === 0 ? (
          <div className="bg-white shadow rounded-lg p-6 text-center text-gray-500">
            No reports available
          </div>
        ) : (
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {reports.map((report) => (
              <motion.div
                key={report._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-red-700 mb-2">
                    {report.reason}
                  </h3>
                  <button
                    onClick={() => toggleReportExpansion(report._id)}
                    className="flex items-center justify-between w-full text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                  >
                    <span>View Details</span>
                    {expandedReports[report._id] ? (
                      <ChevronUp className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {expandedReports[report._id] && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 space-y-2 text-sm text-gray-600"
                    >
                      <p>
                        <strong>Reporter:</strong>{" "}
                        {report.reporterId
                          ? report.reporterId.username
                          : "Unknown"}
                      </p>
                      <p>
                        <strong>Dish:</strong>{" "}
                        {report.dishId ? report.dishId.title : "N/A"}
                      </p>
                      <p>
                        <strong>Recipe:</strong>{" "}
                        {report.recipeId ? report.recipeId.name : "N/A"}
                      </p>
                      <p>
                        <strong>Comment:</strong>{" "}
                        {report.commentId ? report.commentId.content : "N/A"}
                      </p>
                    </motion.div>
                  )}
                </div>
                <div className="bg-gray-50 px-6 py-4 text-right text-sm text-gray-500">
                  {new Date(report.createdAt).toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ReportsPage;
