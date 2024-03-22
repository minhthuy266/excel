import { Switch } from "antd";
import FormTop from "components/BOScreenComponents/FormTop";
import TableBottom from "components/BOScreenComponents/TableBottom";
import React, { useState } from "react";

const POScreen = () => {
  const [isEdit, setIsEdit] = useState(false);
  const onChange = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <div className="flex justify-end mb-8 fixed right-10 z-10">
        <Switch
          checkedChildren="Xem"
          unCheckedChildren="Sửa"
          defaultChecked
          onChange={onChange}
        />
      </div>
      <FormTop isEdit={isEdit} />
      <div className="my-[40px]">
        <TableBottom isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
    </div>
  );
};

export default POScreen;
