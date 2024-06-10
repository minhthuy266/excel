import { Button, Table } from "antd";
import { useGetCostControlsQuery } from "features/costControl/costControlSlice";
import React from "react";
import {useNavigate, useSearchParams} from "react-router-dom";

const CostControlListScreen = () => {
  const navigate = useNavigate();
  const { data } = useGetCostControlsQuery();
  const [searchParams] = useSearchParams();
  const idProject = (searchParams.get("project_no"))

  const columns = [
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "Work ID",
      dataIndex: "work_id",
      key: "work_id",
    },
    {
      title: "Unit",
      dataIndex: "unit",
      key: "unit",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
    {
      title: "Unit Price",
      dataIndex: "unit_price",
      key: "unit_price",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Payment Amount",
      dataIndex: "payment_amount",
      key: "payment_amount",
    },
    {
      title: "Invoice Amount",
      dataIndex: "invoice_amount",
      key: "invoice_amount",
    },
    {
      title: "Invoice No",
      dataIndex: "invoice_no",
      key: "invoice_no",
    },
    {
      title: "Invoice Date",
      dataIndex: "invoice_date",
      key: "invoice_date",
    },
    {
      title: "Cost ID",
      dataIndex: "cost_id",
      key: "cost_id",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            style={{ marginRight: 16 }}
            onClick={() => navigate(`/dash/cost-control/${record.id}`)}
          >
            Xem
          </Button>
        </span>
      ),
    },
  ];

  return (
      <div>
        <div className="flex justify-end mb-4">
          <Button onClick={() => navigate(`/dash/cost-control/create?project_no=${idProject}`)}>
            Thêm Cost
          </Button>
        </div>
        <Table rowKey={(record) => record.id} columns={columns} dataSource={data?.data}/>
      </div>
  );
};

export default CostControlListScreen;
