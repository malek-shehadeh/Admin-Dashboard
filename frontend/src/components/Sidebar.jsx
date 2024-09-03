// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   Grid,
//   MessageSquare,
//   ClipboardList,
//   Bell,
//   Users,
//   Coffee,
//   Book,
//   LogOut,
// } from "lucide-react";

// function Sidebar() {
//   const menuItems = [
//     { name: "Dashboard", icon: Grid, path: "/" },
//     { name: "Contacts", icon: MessageSquare, path: "/contacts" },
//     { name: "Reviews", icon: ClipboardList, path: "/reviews" },
//     { name: "Reports", icon: Bell, path: "/reports" },
//     { name: "Users", icon: Users, path: "/users" },
//     { name: "Dishes", icon: Coffee, path: "/dishes" },
//     { name: "Recipes", icon: Book, path: "/recipes" },
//   ];

//   return (
//     <nav className="w-64 bg-white shadow-lg h-screen">
//       <div className="p-4">
//         <h1 className="text-xl font-semibold text-gray-800">Main Menu</h1>
//       </div>
//       <ul className="mt-4">
//         {menuItems.map((item) => (
//           <li key={item.name} className="mb-2">
//             <Link
//               to={item.path}
//               className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
//             >
//               <item.icon className="mr-2" size={18} />
//               {item.name}
//             </Link>
//           </li>
//         ))}
//         <li className="mb-2">
//           <Link
//             to="/logout"
//             className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
//           >
//             <LogOut className="mr-2" size={18} />
//             Logout
//           </Link>
//         </li>
//       </ul>
//       <div className="mt-8 px-4">
//         <Link
//           to="/restaurant"
//           className="flex items-center text-gray-700 hover:text-orange-500"
//         >
//           <img
//             src="/restaurant-icon.png"
//             alt="Restaurant"
//             className="w-6 h-6 mr-2"
//           />
//           Restaurant
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Sidebar;
/////////////
import React from "react";
import { Link } from "react-router-dom";
// import { useAuth } from "../AuthContext";
import {
  Grid,
  MessageSquare,
  ClipboardList,
  Bell,
  Users,
  Coffee,
  Book,
  LogOut,
} from "lucide-react";

function Sidebar() {
  //   const { logout } = useAuth();

  return (
    <nav className="w-64 bg-white shadow-lg h-screen">
      <div className="p-4">
        <h1 className="text-xl font-semibold text-gray-800">Admin</h1>
      </div>
      <ul className="mt-4">
        <li className="mb-2">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
          >
            <Grid className="mr-2" size={18} />
            Home
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/contacts"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
          >
            <MessageSquare className="mr-2" size={18} />
            Contacts
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/users"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
          >
            <Users className="mr-2" size={18} />
            Users
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/reviews"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
          >
            <ClipboardList className="mr-2" size={18} />
            Reviews
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/recipes"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
          >
            <Book className="mr-2" size={18} />
            All Recipes
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/reports"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
          >
            <Bell className="mr-2" size={18} />
            Reports
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/requests"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
          >
            <Users className="mr-2" size={18} />
            Chef Requests
          </Link>
        </li>
        <li className="mb-2">
          <Link
            to="/dishes"
            className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white"
          >
            <Coffee className="mr-2" size={18} />
            All Dishes
          </Link>
        </li>
        {/* <li className="mb-2">
          <button onClick={logout} className="flex items-center px-4 py-2 text-gray-700 hover:bg-orange-500 hover:text-white w-full">
            <LogOut className="mr-2" size={18} />
            Logout
          </button>
        </li> */}
      </ul>
    </nav>
  );
}

export default Sidebar;
