import FormCreate from "components/BudgetScreenComponents/FormTop/create";
import TableBottom from "components/BudgetScreenComponents/TableBottom";
import React, { useState } from "react";
import {useSearchParams} from "react-router-dom";
import {useGetProjectByIdQuery} from "../../features/project/projectSlice";
import {StyledMessageSuccess} from "../../globalStyles/styles";

const BudgetCreateScreen = () => {
    const [isEdit, setIsEdit] = useState(true);
    const [message, setMessage] = useState(false);
    const [dataTable, setDataTable] = useState([]);
    const [searchParams] = useSearchParams();
    const idProject = searchParams.get("project_no")
    const { data: contract, isLoading } = useGetProjectByIdQuery(idProject);
    console.log('datatable', dataTable)
    if (isLoading) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <div className="flex justify-end mb-8 fixed right-10 z-10"></div>
            {
                message
                    ? <StyledMessageSuccess>{message}</StyledMessageSuccess>
                    : null
            }
            <FormCreate
                isEdit={isEdit}
                dataTable={dataTable}
                setDataTable={setDataTable}
                project={contract}
                setMessage={setMessage}
            />
            <div className="my-[40px]">
                <TableBottom
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    setDataTable={setDataTable}
                    dataTable={dataTable}
                />
            </div>
        </div>
    );
};

export default BudgetCreateScreen;
