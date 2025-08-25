// import { NavLink } from 'react-router-dom';
// import React from 'react';

// const Navbar = ({ navColor }) => {
//   return (
//     <div style={!navColor ? { backgroundColor: "black" } : {}}>
//       <nav className="top-0 left-0 w-full flex justify-between items-center p-6 font-bold text-white">

//         <h1 className="text-5xl font-qwitcher z-10">Craftsy Creations</h1>

//         <div className="space-x-4 z-10">
//           <NavLink
//             to="/home"
//             className="text-white z-10 hover:text-gray-400"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "2px solid white" : "none"
//             })}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/products"
//             className="text-white z-10 hover:text-gray-400"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "2px solid white" : "none"
//             })}
//           >
//             Products
//           </NavLink>

//           <NavLink
//             to="/cart"
//             className="text-white z-10 hover:text-gray-400"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "2px solid white" : "none"
//             })}
//           >
//             Cart
//           </NavLink>

//           <NavLink
//             to="/orders"
//             className="text-white z-10 hover:text-gray-400"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "2px solid white" : "none"
//             })}
//           >
//             Orders
//           </NavLink>
//           <NavLink
//             to="/"
//             className="text-white z-10 hover:text-gray-400"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "2px solid white" : "none"
//             })}
//           >
//             Login
//           </NavLink>
//           <NavLink
//             to="/register"
//             className="text-white z-10 hover:text-gray-400"
//             style={({ isActive }) => ({
//               borderBottom: isActive ? "2px solid white" : "none"
//             })}
//           >
//             Sign In
//           </NavLink>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import { NavLink } from 'react-router-dom';
import React from 'react';

const Navbar = ({ navColor }) => {
  return (
    <div style={!navColor ? { backgroundColor: "black" } : {}}>
      <nav className="top-0 left-0 w-full flex justify-between items-center p-6 font-bold">

        {/* Logo */}
        <h1 className="text-5xl font-qwitcher z-10 text-yellow-400">
          Craftsy Creations
        </h1>

        {/* Links */}
        <div className="space-x-6 z-10">
          <NavLink
            to="/home"
            className="text-gray-200 hover:text-yellow-400 transition"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #facc15" : "none" // yellow-400
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className="text-gray-200 hover:text-yellow-400 transition"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #facc15" : "none"
            })}
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className="text-gray-200 hover:text-yellow-400 transition"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #facc15" : "none"
            })}
          >
            Cart
          </NavLink>

          <NavLink
            to="/orders"
            className="text-gray-200 hover:text-yellow-400 transition"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #facc15" : "none"
            })}
          >
            Orders
          </NavLink>

          <NavLink
            to="/"
            className="text-gray-200 hover:text-yellow-400 transition"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #facc15" : "none"
            })}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="text-gray-200 hover:text-yellow-400 transition"
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid #facc15" : "none"
            })}
          >
            Sign In
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

