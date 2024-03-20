import {
  HomeOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import LogoIcon from 'assets/icons/LogoIcon'
import { useState } from 'react'


import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

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
            label: 'Tổng quan',
          },

          {
            key: '/dash/role',
            icon: <HomeOutlined />,
            label: 'Quản lý vai trò',
          },
        ]}
      />
    </Sider>
  )
}

export default Sider
