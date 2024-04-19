import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    // console.log(token);
    if (token) {
      setIsAuth(true);
      // console.log(isAuth)
    } else {
      setIsAuth(false);
      navigate("/login");
    }
  }, [navigate]);
  // console.log(token)
  if (isAuth) {
    return <>{children}</>;
  }
  if (isAuth === null) {
    return null;
  }
};

export default ProtectedRoute;
