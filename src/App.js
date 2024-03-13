import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignUp from "./register/SignUp";
import SignIn from "./register/SignIn";
// import ProtectedRoute from "./components/ProtectedRoute";
import Flowers from "./components/Flowers";
import Favorite from "./components/Favorites";
import SingleFlower from "./components/SingleFlower";
import AllFlowers from "./pages/AllFlowers";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/" element={<AllFlowers />} />
      </Routes>
    </div>
  );
}

export default App;
