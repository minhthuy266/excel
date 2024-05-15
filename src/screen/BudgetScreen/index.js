import { Switch } from "antd";
import BudgetTimeline from "components/BudgetScreenComponents/BudgetTimeline";
import FormTop from "components/BudgetScreenComponents/FormTop";
import TableBottom from "components/BudgetScreenComponents/TableBottom";
import { useGetBudgetsQuery } from "features/budget/budgetSlice";
import React, { useState } from "react";

const BudgetScreen = () => {
  const [isEdit, setIsEdit] = useState(true);
  const onChange = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <div className="flex justify-end mb-8 fixed right-10 z-10">
        {/* <Switch
          checkedChildren="Xem"
          unCheckedChildren="Sửa"
          defaultChecked
          onChange={onChange}
        /> */}
      </div>
      <FormTop isEdit={isEdit} />
      <div className="my-[40px]">
        <TableBottom isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>

      {/* <BudgetTimeline /> */}
    </div>
  );
};

export default BudgetScreen;
