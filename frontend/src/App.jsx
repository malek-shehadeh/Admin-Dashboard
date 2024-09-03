// import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import {
//   Home,
//   Users,
//   ClipboardList,
//   UtensilsCrossed,
//   FileText,
//   UserPlus,
//   Pizza,
//   LogOut,
// } from "lucide-react";

// import ContactsPage from "./pages/ContactsPage";
// import UsersPage from "./pages/UsersPage";
// import ReviewsPage from "./pages/ReviewsPage";
// import RecipesPage from "./pages/RecipesPage";
// import ReportsPage from "./pages/ReportsPage";
// import ChefRecruitmentPage from "./pages/ChefRecruitmentPage";
// import DishesPage from "./pages/DishesPage";
// import HomePage from "./pages/HomePage";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-orange-50">
//       <nav className="w-64 bg-red-800 text-white p-5">
//         <h1 className="text-2xl font-bold mb-10">Cucina Dashboard</h1>
//         <ul>
//           {[
//             { name: "Home", icon: Home, path: "/" },
//             { name: "Manage Contacts", icon: Users, path: "/contacts" },
//             { name: "User Management", icon: Users, path: "/users" },
//             { name: "Manage Reviews", icon: ClipboardList, path: "/reviews" },
//             { name: "Manage Recipes", icon: UtensilsCrossed, path: "/recipes" },
//             { name: "Manage Reports", icon: FileText, path: "/reports" },
//             {
//               name: "Chef Recruitment",
//               icon: UserPlus,
//               path: "/chef-recruitment",
//             },
//             { name: "Manage Dishes", icon: Pizza, path: "/dishes" },
//             { name: "Logout", icon: LogOut, path: "/logout" },
//           ].map((item) => (
//             <li key={item.name} className="mb-4">
//               <Link
//                 to={item.path}
//                 className="flex items-center hover:text-yellow-300 transition-colors"
//               >
//                 <item.icon className="mr-2" size={18} />
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </nav>
//       <main className="flex-1 p-10 overflow-y-auto">{children}</main>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <DashboardLayout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/contacts" element={<ContactsPage />} />
//           <Route path="/users" element={<UsersPage />} />
//           <Route path="/reviews" element={<ReviewsPage />} />
//           <Route path="/recipes" element={<RecipesPage />} />
//           <Route path="/reports" element={<ReportsPage />} />
//           <Route path="/chef-recruitment" element={<ChefRecruitmentPage />} />
//           <Route path="/dishes" element={<DishesPage />} />
//           {/* <Route path="/logout" element={<HomePage />} /> */}
//           {/* Redirect to home for simplicity */}
//         </Routes>
//       </DashboardLayout>
//     </Router>
//   );
// };

// export default App;
// ///////////////////////
// import React from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import {
//   Grid,
//   MessageSquare,
//   ClipboardList,
//   Heart,
//   Clock,
//   Bell,
//   DollarSign,
//   Settings,
// } from "lucide-react";

// import HomePage from "./pages/HomePage";
// import ContactsPage from "./pages/ContactsPage";
// import UsersPage from "./pages/UsersPage";
// import ReviewsPage from "./pages/ReviewsPage";
// import RecipesPage from "./pages/RecipesPage";
// import ReportsPage from "./pages/ReportsPage";
// import ChefRecruitmentPage from "./pages/ChefRecruitmentPage";
// import DishesPage from "./pages/DishesPage";

// const DashboardLayout = ({ children }) => {
//   return (
//     <div className="flex h-screen bg-gray-100">
//       <nav className="w-64 bg-white shadow-lg">
//         <div className="p-4">
//           <h1 className="text-xl font-semibold text-gray-800">Main Menu</h1>
//         </div>
//         <ul className="mt-4">
//           {[
//             {
//               name: "Dashboard",
//               icon: Grid,
//               path: "/",
//             },
//             { name: "contacts", icon: MessageSquare, path: "/contacts" },
//             {
//               name: "reviews",
//               icon: ClipboardList,
//               path: "/reviews",
//             },
//             { name: "reports", icon: Bell, path: "/reports" },
//             { name: "users", icon: DollarSign, path: "/users" },
//             { name: "dishes", icon: Settings, path: "/dishes" },
//             { name: "recipes", icon: Settings, path: "/recipes" },
//           ].map((item) => (
//             <li key={item.name} className="mb-2">
//               <Link
//                 to={item.path}
//                 className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
//               >
//                 <item.icon className="mr-2" size={18} />
//                 {item.name}
//               </Link>
//               {item.submenu && (
//                 <ul className="ml-8 mt-1">
//                   {item.submenu.map((subItem) => (
//                     <li key={subItem} className="mb-1">
//                       <Link
//                         to="#"
//                         className="text-sm text-gray-600 hover:text-orange-500"
//                       >
//                         {subItem}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//         <div className="mt-8 px-4">
//           <Link
//             to="/restaurant"
//             className="flex items-center text-gray-700 hover:text-orange-500"
//           >
//             <img
//               src="/restaurant-icon.png"
//               alt="Restaurant"
//               className="w-6 h-6 mr-2"
//             />
//             Restaurant
//           </Link>
//         </div>
//       </nav>
//       <main className="flex-1 p-8 overflow-y-auto">{children}</main>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Router>
//       <DashboardLayout>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/contacts" element={<ContactsPage />} />
//           <Route path="/users" element={<UsersPage />} />
//           <Route path="/reviews" element={<ReviewsPage />} />
//           <Route path="/recipes" element={<RecipesPage />} />
//           <Route path="/reports" element={<ReportsPage />} />
//           <Route path="/chef-recruitment" element={<ChefRecruitmentPage />} />
//           <Route path="/dishes" element={<DishesPage />} />
//         </Routes>
//       </DashboardLayout>
//     </Router>
//   );
// };

// export default App;
///////////////////////////////////////
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import HomePage from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import UsersPage from "./pages/UsersPage";
import ReviewsPage from "./pages/ReviewsPage";
import RecipesPage from "./pages/RecipesPage";
import ReportsPage from "./pages/ReportsPage";
import ChefRecruitmentPage from "./pages/ChefRecruitmentPage";
import DishesPage from "./pages/DishesPage";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/chef-recruitment" element={<ChefRecruitmentPage />} />
          <Route path="/dishes" element={<DishesPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
