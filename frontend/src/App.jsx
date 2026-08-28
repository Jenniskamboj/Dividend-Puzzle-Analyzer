import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./pages/ProtectedRoute";
import Companies from "./pages/Companies";
import MLAnalysis from "./pages/MLAnalysis";
import TheoryAnalysis from "./pages/TheoryAnalysis";
import Comparison from "./pages/Comparison";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/companies"
          element={
            <ProtectedRoute>
              <Companies />
            </ProtectedRoute>
          }
        />

        <Route
          path="/ml-analysis"
          element={
            <ProtectedRoute>
              <MLAnalysis />
            </ProtectedRoute>
          }
        />

        <Route
          path="/theory-analysis"
          element={
            <ProtectedRoute>
              <TheoryAnalysis />
            </ProtectedRoute>
          }
        />

        <Route
          path="/comparison"
          element={
            <ProtectedRoute>
              <Comparison />
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;