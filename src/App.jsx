import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MacroList from "./pages/MacroList/MacroList";
import MacroDetail from "./pages/MacroDetail/MacroDetail";
import AddMacro from "./pages/AddMacro/AddMacro";
import Help from "./pages/Help/Help";
import Notification from "./pages/Notification/Notification";
import Settings from "./pages/Settings/Settings";
import LoginButton from "./components/LoginButton/LoginButton";
import { LoginProvider } from "./Context/LoginContext";

export default function App() {
  return (
    <LoginProvider>
      <Router>
        <div>
          <LoginButton /> 
          <Sidebar />
          <div>
            <Routes>
              <Route path="/" element={<MacroList />} />
              <Route path="/list" element={<MacroList />} />
              <Route path="/add" element={<AddMacro />} />
              <Route path="/help" element={<Help />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/macro/:macroTitle" element={<MacroDetail />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LoginProvider>
  );
}
