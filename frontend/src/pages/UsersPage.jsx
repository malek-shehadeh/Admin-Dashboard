// // import React, { useState } from "react";

// // const UsersPage = () => {
// //   const [users, setUsers] = useState([
// //     { id: 1, name: "Giovanni Bianchi", role: "Admin", lastLogin: "2023-05-01" },
// //     { id: 2, name: "Francesca Neri", role: "Manager", lastLogin: "2023-04-30" },
// //   ]);

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h1 className="text-3xl font-bold text-red-800 mb-4">User Management</h1>
// //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// //         <thead className="bg-red-800 text-white">
// //           <tr>
// //             <th className="p-3 text-left">Name</th>
// //             <th className="p-3 text-left">Role</th>
// //             <th className="p-3 text-left">Last Login</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {users.map((user) => (
// //             <tr
// //               key={user.id}
// //               className="border-b border-gray-200 hover:bg-gray-100"
// //             >
// //               <td className="p-3">{user.name}</td>
// //               <td className="p-3">{user.role}</td>
// //               <td className="p-3">{user.lastLogin}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default UsersPage;
// // ///////////////
// // // src/pages/UsersPage.jsx
// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // const UsersPage = () => {
// //   const [users, setUsers] = useState([]);

// //   useEffect(() => {
// //     const fetchUsers = async () => {
// //       try {
// //         const { data } = await axios.get("/api/users");
// //         setUsers(Array.isArray(data) ? data : []); // Ensure data is an array
// //       } catch (error) {
// //         console.error("Error fetching users:", error);
// //       }
// //     };

// //     fetchUsers();
// //   }, []);

// //   const toggleStatus = async (id) => {
// //     try {
// //       const { data } = await axios.put(`/api/users/${id}/status`);
// //       setUsers(users.map((user) => (user._id === id ? data : user)));
// //     } catch (error) {
// //       console.error("Error updating user status:", error);
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
// //////////
// // src/pages/UsersPage.jsx
// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UsersPage = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const { data } = await axios.get("/api/users");
//         setUsers(Array.isArray(data) ? data : []); // Ensure data is an array
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
//             <th className="p-3 text-left">Name</th>
//             <th className="p-3 text-left">Last Login</th>
//             <th className="p-3 text-left">Status</th>
//             <th className="p-3 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(users) && users.length > 0 ? (
//             users.map((user) => (
//               <tr
//                 key={user._id}
//                 className="border-b border-gray-200 hover:bg-gray-100"
//               >
//                 <td className="p-3">{user.username}</td>
//                 <td className="p-3">{user.updatedAt.split("T")[0]}</td>
//                 <td className="p-3">{user.isActive ? "Active" : "Inactive"}</td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => toggleStatus(user._id)}
//                     className={`px-4 py-2 ${
//                       user.isActive ? "bg-red-500" : "bg-green-500"
//                     } text-white rounded-lg hover:bg-opacity-75 transition duration-200`}
//                   >
//                     {user.isActive ? "Deactivate" : "Activate"}
//                   </button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" className="p-3 text-center">
//                 No users found
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default UsersPage;
/////////////////
// src/pages/UsersPage.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("/api/users");
        console.log("Fetched users:", data); // Add logging
        setUsers(Array.isArray(data) ? data : []); // Ensure data is an array
      } catch (error) {
        console.error("Error fetching users:", error); // Add error logging
      }
    };

    fetchUsers();
  }, []);

  const toggleStatus = async (id) => {
    try {
      const { data } = await axios.put(`/api/users/${id}/status`);
      setUsers(users.map((user) => (user._id === id ? data : user)));
    } catch (error) {
      console.error("Error updating user status:", error); // Add error logging
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-red-800 mb-4">User Management</h1>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-red-800 text-white">
          <tr>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Role</th>
            <th className="p-3 text-left">Last Login</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(users) ? (
            users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="p-3">{user.username}</td>
                <td className="p-3">{user.role}</td>
                <td className="p-3">{user.updatedAt.split("T")[0]}</td>
                <td className="p-3">{user.isActive ? "Active" : "Inactive"}</td>
                <td className="p-3">
                  <button
                    onClick={() => toggleStatus(user._id)}
                    className={`px-4 py-2 ${
                      user.isActive ? "bg-red-500" : "bg-green-500"
                    } text-white rounded-lg hover:bg-opacity-75 transition duration-200`}
                  >
                    {user.isActive ? "Deactivate" : "Activate"}
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="p-3 text-center">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
