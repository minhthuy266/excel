import FormCreate from "components/CostControlScreenComponents/Create/FormCreate";
import TableBottom from "components/CostControlScreenComponents/Create/Table";
import React, { useState } from "react";
import {useSearchParams} from 'react-router-dom';
import {useGetProjectByIdQuery,} from "../../features/project/projectSlice";
import { StyledMessageSuccess } from "globalStyles/styles";
import {useGetPOsQuery} from "../../features/po/poSlice";

const CostControlCreateScreen = () => {
    const [isEdit, setIsEdit] = useState(true);
    const [message, setMessage] = useState(false);
    const [searchParams] = useSearchParams();
    const idProject = searchParams.get("project_no")
    const { data: contract, isLoading } = useGetProjectByIdQuery(idProject);
    const { data: po } = useGetPOsQuery(idProject);
    const [dataSource, setDataSource] = useState();
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            {
                message
                    ? <StyledMessageSuccess>{message}</StyledMessageSuccess>
                    : null
            }
            <FormCreate
                idProject={idProject}
                dataSourceParent={dataSource}
                contract={contract}
                setMessage={setMessage}
                listPo={po}
            />
            <div className="my-[40px]">
                <TableBottom
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    dataSourceParent={dataSource}
                    setDataSourceParent={setDataSource}
                />
            </div>
        </div>
    );
};

export default CostControlCreateScreen;
