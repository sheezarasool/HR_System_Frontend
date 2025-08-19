import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar"; // ✅ correct path

// Pages
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <div className="flex bg-gray-950 min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
