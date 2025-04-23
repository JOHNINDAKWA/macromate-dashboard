import "./Settings.css";
import { useState } from "react";
import { FaUser, FaBell, FaPaintBrush, FaLanguage } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from "react-router-dom";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("English");

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleNotificationToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className={`settings-wrapper ${darkMode ? "dark-mode" : ""}`}>
      <h2>Settings</h2>

      <div className="settings-section">
        <h3>
          <FaUser /> Account Settings
        </h3>
        <p>Manage your profile and account details.</p>
        <div className="settings-buttons">
          <button className="settings-btn">Update Profile</button>
          <button className="settings-btn">Change Password</button>
        </div>
      </div>

      <div className="settings-section">
        <h3>
          <FaBell /> Notification Settings
        </h3>
        <div className="toggle-switch">
          <label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationToggle}
            />
            <span>Enable Notifications</span>
          </label>
        </div>
        <p>Choose the type of notifications you'd like to receive.</p>
      </div>

      <div className="settings-section">
        <h3>
          <FaPaintBrush /> Theme Settings
        </h3>
        <div className="toggle-switch">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleThemeToggle}
            />
            <span>Enable Dark Mode</span>
          </label>
        </div>
        <p>
          Switch between light and dark themes for a better viewing experience.
        </p>
      </div>

      <div className="settings-section">
        <h3>
          <FaLanguage /> Language Settings
        </h3>
        <select value={language} onChange={handleLanguageChange}>
          <option value="English">English</option>
          <option value="Swahili">Swahili</option>
          <option value="Luo">Luo</option>
          <option value="Kalenjin">Kalenjin</option>
          <option value="Luhya">Luhya</option>
          <option value="Abagusi">Abagusi</option>
          <option value="Agikuyu">Agikuyu</option>
          <option value="Akamba">Akamba</option>
        </select>
        <p>Select your preferred language.</p>
      </div>

      <div className="settings-section privacy-section">
        <h3>
          {" "}
          <SiGnuprivacyguard />
          Privacy & Legal
        </h3>
        <p>
          We care about your data. Please review our{" "}
          <Link to="/privacy-policy" className="privacy-link">
            Privacy Policy
          </Link>{" "}
          to understand how we handle your information.
        </p>
      </div>
    </div>
  );
};

export default Settings;
