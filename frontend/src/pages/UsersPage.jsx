// // // // import React, { useState } from "react";

// // // // const UsersPage = () => {
// // // //   const [users, setUsers] = useState([
// // // //     { id: 1, name: "Giovanni Bianchi", role: "Admin", lastLogin: "2023-05-01" },
// // // //     { id: 2, name: "Francesca Neri", role: "Manager", lastLogin: "2023-04-30" },
// // // //   ]);

// // // //   return (
// // // //     <div className="p-6 max-w-4xl mx-auto">
// // // //       <h1 className="text-3xl font-bold text-red-800 mb-4">User Management</h1>
// // // //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// // // //         <thead className="bg-red-800 text-white">
// // // //           <tr>
// // // //             <th className="p-3 text-left">Name</th>
// // // //             <th className="p-3 text-left">Role</th>
// // // //             <th className="p-3 text-left">Last Login</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {users.map((user) => (
// // // //             <tr
// // // //               key={user.id}
// // // //               className="border-b border-gray-200 hover:bg-gray-100"
// // // //             >
// // // //               <td className="p-3">{user.name}</td>
// // // //               <td className="p-3">{user.role}</td>
// // // //               <td className="p-3">{user.lastLogin}</td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UsersPage;
// // // // ///////////////
// // // // // src/pages/UsersPage.jsx
// // // // import React, { useState, useEffect } from "react";
// // // // import axios from "axios";

// // // // const UsersPage = () => {
// // // //   const [users, setUsers] = useState([]);

// // // //   useEffect(() => {
// // // //     const fetchUsers = async () => {
// // // //       try {
// // // //         const { data } = await axios.get("/api/users");
// // // //         setUsers(Array.isArray(data) ? data : []); // Ensure data is an array
// // // //       } catch (error) {
// // // //         console.error("Error fetching users:", error);
// // // //       }
// // // //     };

// // // //     fetchUsers();
// // // //   }, []);

// // // //   const toggleStatus = async (id) => {
// // // //     try {
// // // //       const { data } = await axios.put(`/api/users/${id}/status`);
// // // //       setUsers(users.map((user) => (user._id === id ? data : user)));
// // // //     } catch (error) {
// // // //       console.error("Error updating user status:", error);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="p-6 max-w-4xl mx-auto">
// // // //       <h1 className="text-3xl font-bold text-red-800 mb-4">User Management</h1>
// // // //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// // // //         <thead className="bg-red-800 text-white">
// // // //           <tr>
// // // //             <th className="p-3 text-left">Name</th>
// // // //             <th className="p-3 text-left">Role</th>
// // // //             <th className="p-3 text-left">Last Login</th>
// // // //             <th className="p-3 text-left">Status</th>
// // // //             <th className="p-3 text-left">Action</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {Array.isArray(users) ? (
// // // //             users.map((user) => (
// // // //               <tr
// // // //                 key={user._id}
// // // //                 className="border-b border-gray-200 hover:bg-gray-100"
// // // //               >
// // // //                 <td className="p-3">{user.username}</td>
// // // //                 <td className="p-3">{user.role}</td>
// // // //                 <td className="p-3">{user.updatedAt.split("T")[0]}</td>
// // // //                 <td className="p-3">{user.isActive ? "Active" : "Inactive"}</td>
// // // //                 <td className="p-3">
// // // //                   <button
// // // //                     onClick={() => toggleStatus(user._id)}
// // // //                     className={`px-4 py-2 ${
// // // //                       user.isActive ? "bg-red-500" : "bg-green-500"
// // // //                     } text-white rounded-lg hover:bg-opacity-75 transition duration-200`}
// // // //                   >
// // // //                     {user.isActive ? "Deactivate" : "Activate"}
// // // //                   </button>
// // // //                 </td>
// // // //               </tr>
// // // //             ))
// // // //           ) : (
// // // //             <tr>
// // // //               <td colSpan="5" className="p-3 text-center">
// // // //                 No users found
// // // //               </td>
// // // //             </tr>
// // // //           )}
// // // //         </tbody>
// // // //       </table>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default UsersPage;
// // // //////////
// // // // src/pages/UsersPage.jsx
// // // import React, { useState, useEffect } from "react";
// // // import axios from "axios";

// // // const UsersPage = () => {
// // //   const [users, setUsers] = useState([]);

// // //   useEffect(() => {
// // //     const fetchUsers = async () => {
// // //       try {
// // //         const { data } = await axios.get("/api/users");
// // //         setUsers(Array.isArray(data) ? data : []); // Ensure data is an array
// // //       } catch (error) {
// // //         console.error("Error fetching users:", error);
// // //       }
// // //     };

// // //     fetchUsers();
// // //   }, []);

// // //   const toggleStatus = async (id) => {
// // //     try {
// // //       const { data } = await axios.put(`/api/users/${id}/status`);
// // //       setUsers(users.map((user) => (user._id === id ? data : user)));
// // //     } catch (error) {
// // //       console.error("Error updating user status:", error);
// // //     }
// // //   };

// // //   return (
// // //     <div className="p-6 max-w-4xl mx-auto">
// // //       <h1 className="text-3xl font-bold text-red-800 mb-4">User Management</h1>
// // //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// // //         <thead className="bg-red-800 text-white">
// // //           <tr>
// // //             <th className="p-3 text-left">Name</th>
// // //             <th className="p-3 text-left">Last Login</th>
// // //             <th className="p-3 text-left">Status</th>
// // //             <th className="p-3 text-left">Action</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {Array.isArray(users) && users.length > 0 ? (
// // //             users.map((user) => (
// // //               <tr
// // //                 key={user._id}
// // //                 className="border-b border-gray-200 hover:bg-gray-100"
// // //               >
// // //                 <td className="p-3">{user.username}</td>
// // //                 <td className="p-3">{user.updatedAt.split("T")[0]}</td>
// // //                 <td className="p-3">{user.isActive ? "Active" : "Inactive"}</td>
// // //                 <td className="p-3">
// // //                   <button
// // //                     onClick={() => toggleStatus(user._id)}
// // //                     className={`px-4 py-2 ${
// // //                       user.isActive ? "bg-red-500" : "bg-green-500"
// // //                     } text-white rounded-lg hover:bg-opacity-75 transition duration-200`}
// // //                   >
// // //                     {user.isActive ? "Deactivate" : "Activate"}
// // //                   </button>
// // //                 </td>
// // //               </tr>
// // //             ))
// // //           ) : (
// // //             <tr>
// // //               <td colSpan="5" className="p-3 text-center">
// // //                 No users found
// // //               </td>
// // //             </tr>
// // //           )}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default UsersPage;
// // /////////////////
// // // src/pages/UsersPage.jsx
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const UsersPage = () => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const { data } = await axios.get("/api/users");
// //         console.log("Fetched users:", data); // Add logging
// //         setUsers(Array.isArray(data) ? data : []); // Ensure data is an array
// //       } catch (error) {
// //         console.error("Error fetching users:", error); // Add error logging
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   const toggleStatus = async (id) => {
// //     try {
// //       const { data } = await axios.put(`/api/users/${id}/status`);
// //       setUsers(users.map((user) => (user._id === id ? data : user)));
// //     } catch (error) {
// //       console.error("Error updating user status:", error); // Add error logging
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h1 className="text-3xl font-bold text-red-800 mb-4">User Management</h1>
// //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// //         <thead className="bg-red-800 text-white">
// //           <tr>
// //             <th className="p-3 text-left">Name</th>
// //             <th className="p-3 text-left">Role</th>
// //             <th className="p-3 text-left">Last Login</th>
// //             <th className="p-3 text-left">Status</th>
// //             <th className="p-3 text-left">Action</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {Array.isArray(users) ? (
// //             users.map((user) => (
// //               <tr
// //                 key={user._id}
// //                 className="border-b border-gray-200 hover:bg-gray-100"
// //               >
// //                 <td className="p-3">{user.username}</td>
// //                 <td className="p-3">{user.role}</td>
// //                 <td className="p-3">{user.updatedAt.split("T")[0]}</td>
// //                 <td className="p-3">{user.isActive ? "Active" : "Inactive"}</td>
// //                 <td className="p-3">
// //                   <button
// //                     onClick={() => toggleStatus(user._id)}
// //                     className={`px-4 py-2 ${
// //                       user.isActive ? "bg-red-500" : "bg-green-500"
// //                     } text-white rounded-lg hover:bg-opacity-75 transition duration-200`}
// //                   >
// //                     {user.isActive ? "Deactivate" : "Activate"}
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="5" className="p-3 text-center">
// //                 No users found
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default UsersPage;
// //////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UsersPage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await axios.get("/api/users");
//         console.log("Fetched users:", data);
//         setUsers(Array.isArray(data) ? data : []);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const toggleStatus = async (id) => {
//     try {
//       const { data } = await axios.put(`/api/users/${id}/status`);
//       setUsers(users.map((user) => (user._id === id ? data : user)));
//     } catch (error) {
//       console.error("Error updating user status:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-red-800 mb-4">User Management</h1>
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-red-800 text-white">
//           <tr>
//             <th className="p-3 text-left">Username</th>
//             <th className="p-3 text-left">Email</th>
//             <th className="p-3 text-left">Status</th>
//             <th className="p-3 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.length === 0 ? (
//             <tr>
//               <td colSpan="4" className="p-3 text-center text-gray-500">
//                 No users available.
//               </td>
//             </tr>
//           ) : (
//             users.map((user) => (
//               <tr
//                 key={user._id}
//                 className="border-b border-gray-200 hover:bg-gray-100"
//               >
//                 <td className="p-3">{user.username}</td>
//                 <td className="p-3">{user.email}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                       user.isActive
//                         ? "bg-green-200 text-green-800"
//                         : "bg-red-200 text-red-800"
//                     }`}
//                   >
//                     {user.isActive ? "Active" : "Inactive"}
//                   </span>
//                 </td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => toggleStatus(user._id)}
//                     className={`px-4 py-2 rounded-lg ${
//                       user.isActive
//                         ? "bg-red-500 text-white"
//                         : "bg-green-500 text-white"
//                     } hover:opacity-80 transition duration-200`}
//                   >
//                     {user.isActive ? "Deactivate" : "Activate"}
//                   </button>
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UsersPage;
// ////////////////okaaaay down/////////////////
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UsersPage = () => {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setLoading(true);
//         const { data } = await axios.get("/api/users");
//         console.log("Fetched users:", data);
//         setUsers(Array.isArray(data) ? data : []);
//         setError(null);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//         setError("Failed to fetch users. Please try again later.");
//         setUsers([]);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUsers();
//   }, []);

//   const toggleStatus = async (id) => {
//     try {
//       const { data } = await axios.put(`/api/users/${id}/status`);
//       setUsers(users.map((user) => (user._id === id ? data : user)));
//     } catch (error) {
//       console.error("Error updating user status:", error);
//       alert("Failed to update user status. Please try again.");
//     }
//   };

//   if (loading) {
//     return <div className="p-6 text-center">Loading users...</div>;
//   }

//   if (error) {
//     return <div className="p-6 text-center text-red-500">{error}</div>;
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-red-800 mb-4">User Management</h1>
//       {users.length === 0 ? (
//         <p className="text-center text-gray-500">No users available.</p>
//       ) : (
//         <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-red-800 text-white">
//             <tr>
//               <th className="p-3 text-left">Username</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Status</th>
//               <th className="p-3 text-left">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr
//                 key={user._id}
//                 className="border-b border-gray-200 hover:bg-gray-100"
//               >
//                 <td className="p-3">{user.username}</td>
//                 <td className="p-3">{user.email}</td>
//                 <td className="p-3">
//                   <span
//                     className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                       user.isActive
//                         ? "bg-green-200 text-green-800"
//                         : "bg-red-200 text-red-800"
//                     }`}
//                   >
//                     {user.isActive ? "Active" : "Inactive"}
//                   </span>
//                 </td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => toggleStatus(user._id)}
//                     className={`px-4 py-2 rounded-lg ${
//                       user.isActive
//                         ? "bg-red-500 text-white"
//                         : "bg-green-500 text-white"
//                     } hover:opacity-80 transition duration-200`}
//                   >
//                     {user.isActive ? "Deactivate" : "Activate"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default UsersPage;
/////////////////okaaay uppp /////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaPizzaSlice, FaUser, FaEnvelope } from "react-icons/fa";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";

const api = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("/users");
        console.log("Fetched users:", data);
        setUsers(Array.isArray(data) ? data : []);
        setError(null);
      } catch (error) {
        console.error("Error fetching users:", error.response || error);
        setError("Failed to fetch users. Please try again later.");
        setUsers([]);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const toggleStatus = async (id) => {
    try {
      const { data } = await api.put(`/users/${id}/status`);
      setUsers(users.map((user) => (user._id === id ? data : user)));
    } catch (error) {
      console.error("Error updating user status:", error.response || error);
      alert("Failed to update user status. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <FaPizzaSlice className="text-6xl text-red-500" />
        </motion.div>
      </div>
    );
  }

  if (error) {
    return <div className="p-6 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto bg-red-50">
      <h1 className="text-4xl font-bold text-red-800 mb-8 text-center italic">
        Users
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {users.length === 0 ? (
          <p className="text-center text-gray-500">
            Nessun utente disponibile.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <motion.div
                key={user._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-red-700 text-white p-4">
                  <FaUser className="text-3xl mb-2" />
                  <h2 className="text-xl font-semibold">{user.username}</h2>
                </div>
                <div className="p-4">
                  <p className="flex items-center text-gray-600 mb-2">
                    <FaEnvelope className="mr-2" />
                    {user.email}
                  </p>
                  <div className="flex items-center justify-between mt-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        user.isActive
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {user.isActive ? "Active" : "Inactive"}
                    </span>
                    <button
                      onClick={() => toggleStatus(user._id)}
                      className={`px-4 py-2 rounded-lg ${
                        user.isActive
                          ? "bg-red-500 text-white"
                          : "bg-green-500 text-white"
                      } hover:opacity-80 transition duration-200 flex items-center`}
                    >
                      {user.isActive ? (
                        <>
                          <IoMdClose className="mr-1" /> Deactivate
                        </>
                      ) : (
                        <>
                          <IoMdCheckmark className="mr-1" /> Activate
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default UsersPage;
