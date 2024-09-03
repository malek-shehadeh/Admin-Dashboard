// // import React, { useState } from "react";

// // const ContactsPage = () => {
// //   const [contacts, setContacts] = useState([
// //     {
// //       id: 1,
// //       name: "Mario Rossi",
// //       email: "mario@example.com",
// //       phone: "123-456-7890",
// //     },
// //     {
// //       id: 2,
// //       name: "Luigi Verdi",
// //       email: "luigi@example.com",
// //       phone: "098-765-4321",
// //     },
// //   ]);

// //   return (
// //     <div className="p-6 max-w-4xl mx-auto">
// //       <h1 className="text-3xl font-bold text-red-800 mb-4">Manage Contacts</h1>
// //       <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
// //         <thead className="bg-red-800 text-white">
// //           <tr>
// //             <th className="p-3 text-left">Name</th>
// //             <th className="p-3 text-left">Email</th>
// //             <th className="p-3 text-left">Phone</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {contacts.map((contact) => (
// //             <tr
// //               key={contact.id}
// //               className="border-b border-gray-200 hover:bg-gray-100"
// //             >
// //               <td className="p-3">{contact.name}</td>
// //               <td className="p-3">{contact.email}</td>
// //               <td className="p-3">{contact.phone}</td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // };

// // export default ContactsPage;
// ///////

// // import React, { useState, useEffect } from "react";
// // import API from "../api";
// // import Swal from "sweetalert2"; // استيراد SweetAlert2

// // // مكون الـ Modal
// // const Modal = ({ isOpen, onClose, onSend, contact }) => {
// //   const [response, setResponse] = useState("");

// //   const handleSend = () => {
// //     onSend(contact._id, response);
// //     setResponse("");
// //     onClose();
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
// //       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
// //         <h3 className="text-2xl font-semibold mb-4 text-gray-800">
// //           Respond to {contact.name}
// //         </h3>
// //         <textarea
// //           value={response}
// //           onChange={(e) => setResponse(e.target.value)}
// //           className="w-full p-3 border border-gray-300 rounded-lg mb-4"
// //           rows="4"
// //           placeholder="Type your response here..."
// //         />
// //         <div className="flex justify-end space-x-2">
// //           <button
// //             onClick={handleSend}
// //             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
// //           >
// //             Send
// //           </button>
// //           <button
// //             onClick={onClose}
// //             className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // function ContactsPage() {
// //   const [contacts, setContacts] = useState([]);
// //   const [selectedContact, setSelectedContact] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const rowsPerPage = 4;

// //   // جلب الشيفات من الخادم
// //   useEffect(() => {
// //     const fetchContacts = async () => {
// //       try {
// //         const { data } = await API.get("/contacts");
// //         setContacts(data);
// //       } catch (error) {
// //         console.error("Error fetching contacts:", error);
// //       }
// //     };

// //     fetchContacts();
// //   }, []);

// //   // دالة للرد على رسالة الشيف
// //   const respondContact = async (contactId, response) => {
// //     try {
// //       await API.put("/contacts/respond", { contactId, response });

// //       // استخدام SweetAlert2 بدلاً من alert
// //       await Swal.fire({
// //         title: "Success!",
// //         text: "Response sent and email dispatched successfully",
// //         icon: "success",
// //         confirmButtonText: "OK",
// //       });

// //       setIsModalOpen(false);
// //     } catch (error) {
// //       console.error("Error sending response:", error);

// //       // عرض رسالة خطأ باستخدام SweetAlert2
// //       await Swal.fire({
// //         title: "Error!",
// //         text: "There was an error sending the response.",
// //         icon: "error",
// //         confirmButtonText: "OK",
// //       });
// //     }
// //   };

// //   const openModal = (contact) => {
// //     setSelectedContact(contact);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setSelectedContact(null);
// //     setIsModalOpen(false);
// //   };

// //   // Slice the contacts for the current page
// //   const indexOfLastContact = currentPage * rowsPerPage;
// //   const indexOfFirstContact = indexOfLastContact - rowsPerPage;
// //   const currentContacts = contacts.slice(
// //     indexOfFirstContact,
// //     indexOfLastContact
// //   );

// //   // Handle page change
// //   const handlePageChange = (pageNumber) => {
// //     setCurrentPage(pageNumber);
// //   };

// //   // Calculate total pages
// //   const totalPages = Math.ceil(contacts.length / rowsPerPage);

// //   return (
// //     <div className="p-6">
// //       <h2 className="text-2xl font-bold mb-4 text-gray-800">
// //         Manage Contact Messages
// //       </h2>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
// //           <thead className="bg-gray-200">
// //             <tr>
// //               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
// //                 Name
// //               </th>
// //               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
// //                 Email
// //               </th>
// //               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
// //                 Message
// //               </th>
// //               <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">
// //                 Respond
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {currentContacts.length === 0 ? (
// //               <tr>
// //                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
// //                   No contact messages available.
// //                 </td>
// //               </tr>
// //             ) : (
// //               currentContacts.map((contact) => (
// //                 <tr key={contact._id} className="border-t">
// //                   <td className="px-6 py-4 text-sm text-gray-800">
// //                     {contact.name}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm text-gray-800">
// //                     {contact.email}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm text-gray-800">
// //                     {contact.message}
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <button
// //                       onClick={() => openModal(contact)}
// //                       className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
// //                     >
// //                       Respond
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Pagination Controls */}
// //       <div className="mt-4 flex justify-between items-center">
// //         <button
// //           onClick={() => handlePageChange(currentPage - 1)}
// //           disabled={currentPage === 1}
// //           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
// //         >
// //           Previous
// //         </button>
// //         {/* <span className="text-gray-600">
// //           Page {currentPage} of {totalPages}
// //         </span> */}
// //         <button
// //           onClick={() => handlePageChange(currentPage + 1)}
// //           disabled={currentPage === totalPages}
// //           className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200"
// //         >
// //           Next
// //         </button>
// //       </div>

// //       {/* Modal for responding */}
// //       {selectedContact && (
// //         <Modal
// //           isOpen={isModalOpen}
// //           onClose={closeModal}
// //           onSend={respondContact}
// //           contact={selectedContact}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // export default ContactsPage;
// // //////////okaaay down//////////
// // import React, { useState, useEffect } from "react";
// // import API from "../api";
// // import Swal from "sweetalert2"; // Importing SweetAlert2

// // // Modal component
// // const Modal = ({ isOpen, onClose, onSend, contact }) => {
// //   const [response, setResponse] = useState("");

// //   const handleSend = () => {
// //     onSend(contact._id, response);
// //     setResponse("");
// //     onClose();
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
// //       <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
// //         <h3 className="text-2xl font-semibold mb-4 text-gray-900">reply</h3>
// //         <textarea
// //           value={response}
// //           onChange={(e) => setResponse(e.target.value)}
// //           className="w-full p-3 border border-gray-300 rounded-lg mb-4"
// //           rows="4"
// //           placeholder="Write your reply ..."
// //         />
// //         <div className="flex justify-end space-x-2">
// //           <button
// //             onClick={handleSend}
// //             className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
// //           >
// //             Send
// //           </button>
// //           <button
// //             onClick={onClose}
// //             className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200"
// //           >
// //             Cancel
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // function ContactsPage() {
// //   const [contacts, setContacts] = useState([]);
// //   const [selectedContact, setSelectedContact] = useState(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   // Fetch contacts from the server
// //   useEffect(() => {
// //     const fetchContacts = async () => {
// //       try {
// //         const { data } = await API.get("/contacts");
// //         setContacts(data);
// //       } catch (error) {
// //         console.error("Error fetching contacts:", error);
// //       }
// //     };

// //     fetchContacts();
// //   }, []);

// //   // Handle response to a contact
// //   const respondContact = async (contactId, response) => {
// //     try {
// //       await API.put("/contacts/respond", { contactId, response });

// //       await Swal.fire({
// //         title: "Success!",
// //         text: "Response sent successfully",
// //         icon: "success",
// //         confirmButtonText: "OK",
// //       });

// //       setIsModalOpen(false);
// //     } catch (error) {
// //       console.error("Error sending response:", error);

// //       await Swal.fire({
// //         title: "Error!",
// //         text: "There was an error sending the response.",
// //         icon: "error",
// //         confirmButtonText: "OK",
// //       });
// //     }
// //   };

// //   const openModal = (contact) => {
// //     setSelectedContact(contact);
// //     setIsModalOpen(true);
// //   };

// //   const closeModal = () => {
// //     setSelectedContact(null);
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <div className="p-6 bg-gray-100 min-h-screen">
// //       <h2 className="text-3xl font-bold mb-6 text-gray-900">Messages</h2>
// //       <div className="overflow-x-auto">
// //         <table className="min-w-full bg-white shadow-md rounded-lg">
// //           <thead className="bg-gray-300">
// //             <tr>
// //               <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
// //                 Name
// //               </th>
// //               <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
// //                 Email
// //               </th>
// //               <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
// //                 Message
// //               </th>
// //               <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
// //                 Reply
// //               </th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {contacts.length === 0 ? (
// //               <tr>
// //                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
// //                   No contact messages available.
// //                 </td>
// //               </tr>
// //             ) : (
// //               contacts.map((contact) => (
// //                 <tr key={contact._id} className="border-t">
// //                   <td className="px-6 py-4 text-sm text-gray-900">
// //                     {contact.name}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm text-gray-900">
// //                     {contact.email}
// //                   </td>
// //                   <td className="px-6 py-4 text-sm text-gray-900">
// //                     {contact.message}
// //                   </td>
// //                   <td className="px-6 py-4">
// //                     <button
// //                       onClick={() => openModal(contact)}
// //                       className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
// //                     >
// //                       Reply
// //                     </button>
// //                   </td>
// //                 </tr>
// //               ))
// //             )}
// //           </tbody>
// //         </table>
// //       </div>

// //       {/* Modal for responding */}
// //       {selectedContact && (
// //         <Modal
// //           isOpen={isModalOpen}
// //           onClose={closeModal}
// //           onSend={respondContact}
// //           contact={selectedContact}
// //         />
// //       )}
// //     </div>
// //   );
// // }

// // export default ContactsPage;
// //////////okaaaaay up//////////
// import React, { useState, useEffect } from "react";
// import API from "../api";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Send, User, Mail, MessageSquare } from "lucide-react";

// // Custom Notification component
// const Notification = ({ message, type, onClose }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       animate={{ opacity: 1, y: 0 }}
//       exit={{ opacity: 0, y: 50 }}
//       className={`fixed bottom-4 right-4 p-4 rounded-lg shadow-lg ${
//         type === "success" ? "bg-green-500" : "bg-red-500"
//       } text-white`}
//     >
//       {message}
//       <button onClick={onClose} className="ml-4 text-white">
//         <X size={18} />
//       </button>
//     </motion.div>
//   );
// };

// // Modal component
// const Modal = ({ isOpen, onClose, onSend, contact }) => {
//   const [response, setResponse] = useState("");

//   const handleSend = () => {
//     onSend(contact._id, response);
//     setResponse("");
//     onClose();
//   };

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//         >
//           <motion.div
//             initial={{ y: -50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             exit={{ y: 50, opacity: 0 }}
//             className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
//           >
//             <h3 className="text-2xl font-semibold mb-4 text-gray-900">
//               Reply to {contact.name}
//             </h3>
//             <textarea
//               value={response}
//               onChange={(e) => setResponse(e.target.value)}
//               className="w-full p-3 border border-gray-300 rounded-lg mb-4"
//               rows="4"
//               placeholder="Write your reply here..."
//             />
//             <div className="flex justify-end space-x-2">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={handleSend}
//                 className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center"
//               >
//                 <Send size={18} className="mr-2" /> Send
//               </motion.button>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={onClose}
//                 className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 flex items-center"
//               >
//                 <X size={18} className="mr-2" /> Cancel
//               </motion.button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// function ContactsPage() {
//   const [contacts, setContacts] = useState([]);
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [notification, setNotification] = useState(null);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const { data } = await API.get("/contacts");
//         setContacts(data);
//       } catch (error) {
//         console.error("Error fetching contacts:", error);
//         showNotification(
//           "Failed to fetch messages. Please try again later.",
//           "error"
//         );
//       }
//     };

//     fetchContacts();
//   }, []);

//   const showNotification = (message, type) => {
//     setNotification({ message, type });
//     setTimeout(() => setNotification(null), 3000);
//   };

//   const respondContact = async (contactId, response) => {
//     try {
//       await API.put("/contacts/respond", { contactId, response });
//       showNotification("Response sent successfully", "success");
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error("Error sending response:", error);
//       showNotification("Failed to send response. Please try again.", "error");
//     }
//   };

//   const openModal = (contact) => {
//     setSelectedContact(contact);
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setSelectedContact(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="p-6 bg-gradient-to-br from-yellow-50 to-red-50 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-red-800">
//         Customer Messages
//       </h2>
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="overflow-x-auto"
//       >
//         <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-red-700 text-white">
//             <tr>
//               <th className="px-6 py-3 text-left text-sm font-semibold">
//                 Name
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">
//                 Message
//               </th>
//               <th className="px-6 py-3 text-left text-sm font-semibold">
//                 Reply
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.length === 0 ? (
//               <tr>
//                 <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
//                   No messages available.
//                 </td>
//               </tr>
//             ) : (
//               contacts.map((contact) => (
//                 <motion.tr
//                   key={contact._id}
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   transition={{ duration: 0.3 }}
//                   className="border-t hover:bg-red-50"
//                 >
//                   <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
//                     <User size={18} className="mr-2 text-red-600" />
//                     {contact.name}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
//                     <Mail size={18} className="mr-2 text-red-600" />
//                     {contact.email}
//                   </td>
//                   <td className="px-6 py-4 text-sm text-gray-900 flex items-center">
//                     <MessageSquare size={18} className="mr-2 text-red-600" />
//                     {contact.message}
//                   </td>
//                   <td className="px-6 py-4">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       onClick={() => openModal(contact)}
//                       className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center"
//                     >
//                       <Send size={18} className="mr-2" /> Reply
//                     </motion.button>
//                   </td>
//                 </motion.tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </motion.div>

//       {selectedContact && (
//         <Modal
//           isOpen={isModalOpen}
//           onClose={closeModal}
//           onSend={respondContact}
//           contact={selectedContact}
//         />
//       )}

//       <AnimatePresence>
//         {notification && (
//           <Notification
//             message={notification.message}
//             type={notification.type}
//             onClose={() => setNotification(null)}
//           />
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default ContactsPage;
//////////////
import React, { useState, useEffect } from "react";
import API from "../api";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, MessageSquare } from "lucide-react";

// Custom Notification component
const Notification = ({ message, type, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } text-white`}
    >
      {message}
      <button onClick={onClose} className="ml-4 text-white">
        <X size={18} />
      </button>
    </motion.div>
  );
};

// Modal component
const Modal = ({ isOpen, onClose, onSend, contact }) => {
  const [response, setResponse] = useState("");

  const handleSend = () => {
    onSend(contact._id, response);
    setResponse("");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full"
          >
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Reply to {contact.name}
            </h3>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4"
              rows="4"
              placeholder="Write your reply here..."
            />
            <div className="flex justify-end space-x-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center"
              >
                <Send size={18} className="mr-2" /> Send
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 flex items-center"
              >
                <X size={18} className="mr-2" /> Cancel
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Message Card component
const MessageCard = ({ contact, onReply }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
  >
    <div className="flex items-center mb-4">
      <User size={24} className="text-red-600 mr-2" />
      <h3 className="text-xl font-semibold text-gray-800">{contact.name}</h3>
    </div>
    <div className="flex items-center mb-2">
      <Mail size={18} className="text-red-600 mr-2" />
      <p className="text-gray-600">{contact.email}</p>
    </div>
    <div className="flex items-start mb-4">
      <MessageSquare size={18} className="text-red-600 mr-2 mt-1" />
      <p className="text-gray-700">{contact.message}</p>
    </div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onReply(contact)}
      className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center justify-center"
    >
      <Send size={18} className="mr-2" /> Reply
    </motion.button>
  </motion.div>
);

function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const { data } = await API.get("/contacts");
        setContacts(data);
      } catch (error) {
        console.error("Error fetching contacts:", error);
        showNotification(
          "Failed to fetch messages. Please try again later.",
          "error"
        );
      }
    };

    fetchContacts();
  }, []);

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const respondContact = async (contactId, response) => {
    try {
      await API.put("/contacts/respond", { contactId, response });
      showNotification("Response sent successfully", "success");
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error sending response:", error);
      showNotification("Failed to send response. Please try again.", "error");
    }
  };

  const openModal = (contact) => {
    setSelectedContact(contact);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedContact(null);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gradient-to-br from-yellow-50 to-red-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-red-800">
        Customer Messages
      </h2>
      {contacts.length === 0 ? (
        <p className="text-center text-gray-500">No messages available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <MessageCard
              key={contact._id}
              contact={contact}
              onReply={openModal}
            />
          ))}
        </div>
      )}

      {selectedContact && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSend={respondContact}
          contact={selectedContact}
        />
      )}

      <AnimatePresence>
        {notification && (
          <Notification
            message={notification.message}
            type={notification.type}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactsPage;
