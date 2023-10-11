import { Progress } from "antd";
import HeaderSection from "components/ManufacturingScreenComponents/HeaderSection";
import TableContent from "components/ManufacturingScreenComponents/TableContent";
import { IoDocumentTextOutline } from "react-icons/io5";
import variables from "globalStyles/variables.scss";
import { useTranslation } from "react-i18next";

const ManufacturingScreen = () => {
  const { t } = useTranslation(["common"]);

  const columns = [
    {
      title: `${t("tableContent.column.code")}`,
      dataIndex: "code",
      key: "code",
    },
    {
      title: `${t("tableContent.column.projectName")}`,
      dataIndex: "project",
      key: "project",
    },

    {
      title: `${t("tableContent.column.customer")}`,
      dataIndex: "customer",
      key: "customer",
      width: "10%",
    },

    {
      title: `${t("tableContent.column.phase")}`,
      dataIndex: "",
      key: "",
      render: (_, record) => (
        <>
          {record.phase.map((el) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                {el.name}
              </div>
            );
          })}
        </>
      ),
    },

    {
      title: `${t("tableContent.column.amountOfWorkload")}`,
      dataIndex: "amountOfWorkload",
      key: "amountOfWorkload",
      render: (_, record) => (
        <>
          {record.phase.map((el) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                {el.amountOfWorkload}
              </div>
            );
          })}
        </>
      ),
      width: "12%",
    },

    {
      title: `${t("tableContent.column.construction")}`,
      dataIndex: "construction",
      key: "construction",
      render: (_, record) => (
        <>
          {record.phase.map((el) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                {el.construction}
              </div>
            );
          })}
        </>
      ),
    },

    {
      title: `${t("tableContent.column.complete")}`,
      dataIndex: "complete",
      key: "complete",
      render: (_, record) => (
        <>
          {record.phase.map((el) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                {el.complete}
              </div>
            );
          })}
        </>
      ),
      width: "10%",
    },

    {
      title: `${t("tableContent.column.percentageOfCompletion")}`,
      dataIndex: "percentageOfCompletion",
      key: "percentageOfCompletion",
      render: (_, record) => (
        <>
          {record.phase.map((el) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Progress
                  percent={el.percentageOfCompletion}
                  size="small"
                  strokeColor={variables.colorPrimary60}
                />
              </div>
            );
          })}
        </>
      ),
    },

    {
      title: "",
      key: "",
      render: (_, record) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IoDocumentTextOutline /> &nbsp; {t("tableContent.column.details")}
        </div>
      ),
      align: "right",
    },
  ];

  const data = [
    {
      key: "1",
      code: "1",
      project: "Workshop 5ha",
      customer: "AMECC",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
    {
      key: "2",
      code: "2",
      project: "Black Point",
      customer: "MIC",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
    {
      key: "3",
      code: "3",
      project: "Datan",
      customer: "ABCX",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },

    {
      key: "4",
      code: "4",
      project: "Joe Black",
      customer: "KDJS",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },

    {
      key: "5",
      code: "5",
      project: "Workshop 5ha",
      customer: "AMECC",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
    {
      key: "6",
      code: "6",
      project: "Black Point",
      customer: "MIC",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
    {
      key: "7",
      code: "7",
      project: "Datan",
      customer: "ABCX",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },

    {
      key: "8",
      code: "8",
      project: "Joe Black",
      customer: "KDJS",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },

    {
      key: "9",
      code: "9",
      project: "Workshop 5ha",
      customer: "AMECC",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
    {
      key: "10",
      code: "10",
      project: "Black Point",
      customer: "MIC",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
    {
      key: "11",
      code: "11",
      project: "Datan",
      customer: "ABCX",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },

    {
      key: "12",
      code: "12",
      project: "Joe Black",
      customer: "KDJS",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },

    {
      key: "13",
      code: "13",
      project: "Workshop 5ha",
      customer: "AMECC",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
    {
      key: "14",
      code: "14",
      project: "Black Point",
      customer: "MIC",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
    {
      key: "15",
      code: "15",
      project: "Datan",
      customer: "ABCX",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },

    {
      key: "16",
      code: "16",
      project: "Joe Black",
      customer: "KDJS",
      phase: [
        {
          id: "1",
          name: "Pha cắt",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "2",
          name: "Gò/Hàn",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },

        {
          id: "3",
          name: "Sơn mạ",
          amountOfWorkload: "116.729,22",
          construction: "6.395,22",
          complete: "111.982,39",
          percentageOfCompletion: "80",
        },
      ],
    },
  ];

  const headers = [
    { label: "Mã", key: "code" },
    { label: "Tên dự án", key: "project" },
    { label: "Khách hàng", key: "customer" },
    { label: "Tiến độ", key: "progress" },
    { label: "Thiết kế", key: "design" },
    { label: "Mua sắm", key: "purchase" },
    { label: "Giá trị hợp đồng", key: "contractValue" },
    { label: "Thanh toán", key: "payment" },
  ];

  return (
    <div>
      <HeaderSection data={data} columns={columns} headers={headers} />
      <TableContent data={data} columns={columns} />
    </div>
  );
};

export default ManufacturingScreen;
