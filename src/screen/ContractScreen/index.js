import FormTop from "components/ContractScreenComponents/FormTop";
import ProjectReport from "components/ContractScreenComponents/ProjectReport";
import {
  useGetContractListQuery,
  useGetProjectByIdQuery,
} from "features/contract/projectSlice";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ContractScreenWrapper } from "./styles";

const ContractScreen = () => {
  const location = useLocation();
  const isCreateContractRoute = location.pathname.includes("create");
  const [isEdit, setIsEdit] = useState(true);
  const onChange = () => {
    setIsEdit(!isEdit);
  };

  const param = useParams();
  console.log("heyyy", location);

  const { data: project, isLoading } = useGetProjectByIdQuery(param.id, {
    skip: isCreateContractRoute,
  });

  const { data: contract, isLoadingContract } = useGetContractListQuery(
    param.id,
    {
      skip: isCreateContractRoute,
    }
  );

  const onFinish = (values) => {
    console.log(values);
  };

  const [data, setData] = useState([]);

  console.log("contract", contract);

  const initData = [
    {
      shipmentNo: "1",
      deliveryDate: "15-Feb-24",
      weight: "500,00",
      plannedRevenue: "200.588,24",
      paymentMilestone: "Advance Payment",
      paymentPercentage: "5%",
      paymentAmount: "10.000",
      paymentDuration: "30",
      paymentDate: "75.000",
      paymentMethod: "30",
      key: "0",
    },
  ];

  // useEffect(() => {
  //  refetch();
  // }, []);

  if (isLoading || isLoadingContract) {
    return <div>Loading...</div>;
  }

  return (
    <ContractScreenWrapper>
      {/* <div className="flex justify-end mb-8 fixed right-10 z-10">
        {isCreateContractRoute ? null : (
          <Switch
            checkedChildren="Xem"
            unCheckedChildren="Sửa"
            defaultChecked
            onChange={onChange}
          />
        )}
      </div> */}

      <FormTop
        isEdit={isEdit}
        project={project}
        data={data}
        setData={setData}
        setIsEdit={setIsEdit}
      />

      {
        !isLoadingContract && (
          <div className="mt-[40px]">
            <ProjectReport
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              project={contract}
              data={data}
              setData={setData}
            />
          </div>
        )
      }

      {/* <div className="mt-[40px]">
        <ProjectReport
          isEdit={isEdit}
          setIsEdit={setIsEdit}
          project={contract}
          data={data}
          setData={setData}
        />
      </div> */}
    </ContractScreenWrapper>
  );
};
export default ContractScreen;
