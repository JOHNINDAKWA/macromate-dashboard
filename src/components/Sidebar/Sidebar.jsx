import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaListAlt,
  FaPlusCircle,
  FaCog,
  FaQuestionCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import "./Sidebar.css";
import Cloves from '../../assets/cloves.png';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef();

  const isActive = (path) => location.pathname === path;
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home", icon: <FaHome /> },
    { path: "/list", label: "All Macros", icon: <FaListAlt /> },
    { path: "/add", label: "Add Macro", icon: <FaPlusCircle /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
    { path: "/notification", label: "Notifications", icon: <IoIosNotifications /> },
    { path: "/help", label: "Help", icon: <FaQuestionCircle /> },
  ];

  return (
    <>
      {/* Hamburger Toggle */}
      <div className="hamburger" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      <div ref={sidebarRef} className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="dashboard">
          <img src={Cloves} alt="MacroMate Logo" />
          <h2 className="sidebar-title">MacroMate</h2>
        </div>

        <nav>
          <ul className="sidebar-list">
            {navItems.map((item) => (
              <li key={item.path} className={isActive(item.path) ? "active" : ""}>
                <Link to={item.path} onClick={() => setIsOpen(false)}>
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
