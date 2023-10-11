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

  const handleChange = (value) => {
    console.log(`selected ${value}`)
    i18next.changeLanguage(value)
  }

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
          <Select
            defaultValue={i18next.resolvedLanguage}
            style={{
              width: 100,
            }}
            showArrow={false}
            onChange={handleChange}
            options={[
              {
                value: 'vi',
                label: (
                  <span>
                    <img src={FlagVI} alt='Flag VI' />
                    <span>vi</span>
                  </span>
                ),
              },
              {
                value: 'en',
                label: (
                  <span>
                    <img src={FlagEN} alt='Flag EN' />
                    <span>en</span>
                  </span>
                ),
              },
            ]}
          />

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
                <div>Nguyễn Văn A</div>
                <div>Manager</div>
              </div>
            </div>
          </Dropdown>
        </div>
      </StyledHeaderWrapper>
    </Header>
  )
}

export default DashHeader
