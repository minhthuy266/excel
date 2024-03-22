// import "./index.css";
import { theme } from "antd";
import DashLayout from "components/common/DashLayout";
import Layout from "components/common/Layout";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ContractScreen from "screen/ContractScreen";
import LoginScreen from "screen/LoginScreen";
import PublicScreen from "screen/PublicScreen";
import RequireAuth from "./features/auth/RequireAuth";
import RoleScreen from "screen/RoleScreen";
import PaymentPlanScreen from "screen/PaymentPlanScreen";
import PaymentActualScreen from "screen/PaymentActualScreen";
import BudgetScreen from "screen/BudgetScreen";

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {
    if (localStorage.getItem("currentScreen")) {
      localStorage.setItem("currentScreen", "/dash/contract");
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
            <Route path="contract" element={<ContractScreen />}></Route>
            <Route path="payment-plan" element={<PaymentPlanScreen />}></Route>
            <Route
              path="payment-actual"
              element={<PaymentActualScreen />}
            ></Route>
            <Route path="budget" element={<BudgetScreen />}></Route>
            <Route path="role" element={<RoleScreen />}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
