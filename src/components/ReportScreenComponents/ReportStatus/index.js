import { Table } from "antd";
import { useTranslation } from "react-i18next";
import { StyledTitle } from "./styles";

const ReportProjectStatus = () => {
  const { t } = useTranslation(["common"]);

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
      title: `${t("tableContent.column.projectName")}`,
      dataIndex: "prjName",
      key: "prjName",
    },
    {
      title: `${t("tableContent.column.customer")}`,
      dataIndex: "cusName",
      key: "cusName",
    },
    {
      title: `${t("tableContent.column.categoryName")}`,
      dataIndex: "cateName",
      key: "cateName",
    },
    {
      title: `${t("tableContent.column.workType")}`,
      dataIndex: "cateWork",
      key: "cateWork",
    },
    {
      title: `${t("tableContent.column.shipment")}`,
      dataIndex: "shipmentNo",
      key: "shipmentNo",
    },
    {
      title: `${t("tableContent.column.po/contract")}`,
      children: [
        {
          title: `${t("tableContent.column.mass")}`,
          dataIndex: "weight",
          key: "weight",
        },
        {
          title: `${t("tableContent.column.deliveryDate")}`,
          dataIndex: "deliveryDate",
          key: "deliveryDate",
        },
      ],
    },
    {
      title: "Actual/ Thực tế hợp đồng",
      children: [
        {
          title: `${t("tableContent.column.actualContract")}`,
          dataIndex: "weightActual",
          key: "weightActual",
        },
        {
          title: `${t("tableContent.column.deliveryDate")}`,
          dataIndex: "deliveryDateActual",
          key: "deliveryDateActual",
        },
      ],
    },
    {
      title: `${t("tableContent.column.poAmountContractValue")}`,
      children: [
        {
          title: "USD",
          dataIndex: "USD",
          key: "USD",
        },
        {
          title: "VND",
          dataIndex: "VND",
          key: "VND",
        },
        {
          title: "EUR",
          dataIndex: "EUR",
          key: "EUR",
        },
      ],
    },
    {
      title: `${t("tableContent.column.poActualAmount")}`,
      children: [
        {
          title: "USD",
          dataIndex: "realUSD",
          key: "realUSD",
        },
        {
          title: "VND",
          dataIndex: "realVND",
          key: "realVND",
        },
        {
          title: "EUR",
          dataIndex: "realEUR",
          key: "realEUR",
        },
      ],
    },
    {
      title: `${t("tableContent.column.deliveryCondition")}`,
      dataIndex: "conditionShipment",
      conditionShipment: "key",
    },
    {
      title: `${t("tableContent.column.paymentCondition")}`,
      children: [
        {
          title: `${t("tableContent.column.advance")}`,
          dataIndex: "advance",
          key: "advance",
        },
        {
          title: `${t("tableContent.column.paymentForMaterials")}`,
          dataIndex: "material",
          key: "material",
        },
        {
          title: `${t("tableContent.column.1stPayment")}`,
          dataIndex: "payentFirst",
          key: "payentFirst",
        },
        {
          title: `${t("tableContent.column.2ndPayment")}`,
          dataIndex: "payentSecond",
          key: "payentSecond",
        },
        {
          title: `${t("tableContent.column.3rdPayment")}`,
          dataIndex: "payentThirty",
          key: "payentThirty",
        },
        {
          title: `${t("tableContent.column.finalPayment")}`,
          dataIndex: "payentFinal",
          key: "payentFinal",
        },
        {
          title: `${t("tableContent.column.paymentMethod")}`,
          dataIndex: "methodPayment",
          key: "methodPayment",
        },
        {
          title: `${t("tableContent.column.guaranteeCondition")}`,
          dataIndex: "conditionGuarantee",
          key: "conditionGuarantee",
        },
        {
          title: `${t("tableContent.column.penaltyRate")}`,
          dataIndex: "scalePunish",
          key: "scalePunish",
        },
      ],
    },
    {
      title: `${t("tableContent.column.projectPresident")}`,
      dataIndex: "manager",
      key: "manager",
    },
    {
      title: `${t("tableContent.column.projectManager")}`,
      dataIndex: "manage",
      key: "manage",
    },
  ];

  const data = [];

  data.push({
    key: 1,
    prjCode: "F0122",
    prjName: "BLACKPOINT",
    cusName: "BHI",
    cateName: "	HRSG Non-Pressure Parts",
    cateWork: "Fab",
    shipmentNo: "",
    weight: "2.127.244",
    deliveryDate: "15-Mar-2022",
    weightActual: "",
    deliveryDateActual: "",
    USD: "1.100.000",
    VND: "",
    EUR: "",
    realUSD: "",
    realVND: "",
    realEUR: "",
    conditionShipment: "FAS",
    advance: "",
    material: "",
    payentFirst: "",
    payentSecond: "",
    payentThirty: "",
    payentFinal: "",
    methodPayment: "",
    conditionGuarantee: "",
    scalePunish: "",
    manager: "(Mr. Jeff)",
    manage: "Mr. Anh",
  });
  data.push({
    key: 2,
    prjCode: "F0136",
    prjName: "DATAN 7(Taiwan)",
    cusName: "MCI",
    cateName: "	HRSG Secondary Structures",
    cateWork: "Fab",
    shipmentNo: "",
    weight: "545.000",
    deliveryDate: "31-Jan-2022",
    weightActual: "",
    deliveryDateActual: "",
    USD: "1.100.000",
    VND: "",
    EUR: "",
    realUSD: "",
    realVND: "",
    realEUR: "",
    conditionShipment: "FOB",
    advance: "",
    material: "",
    payentFirst: "",
    payentSecond: "",
    payentThirty: "",
    payentFinal: "T/T 15 Days L/C 45 Days",
    methodPayment:
      "Advance Payment Bond (10%) Performance Bond (10%) Warranty Bond (10%)",
    conditionGuarantee: "1%",
    scalePunish: "",
    manager: "(Mr. Van)",
    manage: "Mr. Dung",
  });
  data.push({
    key: 3,
    prjCode: "F0139",
    prjName: "SARAWAK (Malaysia)",
    cusName: "SECL",
    cateName: "Platform & Ladder",
    cateWork: "Fab",
    shipmentNo: "",
    weight: "193.000",
    deliveryDate: "30-Apr-2022",
    weightActual: "",
    deliveryDateActual: "",
    USD: "772.878",
    VND: "",
    EUR: "",
    realUSD: "",
    realVND: "",
    realEUR: "",
    conditionShipment: "DDP/FOB",
    advance: "",
    material: "",
    payentFirst: "",
    payentSecond: "",
    payentThirty: "",
    payentFinal: "T/T 45 Days",
    methodPayment:
      "Advance Payment Bond (10%)Performance Bond (10%) Warranty Bond (10%)",
    conditionGuarantee: "0.15% per day",
    scalePunish: "",
    manager: "(Mr. Dinh)",
    manage: "Mr. The",
  });
  data.push({
    key: 4,
    prjCode: "F0141",
    prjName: "SHURTAN(Uzbekistan)",
    cusName: "JNK",
    cateName: "Fired Heate",
    cateWork: "Fab",
    shipmentNo: "",
    weight: "1.163.116",
    deliveryDate: "31-Jan-2022",
    weightActual: "",
    deliveryDateActual: "",
    USD: "3.350.000",
    VND: "",
    EUR: "",
    realUSD: "",
    realVND: "",
    realEUR: "",
    conditionShipment: "FCA Shop",
    advance: "",
    material: "",
    payentFirst: "",
    payentSecond: "",
    payentThirty: "",
    payentFinal: "T/T 30 Days",
    methodPayment: "Advance Payment Bond (10%)",
    conditionGuarantee: "2%",
    scalePunish: "",
    manager: "(Mr. Dinh)",
    manage: "Mr. The",
  });
  data.push({
    key: 5,
    prjCode: "F0143",
    prjName: "BATANGAS (Philippines)",
    cusName: "VOGT POWER",
    cateName: "HRSG Non-Pressure Parts",
    cateWork: "Fab",
    shipmentNo: "",
    weight: "3.405.783",
    deliveryDate: "09-Jan-2022",
    weightActual: "",
    deliveryDateActual: "",
    USD: "6.900.000",
    VND: "",
    EUR: "",
    realUSD: "",
    realVND: "",
    realEUR: "",
    conditionShipment: "FAS",
    advance: "",
    material: "",
    payentFirst: "",
    payentSecond: "",
    payentThirty: "",
    payentFinal: "T/T 60 Days",
    methodPayment: "Advance Payment Bond (10%)Warranty Bond (10%)",
    conditionGuarantee: "1st Week = 3% 2nd Week = 5% >3rd Week = 10%",
    scalePunish: "",
    manager: "(Mr. Dinh)",
    manage: "Mr. The",
  });
  data.push({
    key: 6,
    prjCode: "F0144",
    prjName: "BATANGAS (Philippines)",
    cusName: "VOGT POWER",
    cateName: "HRSG Non-Pressure Parts",
    cateWork: "Fab",
    shipmentNo: "",
    weight: "3.405.783",
    deliveryDate: "09-Jan-2022",
    weightActual: "",
    deliveryDateActual: "",
    USD: "6.900.000",
    VND: "",
    EUR: "",
    realUSD: "",
    realVND: "",
    realEUR: "",
    conditionShipment: "FAS",
    advance: "",
    material: "",
    payentFirst: "",
    payentSecond: "",
    payentThirty: "",
    payentFinal: "T/T 60 Days",
    methodPayment: "Advance Payment Bond (10%)Warranty Bond (10%)",
    conditionGuarantee: "1st Week = 3% 2nd Week = 5% >3rd Week = 10%",
    scalePunish: "",
    manager: "(Mr. Dinh)",
    manage: "Mr. The",
  });

  data.push({
    key: 7,
    prjCode: "F0145",
    prjName: "BATANGAS (Philippines)",
    cusName: "VOGT POWER",
    cateName: "HRSG Non-Pressure Parts",
    cateWork: "Fab",
    shipmentNo: "",
    weight: "3.405.783",
    deliveryDate: "09-Jan-2022",
    weightActual: "",
    deliveryDateActual: "",
    USD: "6.900.000",
    VND: "",
    EUR: "",
    realUSD: "",
    realVND: "",
    realEUR: "",
    conditionShipment: "FAS",
    advance: "",
    material: "",
    payentFirst: "",
    payentSecond: "",
    payentThirty: "",
    payentFinal: "T/T 60 Days",
    methodPayment: "Advance Payment Bond (10%)Warranty Bond (10%)",
    conditionGuarantee: "1st Week = 3% 2nd Week = 5% >3rd Week = 10%",
    scalePunish: "",
    manager: "(Mr. Dinh)",
    manage: "Mr. The",
  });

  return (
    <div>
      <StyledTitle>Project infomation</StyledTitle>
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
