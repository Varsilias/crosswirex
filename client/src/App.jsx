import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Calculations from "./pages/Calculations";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/data"
        element={
          <ProtectedRoute>
            <Calculations />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
