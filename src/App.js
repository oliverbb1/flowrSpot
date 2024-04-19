import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./register/SignUp";
import SignIn from "./register/SignIn";
import AllFlowers from "./pages/AllFlowers";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import CreateFlower from "./components/CreateFlower";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthRedirect from "./components/AuthRedirect";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/register"
          element={
            <AuthRedirect>
              <SignUp />
            </AuthRedirect>
          }
        />
        <Route
          path="/login"
          element={
            <AuthRedirect>
              <SignIn />
            </AuthRedirect>
          }
        />
        <Route path="/" element={<AllFlowers />} />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <ProtectedRoute>
              <EditProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create"
          element={
            <ProtectedRoute>
              <CreateFlower />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
