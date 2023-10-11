import TagTable from 'components/GlobalComponents/TagTable'
import HeaderSection from 'components/ProjectScreenComponents/HeaderSection'
import TableContent from 'components/ProjectScreenComponents/TableContent'
import variables from 'globalStyles/variables.scss'
import {useTranslation} from 'react-i18next'

const ProjectScreen = () => {
  const {t} = useTranslation(['common'])

  const columns = [
    {
      title: `${t('tableContent.column.code', {ns: 'common'})}`,
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: `${t('tableContent.column.projectName', {ns: 'common'})}`,
      dataIndex: 'project',
      key: 'project',
    },
    {
      title: `${t('tableContent.column.progress', {ns: 'common'})}`,
      dataIndex: 'progress',
      key: 'progress',
      render: (_, {progress}) => (
        <>
          {progress === 'Sản xuất' ? (
            <TagTable
              background={variables.colorPending20}
              color={variables.colorPending}
              border={`1px solid ${variables.colorPending20}}`}
              text={`${t('tableContent.column.manufacturing', {ns: 'common'})}`}
            />
          ) : progress === 'Ký hợp đồng' ? (
            <TagTable
              background={variables.colorSuccess20}
              color={variables.colorSuccess}
              border={`1px solid ${variables.colorSuccess20}}`}
              text={`${t('tableContent.column.contractSigning', {
                ns: 'common',
              })}`}
            />
          ) : progress === 'Thương thảo' ? (
            <TagTable
              background={variables.colorPrimary20}
              color={variables.colorPrimary}
              border={`1px solid ${variables.colorPrimary20}}`}
              text={`${t('tableContent.column.deal', {
                ns: 'common',
              })}`}
            />
          ) : (
            <TagTable
              background={variables.colorWarning20}
              color={variables.colorWarning}
              border={`1px solid ${variables.colorWarning20}}`}
              text={`${t('tableContent.column.purchase', {
                ns: 'common',
              })}`}
            />
          )}
        </>
      ),
    },

    {
      title: `${t('tableContent.column.customer', {ns: 'common'})}`,
      dataIndex: 'customer',
      key: 'customer',
    },

    {
      title: `${t('tableContent.column.contractDate', {ns: 'common'})}`,
      dataIndex: 'date',
      key: 'date',
    },

    {
      title: `${t('tableContent.column.contractValue', {ns: 'common'})}`,
      dataIndex: 'contractValue',
      key: 'contractValue',
    },

    {
      title: '',
      key: '',
      render: (_, record) => (
        <div>{t('tableContent.column.details', {ns: 'common'})}</div>
      ),
    },
  ]

  const data = [
    {
      key: '1',
      code: '1',
      project: 'Workshop 5ha',
      customer: 'AMECC',
      progress: 'Sản xuất',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
    {
      key: '2',
      code: '2',
      project: 'Black Point',
      customer: 'MIC',
      progress: 'Ký hợp đồng',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
    {
      key: '3',
      code: '3',
      project: 'Datan',
      customer: 'ABCX',
      progress: 'Thương thảo',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },

    {
      key: '4',
      code: '4',
      project: 'Joe Black',
      customer: 'KDJS',
      progress: 'Mua sắm',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },

    {
      key: '5',
      code: '5',
      project: 'Workshop 5ha',
      customer: 'AMECC',
      progress: 'Sản xuất',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
    {
      key: '6',
      code: '6',
      project: 'Black Point',
      customer: 'MIC',
      progress: 'Ký hợp đồng',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
    {
      key: '7',
      code: '7',
      project: 'Datan',
      customer: 'ABCX',
      progress: 'Thương thảo',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },

    {
      key: '8',
      code: '8',
      project: 'Joe Black',
      customer: 'KDJS',
      progress: 'Mua sắm',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },

    {
      key: '9',
      code: '9',
      project: 'Workshop 5ha',
      customer: 'AMECC',
      progress: 'Sản xuất',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
    {
      key: '10',
      code: '10',
      project: 'Black Point',
      customer: 'MIC',
      progress: 'Ký hợp đồng',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
    {
      key: '11',
      code: '11',
      project: 'Datan',
      customer: 'ABCX',
      progress: 'Thương thảo',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },

    {
      key: '12',
      code: '12',
      project: 'Joe Black',
      customer: 'KDJS',
      progress: 'Mua sắm',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },

    {
      key: '13',
      code: '13',
      project: 'Workshop 5ha',
      customer: 'AMECC',
      progress: 'Sản xuất',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
    {
      key: '14',
      code: '14',
      project: 'Black Point',
      customer: 'MIC',
      progress: 'Ký hợp đồng',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
    {
      key: '15',
      code: '15',
      project: 'Datan',
      customer: 'ABCX',
      progress: 'Thương thảo',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },

    {
      key: '16',
      code: '16',
      project: 'Joe Black',
      customer: 'KDJS',
      progress: 'Mua sắm',
      date: '30 March, 11:00',
      contractValue: '10000',
      payment: '123456',
    },
  ]

  const headers = [
    {label: 'Mã', key: 'code'},
    {label: 'Tên dự án', key: 'project'},
    {label: 'Khách hàng', key: 'customer'},
    {label: 'Tiến độ', key: 'progress'},
    {label: 'Thiết kế', key: 'design'},
    {label: 'Mua sắm', key: 'purchase'},
    {label: 'Giá trị hợp đồng', key: 'contractValue'},
    {label: 'Thanh toán', key: 'payment'},
  ]

  return (
    <div>
      <HeaderSection columns={columns} data={data} />
      <TableContent columns={columns} data={data} headers={headers} />
    </div>
  )
}

export default ProjectScreen
