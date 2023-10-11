import { Table } from "antd";
import { useTranslation } from "react-i18next";
import { StyledTableWrapper } from "./styles";

const TableContent = () => {
  const { t } = useTranslation(["common"]);

  const columns = [
    {
      title: `${t("tableContent.column.code")}`,
      dataIndex: "code",
      key: "code",
    },
    {
      title: `${t("tableContent.column.requirement")}`,
      dataIndex: "mpr",
      key: "mpr",
    },

    {
      title: (
        <div>
          <div>{t("tableContent.column.material")}</div>
        </div>
      ),
      dataIndex: "material",
      key: "material",
    },

    {
      title: (
        <div>
          <div>{t("tableContent.column.size")}</div>
          <div>{t("tableContent.column.unit")}</div>
        </div>
      ),
      dataIndex: "",
      key: "",
    },

    {
      title: (
        <div>
          <div>{t("tableContent.column.specificationsChange")}</div>
        </div>
      ),
      dataIndex: "specificationsChange",
      key: "specificationsChange",
    },

    {
      title: `${t("tableContent.column.actualRemain")}`,
      dataIndex: "actualRemain",
      key: "actualRemain",
    },

    {
      title: `${t("tableContent.column.requiredAmount")}`,
      dataIndex: "requireAmount",
      key: "requireAmount",
      children: [
        {
          title: `${t("tableContent.column.amountAcronym")}`,
          dataIndex: "requireAmountChild1",
          key: "requireAmountChild1",
        },
        {
          title: `${t("tableContent.column.massAcronym")}`,
          dataIndex: "requireAmountChild2",
          key: "requireAmountChild2",
        },
        {
          title: `${t("tableContent.column.arrived")}`,
          dataIndex: "requireAmountChild3",
          key: "requireAmountChild3",
        },
      ],
    },

    {
      title: `${t("tableContent.column.status2")}`,
      dataIndex: "status",
      key: "status",
      children: [
        {
          title: `${t("tableContent.column.amountAcronym")}`,
          dataIndex: "statusChild1",
          key: "statusChild1",
        },
        {
          title: `${t("tableContent.column.massAcronym")}`,
          dataIndex: "statusChild2",
          key: "statusChild2",
        },
      ],
    },

    {
      title: "QA/QC",
      dataIndex: "status",
      key: "qaqc",
      children: [
        {
          title: `${t("tableContent.column.status2")}`,
          dataIndex: "qaqcChild1",
          key: "qaqcChild1",
        },
        {
          title: `${t("tableContent.column.date")}`,
          dataIndex: "qaqcChild2",
          key: "qaqcChild2",
        },
      ],
    },
  ];

  const data = [
    {
      key: "1",
      code: "1",
      mpr: "Workshop 5ha",
      material: "AMECC",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
    {
      key: "2",
      code: "2",
      mpr: "Black Point",
      material: "MIC",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
    {
      key: "3",
      code: "3",
      mpr: "Datan",
      material: "ABCX",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },

    {
      key: "4",
      code: "4",
      mpr: "Joe Black",
      material: "KDJS",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },

    {
      key: "5",
      code: "5",
      mpr: "Workshop 5ha",
      material: "AMECC",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
    {
      key: "6",
      code: "6",
      mpr: "Black Point",
      material: "MIC",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
    {
      key: "7",
      code: "7",
      mpr: "Datan",
      material: "ABCX",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },

    {
      key: "8",
      code: "8",
      mpr: "Joe Black",
      material: "KDJS",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },

    {
      key: "9",
      code: "9",
      mpr: "Workshop 5ha",
      material: "AMECC",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
    {
      key: "10",
      code: "10",
      mpr: "Black Point",
      material: "MIC",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
    {
      key: "11",
      code: "11",
      mpr: "Datan",
      material: "ABCX",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },

    {
      key: "12",
      code: "12",
      mpr: "Joe Black",
      material: "KDJS",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },

    {
      key: "13",
      code: "13",
      mpr: "Workshop 5ha",
      material: "AMECC",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
    {
      key: "14",
      code: "14",
      mpr: "Black Point",
      material: "MIC",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
    {
      key: "15",
      code: "15",
      mpr: "Datan",
      material: "ABCX",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },

    {
      key: "16",
      code: "16",
      mpr: "Joe Black",
      material: "KDJS",
      size: '3" SCH.STD - 6000L',
      unit: "Bar/Cây",
      specificationsChange: "60.3x8x6000",
      actualRemain: "38.7",
      requireAmountChild1: "5",
      requireAmountChild2: "338.7",
      requireAmountChild3: "274.5",
      statusChild1: "Đủ",
      statusChild2: "Không đủ",
      qaqcChild1: "OK",
      qaqcChild2: "13/02/2023",
    },
  ];

  return (
    <StyledTableWrapper>
      <Table columns={columns} dataSource={data} bordered />
    </StyledTableWrapper>
  );
};

export default TableContent;
