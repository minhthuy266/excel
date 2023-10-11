import { Table } from "antd";
import { useTranslation } from "react-i18next";
import { StyledTitle } from "./styles";

const ReportProjectStatus = () => {
  const { t } = useTranslation(["common", "reportScreen"]);

  const columns = [
    {
      title: "No.",
      dataIndex: "key",
      key: "key",
      width: 50,
    },
    {
      title: `${t("tableContent.column.code")}`,
      dataIndex: "prjCode",
      key: "prjCode",
    },
    {
      title: `${t("tableContent.column.poContractAmount")}`,
      children: [
        {
          title: `${t("tableContent.column.po")}`,
          dataIndex: "PO",
          key: "PO",
        },
        {
          title: `${t("tableContent.column.actual")}`,
          dataIndex: "actual",
          key: "actual",
        },
        {
          title: `${t("tableContent.column.curr")}`,
          dataIndex: "curr",
          key: "curr",
        },
      ],
    },
    {
      title: `${t("tableContent.column.advancePaymentBond")}`,
      children: [
        {
          title: `${t("tableContent.column.startedDate")}`,
          dataIndex: "start_date_1",
          key: "start_date_1",
        },
        {
          title: `${t("tableContent.column.finishedDate")}`,
          dataIndex: "finished_date_1",
          key: "finished_date_1",
        },
        {
          title: `${t("tableContent.column.weight")}`,
          dataIndex: "weight_1",
          key: "weight_1",
        },
        {
          title: `${t("tableContent.column.plan")}`,
          dataIndex: "plan_1",
          key: "plan_1",
        },
        {
          title: `${t("tableContent.column.actual")}`,
          dataIndex: "actual_1",
          key: "actual_1",
        },
      ],
    },

    {
      title: `${t("tableContent.column.performanceBond")}`,
      children: [
        {
          title: `${t("tableContent.column.startedDate")}`,
          dataIndex: "start_date_2",
          key: "start_date_2",
        },
        {
          title: `${t("tableContent.column.finishedDate")}`,
          dataIndex: "finished_date_2",
          key: "finished_date_2",
        },
        {
          title: `${t("tableContent.column.weight")}`,
          dataIndex: "weight_2",
          key: "weight_2",
        },
        {
          title: `${t("tableContent.column.plan")}`,
          dataIndex: "plan_2",
          key: "plan_2",
        },
        {
          title: `${t("tableContent.column.actual")}`,
          dataIndex: "actual_2",
          key: "actual_2",
        },
      ],
    },

    {
      title: `${t("tableContent.column.warrantyBond")}`,
      children: [
        {
          title: `${t("tableContent.column.startedDate")}`,
          dataIndex: "start_date_3",
          key: "start_date_3",
        },
        {
          title: `${t("tableContent.column.finishedDate")}`,
          dataIndex: "finished_date_3",
          key: "finished_date_3",
        },
        {
          title: `${t("tableContent.column.weight")}`,
          dataIndex: "weight_3",
          key: "weight_3",
        },
        {
          title: `${t("tableContent.column.plan")}`,
          dataIndex: "plan_3",
          key: "plan_3",
        },
        {
          title: `${t("tableContent.column.actual")}`,
          dataIndex: "actual_3",
          key: "actual_3",
        },
      ],
    },

    {
      title: `${t("tableContent.column.totalPlan")}`,
      dataIndex: "total_plan",
      key: "total_plan",
    },

    {
      title: `${t("tableContent.column.totalActualPlan")}`,
      dataIndex: "total_actual",
      key: "total_actual",
    },
  ];

  const data = [];

  data.push({
    key: 1,
    prjCode: "F0136",
    PO: "1,100,000",
    actual: "-",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "30%",
    plan_1: "30%",
    actual_1: "30%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "30%",
    plan_2: "30%",
    actual_2: "30%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "30%",
    plan_3: "30%",
    actual_3: "30%",
    total_plan: "60%",
    total_actual: "60%",
  });
  data.push({
    key: 2,
    prjCode: "F0139",
    PO: "772.877,64",
    actual: "605560,16",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "30%",
    plan_1: "30%",
    actual_1: "30%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "30%",
    plan_2: "30%",
    actual_2: "30%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "30%",
    plan_3: "30%",
    actual_3: "30%",
    total_plan: "60%",
    total_actual: "60%",
  });
  data.push({
    key: 3,
    prjCode: "F0141",
    PO: "3,350,000",
    actual: "-",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "30%",
    plan_1: "30%",
    actual_1: "30%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "30%",
    plan_2: "30%",
    actual_2: "30%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "40%",
    plan_3: "0%",
    actual_3: "0%",
    total_plan: "60%",
    total_actual: "60%",
  });

  data.push({
    key: 4,
    prjCode: "F0143",
    PO: "6,900,000",
    actual: "7,550,547.21",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "50%",
    plan_1: "50%",
    actual_1: "50%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "0%",
    plan_2: "0%",
    actual_2: "0%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "50%",
    plan_3: "50%",
    actual_3: "50%",
    total_plan: "100%",
    total_actual: "100%",
  });
  data.push({
    key: 5,
    prjCode: "F0146",
    PO: "2,700,000",
    actual: "-",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "30%",
    plan_1: "30%",
    actual_1: "30%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "30%",
    plan_2: "30%",
    actual_2: "30%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "40%",
    plan_3: "0%",
    actual_3: "0%",
    total_plan: "60%",
    total_actual: "60%",
  });
  data.push({
    key: 6,
    prjCode: "F0149",
    PO: "141,000",
    actual: "153,598",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "50%",
    plan_1: "50%",
    actual_1: "50%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "0%",
    plan_2: "0%",
    actual_2: "0%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "50%",
    plan_3: "50%",
    actual_3: "0%",
    total_plan: "100%",
    total_actual: "100%",
  });
  data.push({
    key: 7,
    prjCode: "F0152",
    PO: "520,000",
    actual: "556,733",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "50%",
    plan_1: "50%",
    actual_1: "50%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "0%",
    plan_2: "0%",
    actual_2: "0%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "50%",
    plan_3: "50%",
    actual_3: "0%",
    total_plan: "100%",
    total_actual: "100%",
  });
  data.push({
    key: 8,
    prjCode: "F0154",
    PO: "432,000",
    actual: "-",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "30%",
    plan_1: "30%",
    actual_1: "30%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "30%",
    plan_2: "30%",
    actual_2: "30%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "40%",
    plan_3: "0%",
    actual_3: "0%",
    total_plan: "60%",
    total_actual: "60%",
  });

  data.push({
    key: 9,
    prjCode: "F0155",
    PO: "30,000",
    actual: "-",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "50%",
    plan_1: "50%",
    actual_1: "50%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "0%",
    plan_2: "0%",
    actual_2: "0%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "50%",
    plan_3: "50%",
    actual_3: "0%",
    total_plan: "100%",
    total_actual: "50%",
  });
  data.push({
    key: 10,
    prjCode: "F0159",
    PO: "337,227",
    actual: "349,760.31",
    curr: "USD",
    start_date_1: "",
    finished_date_1: "",
    weight_1: "0%",
    plan_1: "0%",
    actual_1: "0%",
    start_date_2: "",
    finished_date_2: "",
    weight_2: "0%",
    plan_2: "0%",
    actual_2: "0%",
    start_date_3: "",
    finished_date_3: "",
    weight_3: "0%",
    plan_3: "0%",
    actual_3: "0%",
    total_plan: "0%",
    total_actual: "0%",
  });

  return (
    <div>
      <StyledTitle>{t("fabScreen.title", { ns: "reportScreen" })}</StyledTitle>
      <Table
        columns={columns}
        dataSource={data}
        bordered={true}
        size="middle"
        scroll={{ x: "calc(5500px + 50%)", y: "100%" }}
      />
    </div>
  );
};

export default ReportProjectStatus;
