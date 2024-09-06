// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Orders = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:5000/api/order-info"
//         );
//         setOrders(response.data);
//       } catch (error) {
//         console.error("Error fetching order information:", error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Order Information</h1>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr className="bg-gray-100">
//             <th className="py-2 px-4 border-b">Order ID</th>
//             <th className="py-2 px-4 border-b">User Name</th>
//             <th className="py-2 px-4 border-b">Chef Name</th>
//             <th className="py-2 px-4 border-b">Total Amount</th>
//             <th className="py-2 px-4 border-b">Status</th>
//             <th className="py-2 px-4 border-b">Order Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.orderId}>
//               <td className="py-2 px-4 border-b">{order.orderId}</td>
//               <td className="py-2 px-4 border-b">{order.userName}</td>
//               <td className="py-2 px-4 border-b">{order.chefName}</td>
//               <td className="py-2 px-4 border-b">
//                 ${order.totalAmount.toFixed(2)}
//               </td>
//               <td className="py-2 px-4 border-b">{order.status}</td>
//               <td className="py-2 px-4 border-b">
//                 {new Date(order.orderDate).toLocaleString()}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Orders;
//////////////
import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/order-info"
        );
        setOrders(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching order information:", error);
        setIsLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const tableRowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="container mx-auto p-6 bg-gray-100 min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Order Management
      </h1>
      {isLoading ? (
        <motion.div
          className="flex justify-center items-center h-64"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-500"></div>
        </motion.div>
      ) : (
        <motion.div
          className="bg-white shadow-lg rounded-lg overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full">
            <thead>
              <tr className="bg-green-600 text-white">
                <th className="py-3 px-4 text-left">Order ID</th>
                <th className="py-3 px-4 text-left">User Name</th>
                <th className="py-3 px-4 text-left">Chef Name</th>
                <th className="py-3 px-4 text-left">Total Amount</th>
                <th className="py-3 px-4 text-left">Status</th>
                <th className="py-3 px-4 text-left">Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <motion.tr
                  key={order.orderId}
                  className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  variants={tableRowVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                >
                  <td className="py-3 px-4">{order.orderId}</td>
                  <td className="py-3 px-4">{order.userName}</td>
                  <td className="py-3 px-4">{order.chefName}</td>
                  <td className="py-3 px-4">${order.totalAmount.toFixed(2)}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded ${
                        order.status === "completed"
                          ? "bg-green-200 text-green-800"
                          : order.status === "pending"
                          ? "bg-yellow-200 text-yellow-800"
                          : order.status === "canceled"
                          ? "bg-red-200 text-red-800"
                          : "bg-blue-200 text-green-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {new Date(order.orderDate).toLocaleString()}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Orders;
