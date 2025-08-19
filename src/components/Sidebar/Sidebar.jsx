import { FaTachometerAlt, FaUsers, FaBuilding, FaCalendarAlt, FaClipboardList, FaMoneyBill, FaChartBar, FaCog, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt />, path: "/dashboard" },
  { name: "Employees", icon: <FaUsers />, path: "/employees" },
  { name: "Organization", icon: <FaBuilding />, path: "/organization" },
  { name: "Leave", icon: <FaCalendarAlt />, path: "/leave" },
  { name: "Attendance", icon: <FaClipboardList />, path: "/attendance" },
  { name: "Documents", icon: <FaClipboardList />, path: "/documents" },
  { name: "Salary & Payroll", icon: <FaMoneyBill />, path: "/payroll" },
  { name: "Reports & Analytics", icon: <FaChartBar />, path: "/reports" },
  { name: "System Settings", icon: <FaCog />, path: "/settings" },
  { name: "My Personal", icon: <FaUser />, path: "/personal" },
];

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-gray-200 h-screen w-64 flex flex-col shadow-lg">
      {/* Logo */}
      <div className="text-2xl font-bold text-white p-4 border-b border-gray-800">
        HR System
      </div>

      {/* Menu */}
      <nav className="flex-1 p-2">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors duration-200 ${
                isActive ? "bg-purple-600 text-white" : "hover:bg-gray-800"
              }`
            }
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      {/* Support */}
      <div className="p-4 text-sm text-gray-400 border-t border-gray-800">
        Need Support? <br />
        <span className="text-purple-400">1 Day Response Time</span>
      </div>
    </div>
  );
};

export default Sidebar;
