import {
  DollarOutlined,
  HomeOutlined,
  PaperClipOutlined,
  ProjectOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons'
import {Layout, Menu} from 'antd'
import LogoIcon from 'assets/icons/LogoIcon'
import {useState} from 'react'
import {
  MdOutlineConstruction,
  MdOutlineDesignServices,
  MdOutlineLocalShipping,
  MdOutlinePersonPin,
  MdOutlineSwitchAccount,
} from 'react-icons/md'
import {
  TbBuildingFactory2,
  TbBuildingStore,
  TbShoppingCart,
  TbReport,
} from 'react-icons/tb'

import {BsShopWindow} from 'react-icons/bs'

import {IoPeopleOutline} from 'react-icons/io5'
import {FaRegHandshake, FaUserLock} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'

const Sider = ({collapsed}) => {
  const navigate = useNavigate()
  const onClick = (e) => {
    setCurrent(e.key)
    navigate(e.key)
    localStorage.setItem('currentScreen', e.key)
  }

  const {Sider} = Layout

  const [current, setCurrent] = useState(localStorage.getItem('currentScreen'))

  let width = collapsed ? '60pt' : '150pt'
  let height = collapsed ? '10pt' : '25pt'

  const {t} = useTranslation(['common'])

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      width={collapsed ? 80 : 260}>
      <div
        className='logo'
        style={{
          margin: '2.4rem 0',
          cursor: 'pointer',
          textAlign: 'center',
        }}
        onClick={() => {
          navigate('/dash/general')
          setCurrent('/dash/general')
          localStorage.setItem('currentScreen', '/dash/general')
        }}>
        <LogoIcon width={width} height={height} />
      </div>
      <Menu
        mode='inline'
        defaultSelectedKeys={['/dash/general']}
        onClick={onClick}
        selectedKeys={[current]}
        items={[
          {
            key: '/dash/general',
            icon: <HomeOutlined />,
            label: `${t('sidebar.general')}`,
          },
          {
            key: '/dash/project',
            icon: <ProjectOutlined />,
            label: `${t('sidebar.project')}`,
          },
          {
            key: '/dash/expenses',
            icon: <DollarOutlined />,
            label: `${t('sidebar.expenses')}`,
          },

          {
            key: '/dash/docs',
            icon: <PaperClipOutlined />,
            label: `${t('sidebar.docs')}`,
          },
          {
            key: '/dash/design',
            icon: <MdOutlineDesignServices />,
            label: `${t('sidebar.design')}`,
            children: [
              {
                key: '/dash/design/designOverall',
                icon: <IoPeopleOutline />,
                label: `${t('sidebar.designOverall')}`,
              },

              {
                key: '/dash/design/designFile',
                icon: <BsShopWindow />,
                label: `${t('sidebar.designFile')}`,
              },

              {
                key: '/dash/design/designMPR',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.designMPR')}`,
              },

              {
                key: '/dash/design/designBOM',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.designBOM')}`,
              },
            ],
          },
          {
            key: '/dash/manufacturing',
            icon: <TbBuildingFactory2 />,
            label: `${t('sidebar.manufacturing')}`,
          },

          {
            key: '/dash/transportation',
            icon: <MdOutlineLocalShipping />,
            label: `${t('sidebar.transportation')}`,
          },
          {
            key: '/dash/construction',
            icon: <MdOutlineConstruction />,
            label: `${t('sidebar.construction')}`,
          },
          {
            key: '/dash/warehouse',
            icon: <TbBuildingStore />,
            label: `${t('sidebar.warehouse')}`,
            children: [
              {
                key: '/dash/warehouse/warehouseMaterial',
                icon: <IoPeopleOutline />,
                label: `${t('sidebar.warehouseMaterial')}`,
              },

              {
                key: '/dash/warehouse/warehouseRequireCheck',
                icon: <BsShopWindow />,
                label: `${t('sidebar.warehouseRequireCheck')}`,
              },

              {
                key: '/dash/warehouse/warehouseInventoryCheck',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.warehouseInventoryCheck')}`,
              },

              {
                key: '/dash/warehouse/warehouseReceipt',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.warehouseReceipt')}`,
              },

              {
                key: '/dash/warehouse/warehouseExport',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.warehouseExport')}`,
              },

              {
                key: '/dash/warehouse/warehouseCancel',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.warehouseCancel')}`,
              },
            ],
          },

          {
            key: '/dash/shopping',
            icon: <TbShoppingCart />,
            label: `${t('sidebar.shopping')}`,
          },

          {
            key: '/dash/report',
            icon: <TbReport />,
            label: `${t('sidebar.report')}`,
            children: [
              {
                key: '/dash/report/reportOverall',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.reportOverall')}`,
              },

              {
                key: '/dash/report/reportProjectStatus',
                icon: <FundProjectionScreenOutlined />,
                label: `${t('sidebar.reportProjectStatus')}`,
              },

              {
                key: '/dash/report/reportFAB',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.reportFAB')}`,
              },

              {
                key: '/dash/report/reportDCC',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.reportDCC')}`,
              },

              {
                key: '/dash/report/reportPLD',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.reportPLD')}`,
              },

              {
                key: '/dash/report/reportPDM',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.reportPDM')}`,
              },

              {
                key: '/dash/report/reportQAQC',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.reportQAQC')}`,
              },

              {
                key: '/dash/report/reportManufacturing',
                icon: <ProjectOutlined />,
                label: 'Sản xuất',
              },

              {
                key: '/dash/report/reportSubcontractor',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.reportSubcontractor')}`,
              },
            ],
          },
          {
            key: '/dash/personnel',
            icon: <MdOutlinePersonPin />,
            label: `${t('sidebar.personnel')}`,
            children: [
              {
                key: '/dash/personnel/personnelAccount',
                icon: <MdOutlineSwitchAccount />,
                label: `${t('sidebar.personnelAccount')}`,
              },

              {
                key: '/dash/personnel/personnelDepartment',
                icon: <FundProjectionScreenOutlined />,
                label: `${t('sidebar.personnelDepartment')}`,
              },

              {
                key: '/dash/personnel/personnelDecentralization',
                icon: <FaUserLock />,
                label: `${t('sidebar.personnelDecentralization')}`,
              },
            ],
          },
          {
            key: 'dash/partner',
            icon: <FaRegHandshake />,
            label: `${t('sidebar.partner')}`,
            children: [
              {
                key: '/dash/partner/partnerCustomer',
                icon: <IoPeopleOutline />,
                label: `${t('sidebar.partnerCustomer')}`,
              },

              {
                key: '/dash/partner/partnerSupplier',
                icon: <BsShopWindow />,
                label: `${t('sidebar.partnerSupplier')}`,
              },

              {
                key: '/dash/partner/partnerSubcontractor',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.partnerSubcontractor')}`,
              },

              {
                key: '/dash/partner/partnerOther',
                icon: <ProjectOutlined />,
                label: `${t('sidebar.partnerOther')}`,
              },
            ],
          },
        ]}
      />
    </Sider>
  )
}

export default Sider
