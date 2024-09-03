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
///////////////////
import React from "react";
import { ChevronRight } from "lucide-react";

const CategoryCard = ({ icon, name }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <img src={icon} alt={name} className="w-12 h-12 mb-2" />
    <span className="text-sm font-medium text-gray-700">{name}</span>
  </div>
);

const HomePage = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-orange-500 to-red-700 rounded-lg overflow-hidden shadow-lg">
        <img
          src="/wing-day-promo.jpg"
          alt="Wing Day Promo"
          className="w-full h-48 object-cover"
        />
        <div className="p-4 text-white">
          <div className="text-3xl font-bold mb-2">EVERYDAY IS WING DAY</div>
          <div className="text-xl mb-4">Sauced up goodness!</div>
          <div className="text-4xl font-bold">$6.99</div>
          <div className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div className="mt-4 text-lg font-semibold">Call: +123 456 789 0</div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-800">Category</h2>
        <button className="text-orange-500 flex items-center">
          View all <ChevronRight size={20} />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <CategoryCard icon="/chicken-icon.png" name="Chicken" />
        <CategoryCard icon="/burger-icon.png" name="Burger" />
        <CategoryCard icon="/bakery-icon.png" name="Bakery" />
      </div>
    </div>
  );
};

export default HomePage;
