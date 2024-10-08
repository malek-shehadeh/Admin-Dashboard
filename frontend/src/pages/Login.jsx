// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../AuthContext";
// import API from "../api";
// import { motion } from "framer-motion";

// function Login() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   const onSubmit = async (data) => {
//     try {
//       const response = await API.post("/auth/login", data);
//       const { token, admin } = response.data;
//       login(token, admin);
//       navigate("/home");
//     } catch (error) {
//       setErrorMessage(error.response?.data?.message || "An error occurred");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-[#f8f4f0] relative">
//       <div className="absolute inset-0 bg-cover bg-center"></div>
//       <motion.div
//         className="bg-white p-8 rounded-lg shadow-md w-full max-w-md relative z-10"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         <h2 className="text-3xl font-bold text-center text-[#a0785d] mb-6">
//           Admin Login
//         </h2>
//         {errorMessage && (
//           <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
//         )}
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label
//               htmlFor="email"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               {...register("email", { required: "Email is required" })}
//               className={`mt-1 block w-full px-4 py-2 border ${
//                 errors.email ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0785d]`}
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email.message}</p>
//             )}
//           </div>
//           <div>
//             <label
//               htmlFor="password"
//               className="block text-sm font-medium text-gray-700"
//             >
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               {...register("password", { required: "Password is required" })}
//               className={`mt-1 block w-full px-4 py-2 border ${
//                 errors.password ? "border-red-500" : "border-gray-300"
//               } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0785d]`}
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password.message}</p>
//             )}
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-[#a0785d] text-white py-2 rounded-md hover:bg-[#8b5e3c] transition duration-300 ease-in-out shadow-md"
//           >
//             Login
//           </button>
//         </form>
//       </motion.div>
//     </div>
//   );
// }

// export default Login;
/////////////////////
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import API from "../api";
import { motion } from "framer-motion";
import { User, Lock } from "lucide-react";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const onSubmit = async (data) => {
    try {
      const response = await API.post("/auth/login", data);
      const { token, admin } = response.data;
      login(token, admin);
      navigate("/home");
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Admin Dashboard
        </h2>
        {errorMessage && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className={`pl-10 w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="relative">
            <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
            <input
              id="password"
              type="password"
              {...register("password", { required: "Password is required" })}
              className={`pl-10 w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
              placeholder="Password"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
          >
            Login to Dashboard
          </button>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
