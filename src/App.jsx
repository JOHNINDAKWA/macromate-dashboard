import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import MacroList from "./pages/MacroList/MacroList";
import MacroDetail from "./pages/MacroDetail/MacroDetail";
import AddMacro from "./pages/AddMacro/AddMacro";


export default function App() {
  return (
    <Router>
      <div >
        <Sidebar />
        <div>
          <Routes>
            <Route path="/" element={<MacroList />} />
            <Route path="/list" element={<MacroList />} />
            <Route path="/add" element={<AddMacro />} />
            <Route path="/macro/:macroTitle" element={<MacroDetail />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}
