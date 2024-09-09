// import React from "react";

// const HomePage = () => {
//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-red-800 mb-4">
//         Welcome to Cucina Dashboard
//       </h1>
//       <p className="text-lg text-gray-700 mb-4">
//         Manage your Italian restaurant with ease.
//       </p>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h2 className="text-xl font-semibold text-red-700 mb-2">
//             Today's Specials
//           </h2>
//           <ul className="list-disc list-inside">
//             <li>Spaghetti Carbonara</li>
//             <li>Margherita Pizza</li>
//             <li>Tiramisu</li>
//           </ul>
//         </div>
//         <div className="bg-white p-4 rounded-lg shadow">
//           <h2 className="text-xl font-semibold text-red-700 mb-2">
//             Quick Stats
//           </h2>
//           <p>Reservations today: 25</p>
//           <p>Open tables: 8</p>
//           <p>Staff on duty: 12</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
// //////////okaaay down/////////
// import React from "react";
// import { ChevronRight } from "lucide-react";

// const CategoryCard = ({ icon, name }) => (
//   <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
//     <img src={icon} alt={name} className="w-12 h-12 mb-2" />
//     <span className="text-sm font-medium text-gray-700">{name}</span>
//   </div>
// );

// const HomePage = () => {
//   return (
//     <div className="space-y-6">
//       <div className="bg-gradient-to-r from-orange-500 to-red-700 rounded-lg overflow-hidden shadow-lg">
//         <img
//           src="/picture2.jpg"
//           alt="Wing Day Promo"
//           className="w-full h-48 object-cover"
//         />
//         <div className="p-4 text-white">
//           <div className="text-3xl font-bold mb-2">EVERYDAY IS WING DAY</div>
//           <div className="text-xl mb-4">Sauced up goodness!</div>
//           <div className="text-4xl font-bold">$6.99</div>
//           <div className="mt-2 text-sm">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//           </div>
//           <div className="mt-4 text-lg font-semibold">Call: +123 456 789 0</div>
//         </div>
//       </div>

//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Category</h2>
//         <button className="text-orange-500 flex items-center">
//           View all <ChevronRight size={20} />
//         </button>
//       </div>

//       <div className="grid grid-cols-3 gap-4">
//         <CategoryCard icon="/chicken-icon.png" name="Chicken" />
//         <CategoryCard icon="/burger-icon.png" name="Burger" />
//         <CategoryCard icon="/bakery-icon.png" name="Bakery" />
//       </div>
//     </div>
//   );
// };

// // export default HomePage;
// ///////////okaaaay up ///////////
// import React, { useState, useEffect } from "react";
// import { ChevronRight, Pizza, Utensils, Coffee } from "lucide-react";
// import { motion } from "framer-motion";

// const images = ["/picture1.jpg", "/picture2.jpg", "/picture1.jpg"];

// const CategoryCard = ({ icon: Icon, name }) => (
//   <motion.div
//     whileHover={{ scale: 1.05 }}
//     className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
//   >
//     <Icon className="w-12 h-12 mb-2 text-red-600" />
//     <span className="text-sm font-medium text-gray-700">{name}</span>
//   </motion.div>
// );

// const HomePage = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="space-y-6 bg-amber-50 p-6">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="bg-gradient-to-r from-green-600 to-blue-700 rounded-lg overflow-hidden shadow-lg"
//       >
//         <motion.img
//           key={currentImageIndex}
//           src={images[currentImageIndex]}
//           alt="Italian Food"
//           className="w-full h-64 object-cover"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />
//         <div className="p-4 text-white">
//           <div className="text-3xl font-bold mb-2">
//             Authentic Italian Cuisine
//           </div>
//           <div className="text-xl mb-4">Taste the flavors of Italy!</div>
//           <div className="mt-2 text-sm">
//             Enjoy our chef's special dishes, made with fresh ingredients
//             imported from Italy.
//           </div>
//         </div>
//       </motion.div>

//       <div className="flex justify-between items-center">
//         <h2 className="text-2xl font-bold text-gray-800">Our Menu</h2>
//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           className="text-green-600 flex items-center"
//         >
//           View all <ChevronRight size={20} />
//         </motion.button>
//       </div>

//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//         className="grid grid-cols-3 gap-4"
//       >
//         <CategoryCard icon={Pizza} name="Pizza" />
//         <CategoryCard icon={Utensils} name="Pasta" />
//         <CategoryCard icon={Coffee} name="Espresso" />
//       </motion.div>
//     </div>
//   );
// };

// export default HomePage;
////////////////////

import React, { useState, useEffect } from "react";
import { ChevronRight, Pizza, Utensils, Coffee, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import axios from "axios";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const images = ["/picture1.jpg", "/picture2.jpg", "/picture1.jpg"];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const CategoryCard = ({ icon: Icon, name }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const springProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <animated.div ref={ref} style={springProps}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
      >
        <Icon className="w-12 h-12 mb-2 text-red-600" />
        <span className="text-sm font-medium text-gray-700">{name}</span>
      </motion.div>
    </animated.div>
  );
};

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    const fetchUserData = async () => {
      try {
        const response = await axios.get("/api/users");
        const activeUsers = response.data.filter(
          (user) => user.isActive
        ).length;
        const inactiveUsers = response.data.length - activeUsers;
        setUserData([
          { name: "Active Users", value: activeUsers },
          { name: "Inactive Users", value: inactiveUsers },
        ]);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchUserData();

    return () => clearInterval(timer);
  }, []);

  const [chartRef, chartInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const chartSpringProps = useSpring({
    opacity: chartInView ? 1 : 0,
    transform: chartInView ? "translateY(0)" : "translateY(50px)",
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div className="space-y-6 bg-amber-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-green-600 to-blue-700 rounded-lg overflow-hidden shadow-lg"
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Italian Food"
            className="w-full h-64 object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
        <motion.div
          className="p-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="text-3xl font-bold mb-2">
            Authentic Italian Cuisine
          </div>
          <div className="text-xl mb-4">Taste the flavors of Italy!</div>
          <div className="mt-2 text-sm">
            Enjoy our chef's special dishes, made with fresh ingredients
            imported from Italy.
          </div>
        </motion.div>
      </motion.div>

      <animated.div
        ref={chartRef}
        style={chartSpringProps}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <Users className="mr-2" /> User Statistics
        </h2>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, value, percent }) =>
                  `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                }
              >
                {userData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </animated.div>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Our Menu</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-green-600 flex items-center"
        >
          View all <ChevronRight size={20} />
        </motion.button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <CategoryCard icon={Pizza} name="Pizza" />
        <CategoryCard icon={Utensils} name="Pasta" />
        <CategoryCard icon={Coffee} name="Espresso" />
      </div>
    </div>
  );
};

export default HomePage;
