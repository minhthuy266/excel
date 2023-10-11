import HeaderSection from "components/ExpensesScreenComponents/HeaderSection";
import TableContent from "components/ExpensesScreenComponents/TableContent";
import { useTranslation } from "react-i18next";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ExpensesScreenWrapper } from "./styles";

const ExpensesScreen = () => {
  const { t } = useTranslation(["expensesScreen", "common"]);

  const columns = [
    {
      title: `${t("tableContent.column.code", { ns: "common" })}`,
      dataIndex: "code",
      key: "code",
    },
    {
      title: `${t("tableContent.column.projectName", { ns: "common" })}`,
      dataIndex: "project",
      key: "project",
    },

    {
      title: `${t("tableContent.column.customer", { ns: "common" })}`,
      dataIndex: "customer",
      key: "customer",
    },

    {
      title: `${t("tableContent.column.totalExpenses", { ns: "common" })}`,
      dataIndex: "totalCost",
      key: "totalCost",
    },

    {
      title: "",
      key: "",
      render: (_, record) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <IoDocumentTextOutline /> &nbsp;{" "}
          {t("tableContent.column.details", { ns: "common" })}
        </div>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      code: "1",
      project: "Workshop 5ha",
      customer: "AMECC",
      totalCost: "10000",
    },
    {
      key: "2",
      code: "2",
      project: "Black Point",
      customer: "MIC",
      totalCost: "10000",
    },
    {
      key: "3",
      code: "3",
      project: "Datan",
      customer: "ABCX",
      totalCost: "10000",
    },

    {
      key: "4",
      code: "4",
      project: "Joe Black",
      customer: "KDJS",
      totalCost: "10000",
    },

    {
      key: "5",
      code: "5",
      project: "Workshop 5ha",
      customer: "AMECC",
      totalCost: "10000",
    },
    {
      key: "6",
      code: "6",
      project: "Black Point",
      customer: "MIC",
      totalCost: "10000",
    },
    {
      key: "7",
      code: "7",
      project: "Datan",
      customer: "ABCX",
      totalCost: "10000",
    },

    {
      key: "8",
      code: "8",
      project: "Joe Black",
      customer: "KDJS",
      totalCost: "10000",
    },

    {
      key: "9",
      code: "9",
      project: "Workshop 5ha",
      customer: "AMECC",
      totalCost: "10000",
    },
    {
      key: "10",
      code: "10",
      project: "Black Point",
      customer: "MIC",
      totalCost: "10000",
    },
    {
      key: "11",
      code: "11",
      project: "Datan",
      customer: "ABCX",
      totalCost: "10000",
    },

    {
      key: "12",
      code: "12",
      project: "Joe Black",
      customer: "KDJS",
      totalCost: "10000",
    },

    {
      key: "13",
      code: "13",
      project: "Workshop 5ha",
      customer: "AMECC",
      totalCost: "10000",
    },
    {
      key: "14",
      code: "14",
      project: "Black Point",
      customer: "MIC",
      totalCost: "10000",
    },
    {
      key: "15",
      code: "15",
      project: "Datan",
      customer: "ABCX",
      totalCost: "10000",
    },

    {
      key: "16",
      code: "16",
      project: "Joe Black",
      customer: "KDJS",
      totalCost: "10000",
    },
  ];

  const headers = [
    {
      label: `${t("tableContent.column.code", { ns: "common" })}`,
      key: "code",
    },
    {
      label: `${t("tableContent.column.projectName", { ns: "common" })}`,
      key: "project",
    },
    {
      label: `${t("tableContent.column.customer", { ns: "common" })}`,
      key: "customer",
    },
    {
      label: `${t("tableContent.column.totalExpenses", { ns: "common" })}`,
      key: "totalExpenses",
    },
  ];

  return (
    <ExpensesScreenWrapper>
      <HeaderSection data={data} columns={columns} headers={headers} />
      <TableContent data={data} columns={columns} />
    </ExpensesScreenWrapper>
  );
};

export default ExpensesScreen;
