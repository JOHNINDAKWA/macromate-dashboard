import { useState } from "react";
import { useLogin } from "../../Context/LoginContext";
import "./LoginButton.css";

const users = [
  { username: "admin", password: "macropass" },
  { username: "john", password: "1234" },
  { username: "susan", password: "securepass" },
];

const LoginButton = () => {
  const { isLoggedIn, login, logout } = useLogin();
  const [showModal, setShowModal] = useState(false);
  const [credentials, setCredentials] = useState({ username: "", password: "" });

  const handleLogin = () => {
    const userFound = users.find(
      (user) =>
        user.username === credentials.username &&
        user.password === credentials.password
    );

    if (userFound) {
      login(userFound.username);
      setShowModal(false);
      setCredentials({ username: "", password: "" });
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <button
        onClick={() => (isLoggedIn ? logout() : setShowModal(true))}
        className="login-btn"
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Login</h3>
            <input
              type="text"
              placeholder="Username"
              value={credentials.username}
              onChange={(e) =>
                setCredentials({ ...credentials, username: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) =>
                setCredentials({ ...credentials, password: e.target.value })
              }
            />
            <button onClick={handleLogin}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginButton;
