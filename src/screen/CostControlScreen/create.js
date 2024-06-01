import FormCreate from "components/POScreenComponents/Create/FormCreate";
import TableBottom from "components/POScreenComponents/TableBottom";
import React, { useState } from "react";
import {useSearchParams} from 'react-router-dom';
import {useGetProjectByIdQuery,} from "../../features/project/projectSlice";
import { StyledMessageSuccess } from "globalStyles/styles";

const CostControlCreateScreen = () => {
    const [isEdit, setIsEdit] = useState(true);
    const [message, setMessage] = useState(false);
    const [searchParams] = useSearchParams();
    const idProject = searchParams.get("project_no")
    const { data: contract, isLoading } = useGetProjectByIdQuery(idProject);
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
