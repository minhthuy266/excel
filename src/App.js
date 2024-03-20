import { theme } from "antd";
import DashLayout from "components/common/DashLayout";
import Layout from "components/common/Layout";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import GeneralScreen from "screen/GeneralScreen";
import LoginScreen from "screen/LoginScreen";
import PublicScreen from "screen/PublicScreen";
import RequireAuth from "./features/auth/RequireAuth";
import RoleScreen from "screen/RoleScreen";
import "./index.css";

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (localStorage.getItem("currentScreen")) {
      localStorage.setItem("currentScreen", "/dash/general");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}

        <Route index element={<PublicScreen />}></Route>
        <Route path="/login" element={<LoginScreen />}></Route>

        {/* Protected routes */}
        <Route element={<RequireAuth />}>
          <Route
            path="dash"
            element={<DashLayout colorBgContainer={colorBgContainer} />}
          >
            <Route path="general" element={<GeneralScreen />}></Route>
            <Route path="role" element={<RoleScreen />}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
