import {Table} from 'antd'
import {useTranslation} from 'react-i18next'
import {IoDocumentTextOutline} from 'react-icons/io5'
import {TableContentWrapper} from './styles'

export const TableContent = () => {
  const {t} = useTranslation(['common', 'designScreen'])

  const columns = [
    {
      title: `${t('tableContent.column.requirement')}`,
      dataIndex: 'id',
    },
    {
      title: `${t('tableContent.column.projectName')}`,
      dataIndex: 'project',
    },
    {
      title: (
        <div>
          <div>{t('tableContent.column.requiredBy')}</div>
          <div>{t('tableContent.column.requiredDate')}</div>
        </div>
      ),
      dataIndex: 'requiredBy',
      render: (text, row) => (
        <div>
          <div>
            <div>{text}</div>
            <div>{row.requiredDate}</div>
          </div>
        </div>
      ),
    },
    {
      title: (
        <div>
          <div>{t('tableContent.column.approvedBy')}</div>
          <div>{t('tableContent.column.approvedDate')}</div>
        </div>
      ),
      dataIndex: 'approvedBy',
      render: (text, row) => (
        <div>
          <div>
            <div>{text}</div>
            <div>{row.approvedDate}</div>
          </div>
        </div>
      ),
    },
    {
      title: `${t('tableContent.column.amount')}`,
      dataIndex: 'amount',
    },
    {
      title: `${t('tableContent.column.totalWeight')}`,
      dataIndex: 'totalWeight',
    },
    {
      title: `${t('tableContent.column.netWeight')}`,
      dataIndex: 'netWeight',
    },
    {
      title: `${t('tableContent.column.status')}`,
      dataIndex: 'status',
    },
    {
      title: `${t('tableContent.column.purchaseContract')}`,
      dataIndex: 'contract',
      render: (text, row) => (
        <div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <span style={{marginRight: '0.6rem'}}>
              <IoDocumentTextOutline />
            </span>
            <div>{text}</div>
          </div>
        </div>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      id: '#RES-000001',
      project: 'Workshop 5ha',
      requiredBy: 'Mr. Phúc',
      requiredDate: '30-Sep-22',
      approvedBy: 'Mr. Phúc',
      approvedDate: '30-Sep-22',
      amount: '256',
      totalWeight: '838202',
      netWeight: '29577',
      status: 'Chờ BQL Duyệt',
      contract: 'Chưa đặt mua',
    },
    {
      key: '2',
      id: '#RES-000002',
      project: 'Black Point',
      requiredBy: 'Mr. Toàn',
      requiredDate: '30-Sep-22',
      approvedBy: 'Mr. Phúc',
      approvedDate: '30-Sep-22',
      amount: '554',
      totalWeight: '838202',
      netWeight: '29577',
      status: 'Chờ check tồn kho',
      contract: 'ORD-458',
    },
    {
      key: '3',
      id: '#RES-000003',
      project: 'Sarawwak',
      requiredBy: 'Mr. Kiên',
      requiredDate: '30-Sep-22',
      approvedBy: 'Mr. Phúc',
      approvedDate: '30-Sep-22',
      amount: '64',
      totalWeight: '838202',
      netWeight: '29577',
      status: 'Hàng đang về',
      contract: 'ORD-458',
    },
  ]

  return (
    <TableContentWrapper>
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() =>
          `${t('designMprScreen.tableContent.title', {ns: 'designScreen'})}`
        }
      />
    </TableContentWrapper>
  )
}
