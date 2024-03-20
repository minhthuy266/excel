import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons'
import {Avatar, Breadcrumb, Dropdown, Layout, Select} from 'antd'
import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router'
import i18next from 'i18next'
import {StyledBreadcrumbs, StyledHeaderWrapper} from './styles'
import variables from 'globalStyles/variables.scss'
import FlagVI from 'assets/images/FlagIcon_vi.png'
import FlagEN from 'assets/images/FlagIcon_en.png'
import './styles.scss'
import {useTranslation} from 'react-i18next'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from 'features/auth/authSlice'

const DashHeader = ({collapsed, colorBgContainer, setCollapsed}) => {
  const location = useLocation()
  const [, b, c, d] = location?.pathname?.split('/')
  const [breadcrumb2, setBreadcrumb2] = useState('')
  const [breadcrumb3, setBreadcrumb3] = useState('')

  const {t} = useTranslation(['common'])

  useEffect(() => {
    setBreadcrumb2(c)
    setBreadcrumb3(d)
  }, [b, c, d])

  const items = [
    {
      key: '1',
      label: <div>{t('header.userDropdown.item1')}</div>,
    },
    {
      key: '2',
      label: <div>{t('header.userDropdown.item2')}</div>,
    },
    {
      key: '3',
      label: <div>{t('header.userDropdown.item3')}</div>,
    },
  ]


  const user = useSelector(selectCurrentUser)

  const {Header} = Layout
  return (
    <Header
      style={{
        padding: 20,
        background: colorBgContainer,
      }}>
      <StyledHeaderWrapper collapsed={collapsed}>
        <div>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: () => setCollapsed(!collapsed),
            }
          )}

          <StyledBreadcrumbs>
            <Breadcrumb>
              <Breadcrumb.Item>{t('header.breadcrumbs.item1')}</Breadcrumb.Item>
              <Breadcrumb.Item>{t('header.breadcrumbs.item2')}</Breadcrumb.Item>
              <Breadcrumb.Item>{t(`sidebar.${breadcrumb2}`)}</Breadcrumb.Item>
              {breadcrumb3 && (
                <Breadcrumb.Item>{t(`sidebar.${breadcrumb3}`)}</Breadcrumb.Item>
              )}
            </Breadcrumb>
          </StyledBreadcrumbs>
        </div>

        <div>
          <Dropdown
            menu={{
              items,
            }}
            placement='bottomLeft'>
            <div>
              <div>
                <Avatar
                  style={{
                    backgroundColor: `${variables.colorPrimary}`,
                    verticalAlign: 'middle',
                    marginRight: '1rem',
                  }}
                  size='large'></Avatar>
              </div>

              <div>
                <div>{user.name}</div>
                <div>{user.username}</div>
              </div>
            </div>
          </Dropdown>
        </div>
      </StyledHeaderWrapper>
    </Header>
  )
}

export default DashHeader