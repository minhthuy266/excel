import { Switch } from "antd";
import FormTop from "components/CostControlScreenComponents/FormTop";
import TableBottom from "components/CostControlScreenComponents/TableBottom";
import React, {useEffect, useState} from "react";
import {useParams, useSearchParams} from "react-router-dom";
import {useGetPOsQuery} from "../../features/po/poSlice";
import {useGetCostControlByIdQuery} from "../../features/costControl/costControlSlice";
import {StyledMessageSuccess} from "../../globalStyles/styles";

const CostControlScreen = () => {
  const [isEdit, setIsEdit] = useState(false);
  const param = useParams();
  const idProject = 1;
  const [message, setMessage] = useState(false);
  const { data: costControl, isLoading } = useGetCostControlByIdQuery(param.id)
  const { data: po } = useGetPOsQuery(idProject);
  const [dataSource, setDataSource] = useState();
  if (isLoading) {
    return <div>Loading...</div>
  }
  const onChange = () => {
    setIsEdit(!isEdit);
  };
  const dataItem = [
    {
      key: costControl.id,
      item: costControl.item,
      work_id: costControl.work_id,
      unit: costControl.unit,
      weight: costControl.weight,
      unit_price: costControl.unit_price,
      amount: costControl.amount,
      payment_amount: costControl.amount,
      invoice_amount: costControl.invoice_amount,
      invoice_no: costControl.invoice_no,
      invoice_date: costControl.invoice_date,
      cost_id: costControl.cost_id
    },
  ]

  return (
    <div>
      {
        message
          ? <StyledMessageSuccess>{message}</StyledMessageSuccess>
          : null
      }
      <div className="flex justify-end mb-8 fixed right-40 z-10">
        <Switch
          checkedChildren="Xem"
          unCheckedChildren="Sửa"
          defaultChecked
          onChange={onChange}
        />
      </div>
      <FormTop
        isEdit={isEdit}
        idProject={idProject}
        dataSourceParent={dataSource}
        costControl={costControl}
        setMessage={setMessage}
        listPo={po}
      />

      <div className="my-[40px]">
        <TableBottom
          isEdit={isEdit}
          dataSourceParent={dataSource ?? dataItem}
          setDataSourceParent={setDataSource}
        />
      </div>
    </div>
  );
};

export default CostControlScreen;
