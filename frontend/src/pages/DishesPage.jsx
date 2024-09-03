// // // import React, { useState } from "react";

// // // const DishesPage = () => {
// // //   const [dishes, setDishes] = useState([
// // //     { id: 1, name: "Lasagna", price: 12.99, category: "Main Course" },
// // //     { id: 2, name: "Tiramisu", price: 6.99, category: "Dessert" },
// // //   ]);

// // //   return (
// // //     <div className="p-6 max-w-4xl mx-auto">
// // //       <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Dishes</h1>
// // //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// // //         <thead className="bg-red-800 text-white">
// // //           <tr>
// // //             <th className="p-3 text-left">Name</th>
// // //             <th className="p-3 text-left">Price</th>
// // //             <th className="p-3 text-left">Category</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {dishes.map((dish) => (
// // //             <tr
// // //               key={dish.id}
// // //               className="border-b border-gray-200 hover:bg-gray-100"
// // //             >
// // //               <td className="p-3">{dish.name}</td>
// // //               <td className="p-3">${dish.price.toFixed(2)}</td>
// // //               <td className="p-3">{dish.category}</td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // };

// // // export default DishesPage;
// // //////////////
// // import React, { useState, useEffect } from "react";
// // import API from "../api";

// // const DishesPage = () => {
// //   const [dishes, setDishes] = useState([]);

// //   useEffect(() => {
// //     const fetchDishes = async () => {
// //       try {
// //         const { data } = await API.get("/dishes");
// //         setDishes(data);
// //       } catch (error) {
// //         console.error("Error fetching dishes:", error);
// //       }
// //     };

// //     fetchDishes();
// //   }, []);

// //   const handleApproval = async (dishId, currentStatus) => {
// //     try {
// //       await API.put(`/dishes/${dishId}`, { isApproved: !currentStatus });
// //       setDishes((prevDishes) =>
// //         prevDishes.map((dish) =>
// //           dish._id === dishId ? { ...dish, isApproved: !currentStatus } : dish
// //         )
// //       );
// //     } catch (error) {
// //       console.error("Error updating dish approval status:", error);
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h1 className="text-3xl font-bold text-red-800 mb-4">Dishes</h1>
// //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// //         <thead className="bg-red-800 text-white">
// //           <tr>
// //             <th className="p-3 text-left">Image</th>
// //             <th className="p-3 text-left">Name</th>
// //             <th className="p-3 text-left">Price</th>
// //             <th className="p-3 text-left">Category</th>
// //             <th className="p-3 text-left">Status</th> {/* عمود الحالة */}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {dishes.length === 0 ? (
// //             <tr>
// //               <td colSpan="5" className="p-3 text-center text-gray-500">
// //                 No dishes available.
// //               </td>
// //             </tr>
// //           ) : (
// //             dishes.map((dish) => (
// //               <tr
// //                 key={dish._id}
// //                 className="border-b border-gray-200 hover:bg-gray-100"
// //               >
// //                 <td className="p-3">
// //                   <img
// //                     src={dish.imageUrl || "/default-image.jpg"}
// //                     alt={dish.title}
// //                     className="w-16 h-16 object-cover rounded"
// //                   />
// //                 </td>
// //                 <td className="p-3">{dish.title}</td>
// //                 <td className="p-3">
// //                   ${dish.price ? dish.price.toFixed(2) : "N/A"}
// //                 </td>
// //                 <td className="p-3">{dish.category}</td>
// //                 <td className="p-3">
// //                   <button
// //                     onClick={() => handleApproval(dish._id, dish.isApproved)}
// //                     className={`px-4 py-2 rounded-lg ${
// //                       dish.isApproved
// //                         ? "bg-red-500 text-white"
// //                         : "bg-green-500 text-white"
// //                     }`}
// //                   >
// //                     {dish.isApproved ? "Disapprove" : "Approve"}
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default DishesPage;
// // //////////////////////
// // // src/pages/DishesPage.jsx
// // import React, { useState, useEffect } from "react";
// // import API from "../api";

// // const DishesPage = () => {
// //   const [dishes, setDishes] = useState([]);

// //   useEffect(() => {
// //     const fetchDishes = async () => {
// //       try {
// //         const { data } = await API.get("/dishes");
// //         setDishes(data);
// //       } catch (error) {
// //         console.error("Error fetching dishes:", error);
// //       }
// //     };

// //     fetchDishes();
// //   }, []);

// //   const handleApproval = async (dishId, currentStatus) => {
// //     try {
// //       await API.put(`/dishes/${dishId}`, { isApproved: !currentStatus });
// //       setDishes((prevDishes) =>
// //         prevDishes.map((dish) =>
// //           dish._id === dishId ? { ...dish, isApproved: !currentStatus } : dish
// //         )
// //       );
// //     } catch (error) {
// //       console.error("Error updating dish approval status:", error);
// //     }
// //   };

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h1 className="text-3xl font-bold text-red-800 mb-4">Dishes</h1>
// //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// //         <thead className="bg-red-800 text-white">
// //           <tr>
// //             <th className="p-3 text-left">Image</th>
// //             <th className="p-3 text-left">Name</th>
// //             <th className="p-3 text-left">Price</th>
// //             <th className="p-3 text-left">Category</th>
// //             <th className="p-3 text-left">Status</th> {/* عمود الحالة */}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {dishes.length === 0 ? (
// //             <tr>
// //               <td colSpan="5" className="p-3 text-center text-gray-500">
// //                 No dishes available.
// //               </td>
// //             </tr>
// //           ) : (
// //             dishes.map((dish) => (
// //               <tr
// //                 key={dish._id}
// //                 className="border-b border-gray-200 hover:bg-gray-100"
// //               >
// //                 <td className="p-3">
// //                   <img
// //                     src={dish.imageUrl || "/default-image.jpg"}
// //                     alt={dish.title}
// //                     className="w-16 h-16 object-cover rounded"
// //                   />
// //                 </td>
// //                 <td className="p-3">{dish.title}</td>
// //                 <td className="p-3">
// //                   $
// //                   {typeof dish.price === "number"
// //                     ? dish.price.toFixed(2)
// //                     : "N/A"}
// //                 </td>
// //                 <td className="p-3">{dish.category}</td>
// //                 <td className="p-3">
// //                   <button
// //                     onClick={() => handleApproval(dish._id, dish.isApproved)}
// //                     className={`px-4 py-2 rounded-lg ${
// //                       dish.isApproved
// //                         ? "bg-red-500 text-white"
// //                         : "bg-green-500 text-white"
// //                     }`}
// //                   >
// //                     {dish.isApproved ? "Disapprove" : "Approve"}
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))
// //           )}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default DishesPage;
// /////////
// // src/pages/DishesPage.jsx
// import React, { useState, useEffect } from "react";
// import API from "../api";

// const DishesPage = () => {
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     const fetchDishes = async () => {
//       try {
//         const { data } = await API.get("/dishes");
//         setDishes(data);
//       } catch (error) {
//         console.error("Error fetching dishes:", error);
//       }
//     };

//     fetchDishes();
//   }, []);

//   const handleApproval = async (dishId, currentStatus) => {
//     try {
//       // Update the dish approval status
//       const { data: updatedDish } = await API.put(`/dishes/${dishId}`, {
//         isApproved: !currentStatus,
//       });

//       // Update the local state with the updated dish
//       setDishes((prevDishes) =>
//         prevDishes.map((dish) => (dish._id === dishId ? updatedDish : dish))
//       );
//     } catch (error) {
//       console.error("Error updating dish approval status:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-red-800 mb-4">Dishes</h1>
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-red-800 text-white">
//           <tr>
//             <th className="p-3 text-left">Image</th>
//             <th className="p-3 text-left">Name</th>
//             <th className="p-3 text-left">Price</th>
//             <th className="p-3 text-left">Category</th>
//             <th className="p-3 text-left">Status</th> {/* عمود الحالة */}
//           </tr>
//         </thead>
//         <tbody>
//           {dishes.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="p-3 text-center text-gray-500">
//                 No dishes available.
//               </td>
//             </tr>
//           ) : (
//             dishes.map((dish) => (
//               <tr
//                 key={dish._id}
//                 className="border-b border-gray-200 hover:bg-gray-100"
//               >
//                 <td className="p-3">
//                   <img
//                     src={dish.imageUrl || "/default-image.jpg"}
//                     alt={dish.title}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                 </td>
//                 <td className="p-3">{dish.title}</td>
//                 <td className="p-3">
//                   $
//                   {typeof dish.price === "number"
//                     ? dish.price.toFixed(2)
//                     : "N/A"}
//                 </td>
//                 <td className="p-3">{dish.category}</td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => handleApproval(dish._id, dish.isApproved)}
//                     className={`px-4 py-2 rounded-lg ${
//                       dish.isApproved
//                         ? "bg-red-500 text-white"
//                         : "bg-green-500 text-white"
//                     }`}
//                   >
//                     {dish.isApproved ? "Disapprove" : "Approve"}
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

// export default DishesPage;
// /////okaaaaay down//////
// import React, { useState, useEffect } from "react";
// import API from "../api";

// const DishesPage = () => {
//   const [dishes, setDishes] = useState([]);

//   useEffect(() => {
//     const fetchDishes = async () => {
//       try {
//         const { data } = await API.get("/dishes");
//         setDishes(data);
//       } catch (error) {
//         console.error("Error fetching dishes:", error);
//       }
//     };
//     fetchDishes();
//   }, []);

//   const handleApproval = async (dishId) => {
//     try {
//       // Update the dish approval status
//       const { data: updatedDish } = await API.put(`/dishes/${dishId}`);
//       // Update the local state with the updated dish
//       setDishes((prevDishes) =>
//         prevDishes.map((dish) => (dish._id === dishId ? updatedDish : dish))
//       );
//     } catch (error) {
//       console.error("Error updating dish approval status:", error);
//     }
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-red-800 mb-4">Dishes</h1>
//       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
//         <thead className="bg-red-800 text-white">
//           <tr>
//             <th className="p-3 text-left">Image</th>
//             <th className="p-3 text-left">Name</th>
//             <th className="p-3 text-left">Price</th>
//             <th className="p-3 text-left">Category</th>
//             <th className="p-3 text-left">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {dishes.length === 0 ? (
//             <tr>
//               <td colSpan="5" className="p-3 text-center text-gray-500">
//                 No dishes available.
//               </td>
//             </tr>
//           ) : (
//             dishes.map((dish) => (
//               <tr
//                 key={dish._id}
//                 className="border-b border-gray-200 hover:bg-gray-100"
//               >
//                 <td className="p-3">
//                   <img
//                     src={dish.imageUrl || "/default-image.jpg"}
//                     alt={dish.title}
//                     className="w-16 h-16 object-cover rounded"
//                   />
//                 </td>
//                 <td className="p-3">{dish.title}</td>
//                 <td className="p-3">
//                   $
//                   {typeof dish.price === "number"
//                     ? dish.price.toFixed(2)
//                     : "N/A"}
//                 </td>
//                 <td className="p-3">{dish.category}</td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => handleApproval(dish._id)}
//                     className={`px-4 py-2 rounded-lg ${
//                       dish.approved
//                         ? "bg-red-500 text-white"
//                         : "bg-green-500 text-white"
//                     }`}
//                   >
//                     {dish.approved ? "Disapprove" : "Approve"}
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

// export default DishesPage;
////////okaaaay uppp////////////
import React, { useState, useEffect } from "react";
import API from "../api";
import { motion } from "framer-motion";

const DishesPage = () => {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const { data } = await API.get("/dishes");
        setDishes(data);
      } catch (error) {
        console.error("Error fetching dishes:", error);
      }
    };
    fetchDishes();
  }, []);

  const handleApproval = async (dishId) => {
    try {
      const { data: updatedDish } = await API.put(`/dishes/${dishId}`);
      setDishes((prevDishes) =>
        prevDishes.map((dish) => (dish._id === dishId ? updatedDish : dish))
      );
    } catch (error) {
      console.error("Error updating dish approval status:", error);
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto bg-gray-100">
      <h1 className="text-4xl font-bold text-red-800 mb-8 text-center italic">
        All Dishes
      </h1>
      {dishes.length === 0 ? (
        <p className="text-center text-gray-500">Nessun piatto disponibile.</p>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={dish.imageUrl || "/default-italian-dish.jpg"}
                alt={dish.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {dish.title}
                </h2>
                <p className="text-gray-600 mb-2">Category: {dish.category}</p>
                <p className="text-lg font-bold text-red-700 mb-4">
                  €
                  {typeof dish.price === "number"
                    ? dish.price.toFixed(2)
                    : "N/A"}
                </p>
                <button
                  onClick={() => handleApproval(dish._id)}
                  className={`w-full py-2 rounded-lg transition-colors duration-300 ${
                    dish.approved
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-green-500 hover:bg-green-600 text-white"
                  }`}
                >
                  {dish.approved ? "Disapprove" : "Approve"}
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default DishesPage;
