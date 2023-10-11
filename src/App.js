import { theme } from "antd";
import DashLayout from "components/common/DashLayout";
import Layout from "components/common/Layout";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import ConstructionScreen from "screen/ConstructionScreen";
import DesignBOMScreen from "screen/DesignScreen/DesignBOMScreen";
import DesignFileScreen from "screen/DesignScreen/DesignFileScreen";
import DesignMPRScreen from "screen/DesignScreen/DesignMPRScreen";
import DesignOverallScreen from "screen/DesignScreen/DesignOverallScreen";
import DocsScreen from "screen/DocsScreen";
import ExpensesScreen from "screen/ExpensesScreen";
import GeneralScreen from "screen/GeneralScreen";
import LoginScreen from "screen/LoginScreen";
import ManufacturingScreen from "screen/ManufacturingScreen";
import PartnerCustomerScreen from "screen/PartnerScreen/PartnerCustomerScreen";
import PartnerOtherScreen from "screen/PartnerScreen/PartnerOtherScreen";
import PartnerSubcontractorScreen from "screen/PartnerScreen/PartnerSubcontractorScreen";
import PartnerSupplierScreen from "screen/PartnerScreen/PartnerSupplierScreen";
import PersonnelAccountScreen from "screen/PersonnelScreen/PersonnelAccountScreen";
import PersonnelDecentralizationScreen from "screen/PersonnelScreen/PersonnelDecentralizationScreen";
import PersonnelDepartmentScreen from "screen/PersonnelScreen/PersonnelDepartmentScreen";
import ProjectScreen from "screen/ProjectScreen";
import PublicScreen from "screen/PublicScreen";
import ReportDCCScreen from "screen/ReportScreen/ReportDCCScreen";
import ReportFABScreen from "screen/ReportScreen/ReportFABScreen";
import ReportManufacturingScreen from "screen/ReportScreen/ReportManufacturingScreen";
import ReportOverallScreen from "screen/ReportScreen/ReportOverallScreen";
import ReportPDMScreen from "screen/ReportScreen/ReportPDMScreen";
import ReportPLDScreen from "screen/ReportScreen/ReportPLDScreen";
import ReportProjectStatusScreen from "screen/ReportScreen/ReportProjectStatusScreen";
import ReportQAQCSCreen from "screen/ReportScreen/ReportQAQCScreen";
import ReportSubcontractorScreen from "screen/ReportScreen/ReportSubcontractorScreen";
import ShoppingScreen from "screen/ShoppingScreen";
import TransportationScreen from "screen/TransportationScreen";
import WarehouseCancelScreen from "screen/WarehouseScreen/WarehouseCancelScreen";
import WarehouseExportScreen from "screen/WarehouseScreen/WarehouseExportScreen";
import WarehouseInventoryCheckScreen from "screen/WarehouseScreen/WarehouseInventoryCheckScreen";
import WarehouseMaterialScreen from "screen/WarehouseScreen/WarehouseMaterialScreen";
import WarehouseReceiptScreen from "screen/WarehouseScreen/WarehouseReceiptScreen";
import WarehouseRequireCheckScreen from "screen/WarehouseScreen/WarehouseRequireCheckScreen";
import RequireAuth from "./features/auth/RequireAuth";

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
            <Route path="project" element={<ProjectScreen />}></Route>
            <Route path="expenses" element={<ExpensesScreen />}></Route>
            <Route path="docs" element={<DocsScreen />}></Route>
            <Route path="design">
              <Route
                path="designOverall"
                element={<DesignOverallScreen />}
              ></Route>
              <Route path="designFile" element={<DesignFileScreen />}></Route>
              <Route path="designMPR" element={<DesignMPRScreen />}></Route>
              <Route path="designBOM" element={<DesignBOMScreen />}></Route>
            </Route>
            <Route
              path="manufacturing"
              element={<ManufacturingScreen />}
            ></Route>
            <Route
              path="transportation"
              element={<TransportationScreen />}
            ></Route>
            <Route path="construction" element={<ConstructionScreen />}></Route>
            <Route path="warehouse">
              <Route
                path="warehouseMaterial"
                element={<WarehouseMaterialScreen />}
              ></Route>
              <Route
                path="warehouseRequireCheck"
                element={<WarehouseRequireCheckScreen />}
              ></Route>
              <Route
                path="warehouseInventoryCheck"
                element={<WarehouseInventoryCheckScreen />}
              ></Route>
              <Route
                path="warehouseReceipt"
                element={<WarehouseReceiptScreen />}
              ></Route>
              <Route
                path="warehouseExport"
                element={<WarehouseExportScreen />}
              ></Route>
              <Route
                path="warehouseCancel"
                element={<WarehouseCancelScreen />}
              ></Route>
            </Route>
            <Route path="shopping" element={<ShoppingScreen />}></Route>

            <Route path="report">
              <Route
                path="reportOverall"
                element={<ReportOverallScreen />}
              ></Route>
              <Route
                path="reportProjectStatus"
                element={<ReportProjectStatusScreen />}
              ></Route>
              <Route path="reportFAB" element={<ReportFABScreen />}></Route>
              <Route path="reportDCC" element={<ReportDCCScreen />}></Route>
              <Route path="reportPLD" element={<ReportPLDScreen />}></Route>
              <Route path="reportPDM" element={<ReportPDMScreen />}></Route>
              <Route path="reportQAQC" element={<ReportQAQCSCreen />}></Route>
              <Route
                path="reportManufacturing"
                element={<ReportManufacturingScreen />}
              ></Route>
              <Route
                path="reportSubcontractor"
                element={<ReportSubcontractorScreen />}
              ></Route>
            </Route>

            <Route path="personnel">
              <Route
                path="personnelAccount"
                element={<PersonnelAccountScreen />}
              ></Route>
              <Route
                path="personnelDepartment"
                element={<PersonnelDepartmentScreen />}
              ></Route>
              <Route
                path="personnelDecentralization"
                element={<PersonnelDecentralizationScreen />}
              ></Route>
            </Route>

            <Route path="partner">
              <Route
                path="partnerCustomer"
                element={<PartnerCustomerScreen />}
              ></Route>
              <Route
                path="partnerSupplier"
                element={<PartnerSupplierScreen />}
              ></Route>
              <Route
                path="partnerSubcontractor"
                element={<PartnerSubcontractorScreen />}
              ></Route>
              <Route
                path="partnerOther"
                element={<PartnerOtherScreen />}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
