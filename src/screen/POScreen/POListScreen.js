import { Button, Table } from 'antd';
import { useGetPOsQuery } from 'features/po/poSlice';
import React, {useEffect, useState} from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import {numberWithCommas} from "../../util/functionUtil";

const POListScreen = () => {
  const navigate = useNavigate();
  const columns = [
      {
        title: "PO No,",
        dataIndex: "po_no",
        key: "po_no",
      },
      {
        title: "Supplier",
        dataIndex: "supplier",
        key: "supplier",
      },
      {
        title: "Incharge",
        dataIndex: "incharge",
        key: "incharge",
      },
      {
        title: "Date",
        dataIndex: "date",
        key: "date",
      },
      {
        title: "Rev",
        dataIndex: "rev",
        key: "rev",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <span>
            <Button style={{ marginRight: 16 }} onClick={() => navigate(`/dash/po/${record.id}`)}>Xem</Button>
          </span>
        ),
      }
  ];
  const [searchParams] = useSearchParams();
  const idProject = searchParams.get("project_no")

  const { data } = useGetPOsQuery()
  const orderDetail = [];
  data?.data.map(item => {
    item.order_detail.map(val => {
      orderDetail.push(val);
    })
  })

  let totalAmount = 0;
  let totalAmountTax = 0;
  orderDetail.map(item => {
    totalAmount = item.amount;
    totalAmountTax = item.tax_price;
  })

  return (
      <div>

          <div className="flex justify-between">
              <div>
                  <p>Total amount: {numberWithCommas(totalAmount)}</p>
                  <p>Total amount (Incl TAX): {numberWithCommas(totalAmountTax)}</p>

              </div>
              <div>
                  <Button onClick={() => navigate(`/dash/po/create?project_no=${idProject}`)}>
                      Thêm đơn hàng
                  </Button>
              </div>
          </div>
          <div className="my-[10px]">
              <Table rowKey={(record) => record.id} columns={columns} dataSource={data?.data}/>
          </div>
      </div>
  )
}

export default POListScreen