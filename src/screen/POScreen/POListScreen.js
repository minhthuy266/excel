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
        title: "Total amount",
        dataIndex: "totalAmount",
        key: "totalAmount",
      },
      {
        title: "Total amount (Incl TAX)",
        dataIndex: "totalAmountTax",
        key: "totalAmountTax",
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

  const newData = data?.data.map(item => {
    let totalAmount = 0;
    let totalAmountTax = 0;

    item.order_detail.map(val => {
      totalAmount += val.amount
      totalAmountTax += val.tax_price;
    })

    return {
      ...item,
      totalAmount: numberWithCommas(totalAmount),
      totalAmountTax: numberWithCommas(totalAmountTax)
    }

  })
  console.log(newData)
  return (
      <div>

          <div className="flex justify-end">
              <div>
                  <Button onClick={() => navigate(`/dash/po/create?project_no=${idProject}`)}>
                      Thêm đơn hàng
                  </Button>
              </div>
          </div>
          <div className="my-[10px]">
              <Table rowKey={(record) => record.id} columns={columns} dataSource={newData}/>
          </div>
      </div>
  )
}

export default POListScreen
