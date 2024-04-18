import ProjectReport from "components/ContractScreenComponents/ProjectReport";
import { ContractScreenWrapper } from "./styles";
import FormTop from "components/ContractScreenComponents/FormTop";
import { Switch } from "antd";
import { useState } from "react";
import { useGetContractByIdQuery } from "features/contract/contractSlice";
import { useParams } from "react-router-dom";

const ContractScreen = () => {
  const [isEdit, setIsEdit] = useState(false);
  const onChange = () => {
    setIsEdit(!isEdit);
  };

  const param = useParams();
  console.log("heyyy", param);

  const { data: contract } = useGetContractByIdQuery(param.id);

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
      {contract && <FormTop isEdit={isEdit} contract={contract} />}

      <div className="mt-[40px]">
        <ProjectReport isEdit={isEdit} setIsEdit={setIsEdit} contract={contract}/>
      </div>
    </ContractScreenWrapper>
  );
};
export default ContractScreen;
