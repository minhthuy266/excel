import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken } from "./authSlice";

const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  console.log("TOKEN", token);

  return token ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{
        from: location,
      }}
      replace
    />
  );
};

export default RequireAuth;
