import ProjectReport from "components/ContractScreenComponents/ProjectReport";
import { ContractScreenWrapper } from "./styles";
import FormTop from "components/ContractScreenComponents/FormTop";
import { Switch } from "antd";
import { useState } from "react";

const ContractScreen = () => {
  const [isEdit, setIsEdit] = useState(false);
  const onChange = () => {
    setIsEdit(!isEdit);
  };

  return (
    <ContractScreenWrapper>
      <div className="flex justify-end mb-8 fixed right-10 z-10">
        <Switch
          checkedChildren="Xem"
          unCheckedChildren="Sửa"
          defaultChecked
          onChange={onChange}
        />
      </div>
      <FormTop isEdit={isEdit} />
      <div className="mt-[40px]">
        <ProjectReport isEdit={isEdit} setIsEdit={setIsEdit} />
      </div>
    </ContractScreenWrapper>
  );
};
export default ContractScreen;
