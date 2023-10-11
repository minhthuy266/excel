import {Table} from 'antd'
import {StyledTableWrapper} from './styles'

const TableContent = ({columns, data}) => {
  return (
    <StyledTableWrapper>
      <Table columns={columns} dataSource={data} />
    </StyledTableWrapper>
  )
}

export default TableContent
