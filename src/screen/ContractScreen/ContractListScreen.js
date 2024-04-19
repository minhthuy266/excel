import React, { useEffect, useState } from 'react'
import {Table, Button} from 'antd'
import { StyledAction } from './styles'
import { useDeleteContractMutation, useDeleteContractQuery, useGetContractByIdQuery, useGetContractsQuery } from 'features/contract/contractSlice'
import { Link, useNavigate } from 'react-router-dom'

const ContractListScreen = () => {
  const navigate = useNavigate()
  const [id, setId] = useState(null)
  const {data: data1, isLoading, refetch}= useDeleteContractQuery(id, {
    onSuccess: () => {
      console.log("Deleting success")
      refetchList()
    }
  })
  const {data: contractList, refetch: refetchList} = useGetContractsQuery()
  const {data: contract} = useGetContractByIdQuery(1)

  const handleDeleteContract = async (contractId) => {
    try {
      await refetch();
      // After successfully deleting the contract, refetch the contract list
      refetchList(id);
    } catch (error) {
      console.error('Error deleting contract:', error);
    }
  };


  useEffect(() => {
    handleDeleteContract()
  }, [id, refetch]);

  const columns = [
    {
      title: 'Project No.',
      dataIndex: 'project_no',
      key: 'project_no',
    },
    {
      title: 'Project Name',
      dataIndex: 'project_name',
      key: 'project_name',
    },
    {
      title: 'Client',
      dataIndex: 'client',
      key: 'client',
    },
    {
      title: 'Contract Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Total Weight',
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: 'Unit Price',
      dataIndex: 'unit_price',
      key: 'unit_price',
    },
    {
      title: 'Delivery Term',
      dataIndex: 'delivery_term',
      key: 'delivery_term',
    },
    {
      title: 'Contract Date',
      dataIndex: 'contract_date',
      key: 'contract_date',
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <StyledAction>
          <Button onClick={() => navigate(`/dash/contract/${record.id}`)}>Xem</Button>
          <Button onClick={() => setId(record.id) }>Xoá</Button>
  
        </StyledAction>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      projectNo: '1',
      projectName: 'John Brown',
      client: 'New York No. 1 Lake Park',
      contractAmount: '1000',
      totalWeight: '1000',
      unitPrice: '1000',
      deliveryTerm: '1000',
      contractDate: '1000'
    },
    {
      key: '2',
      projectNo: '2',
      projectName: 'Jim Green',
      client: 'London No. 1 Lake Park',
      contractAmount: '1000',
      totalWeight: '1000',
      unitPrice: '1000',
      deliveryTerm: '1000',
      contractDate: '1000'
    },
    {
      key: '3',
      projectNo: '3',
      projectName: 'Joe Black',
      client: 'Sidney No. 1 Lake Park',
      contractAmount: '1000',
      totalWeight: '1000',
      unitPrice: '1000',
      deliveryTerm: '1000',
      contractDate: '1000'
    },
  ]



  // console.log("-----data-----", contractList?.data)
  // console.log("-----data-----", contract)


  return (
    <Table columns={columns} dataSource={contractList?.data} />
  )
}

export default ContractListScreen