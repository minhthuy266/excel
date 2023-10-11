import { Table } from "antd";
import { useTranslation } from "react-i18next";
import { StyledTableWrapper } from "./styles";

const TableContent = () => {
  const { t } = useTranslation(["common", "warehouseRequireCheckScreen"]);

  const columns = [
    {
      title: `${t("tableContent.column.code")}`,
      dataIndex: "id",
    },
    {
      title: `${t("tableContent.column.projectName")}`,
      dataIndex: "project",
    },
    {
      title: (
        <div>
          <div>{t("tableContent.column.requiredBy")}</div>
          <div>{t("tableContent.column.requiredDate")}</div>
        </div>
      ),
      dataIndex: "requiredBy",
      render: (text, row) => (
        <div>
          <div>
            <div>{text}</div>
            <div>{row.requiredDate}</div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div>
          <div>{t("tableContent.column.checkBy")}</div>
          <div>{t("tableContent.column.checkDate")}</div>
        </div>
      ),
      dataIndex: "approvedBy",
      render: (text, row) => (
        <div>
          <div>
            <div>{text}</div>
            <div>{row.approvedDate}</div>
          </div>
        </div>
      ),
    },
    {
      title: `${t("tableContent.column.amount")}`,
      dataIndex: "amount",
    },
    {
      title: `${t("tableContent.column.totalWeight")}`,
      dataIndex: "totalWeight",
    },
    {
      title: `${t("tableContent.column.netWeight")}`,
      dataIndex: "netWeight",
    },
    {
      title: `${t("tableContent.column.status")}`,
      dataIndex: "status",
    },
  ];

  const data = [
    {
      key: "1",
      id: "#RES-000001",
      project: "Workshop 5ha",
      requiredBy: "Mr. Phúc",
      requiredDate: "30-Sep-22",
      approvedBy: "Mr. Phúc",
      approvedDate: "30-Sep-22",
      amount: "256",
      totalWeight: "838202",
      netWeight: "29577",
      status: `${t("status1", { ns: "warehouseRequireCheckScreen" })}`,
    },
    {
      key: "2",
      id: "#RES-000002",
      project: "Black Point",
      requiredBy: "Mr. Toàn",
      requiredDate: "30-Sep-22",
      approvedBy: "Mr. Phúc",
      approvedDate: "30-Sep-22",
      amount: "554",
      totalWeight: "838202",
      netWeight: "29577",
      status: `${t("status2", { ns: "warehouseRequireCheckScreen" })}`,
    },
    {
      key: "3",
      id: "#RES-000003",
      project: "Sarawwak",
      requiredBy: "Mr. Kiên",
      requiredDate: "30-Sep-22",
      approvedBy: "Mr. Phúc",
      approvedDate: "30-Sep-22",
      amount: "64",
      totalWeight: "838202",
      netWeight: "29577",
      status: `${t("status3", { ns: "warehouseRequireCheckScreen" })}`,
    },
  ];

  return (
    <StyledTableWrapper>
      <Table
        columns={columns}
        dataSource={data}
        title={() =>
          `${t("titleTable", { ns: "warehouseRequireCheckScreen" })}`
        }
      />
    </StyledTableWrapper>
  );
};

export default TableContent;
