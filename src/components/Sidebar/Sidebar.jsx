import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaListAlt,
  FaPlusCircle,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import "./Sidebar.css";
import Cloves from '../../assets/src/cloves.png'

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/list", label: "All Macros", icon: <FaListAlt /> },
    { path: "/add", label: "Add Macro", icon: <FaPlusCircle /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
    { path: "/notifications", label: "Notifications", icon: <IoIosNotifications /> },
    { path: "/help", label: "Help", icon: <FaQuestionCircle /> },
  ];

  return (
    <div className="sidebar">
        <div className="dashboard">
            <img src={Cloves} alt="MacroMate Logo" />
            <h2 className="sidebar-title">MacroMate</h2>
        </div>
      
      <nav>
        <ul className="sidebar-list">
          {navItems.map((item) => (
            <li key={item.path} className={isActive(item.path) ? "active" : ""}>
              <Link to={item.path}>
                <span className="icon">{item.icon}</span>
                <span className="label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
