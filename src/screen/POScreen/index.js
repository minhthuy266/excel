import {Switch, Table} from "antd";
import FromEdit from "components/POScreenComponents/Edit/FromEdit";
import TableBottom from "components/POScreenComponents/TableBottom";
import React, { useState } from "react";
import { useGetPoByIdQuery } from "features/po/poSlice";
import {useParams} from 'react-router-dom';
import { StyledMessageSuccess } from "globalStyles/styles";

const POScreen = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [message, setMessage] = useState(false);
  const onChange = () => {
    setIsEdit(!isEdit);
  };
  const param = useParams();
  const {data: po, isLoading} = useGetPoByIdQuery(param.id);
  const [dataSource, setDataSource] = useState(po?.order_detail);

    if (isLoading) {
      return <div>Loading...</div>;
    }
  return (
      <div>
          {
            message
              ? <StyledMessageSuccess>{message}</StyledMessageSuccess>
              : null
          }

          <div className="flex justify-end mb-8 fixed right-10 z-10">
            <Switch
              checkedChildren="Xem"
              unCheckedChildren="Sửa"
              defaultChecked
              onChange={onChange}
            />
          </div>
          <FromEdit
            isEdit={isEdit}
            po={po}
            dataSource={dataSource}
            setDataSource={setDataSource}
            setMessage={setMessage}
          />
          <div className="my-[40px]">
            <TableBottom
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              dataSourceParent={po.order_detail}
              setDataSourceParent={setDataSource}
            />
          </div>
      </div>
  );
};

export default POScreen;
