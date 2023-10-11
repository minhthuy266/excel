import {Button, Input, Select} from 'antd'
import {StyledTitleSection} from 'globalStyles/styles'
import {MdUploadFile} from 'react-icons/md'
import {SearchOutlined} from '@ant-design/icons'
import {
  StyledFilterItem,
  StyledFilterSection,
  StyledHeaderWrapper,
  StyledLabel,
} from './styles'
import {useTranslation} from 'react-i18next'

const HeaderSection = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  const {t} = useTranslation(['designScreen', 'common'])

  const options = [
    {
      label: 'Sport & Outdoor',
      value: '1',
    },

    {
      label: 'PC & Laptop',
      value: '2',
    },
  ]

  return (
    <>
      <StyledHeaderWrapper>
        <StyledTitleSection>{t('designMprScreen.title')}</StyledTitleSection>

        <div>
          <Button type='primary' icon={<MdUploadFile />}>
            &nbsp; {t('designMprScreen.btnGroup.btn1')}
          </Button>
        </div>
      </StyledHeaderWrapper>

      <StyledFilterSection>
        <StyledFilterItem>
          <StyledLabel>{t('designMprScreen.filterSection.field1')}</StyledLabel>

          <Input
            placeholder={`${t(
              'designMprScreen.filterSection.fieldPlaceholder1'
            )}`}
            style={{
              width: '85%',
            }}
          />
        </StyledFilterItem>

        <StyledFilterItem>
          <StyledLabel>{t('designMprScreen.filterSection.field2')}</StyledLabel>

          <Select
            mode='multiple'
            allowClear
            style={{
              width: '85%',
            }}
            placeholder='Please select'
            defaultValue={['1']}
            onChange={handleChange}
            options={options}
          />
        </StyledFilterItem>

        <StyledFilterItem>
          <StyledLabel>
            {t('designMprScreen.filterSection.field3.title')}
          </StyledLabel>

          <Select
            defaultValue='active'
            style={{
              width: '80%',
            }}
            onChange={handleChange}
            options={[
              {
                value: 'inactive',
                label: `${t('designMprScreen.filterSection.field3.status1')}`,
              },
              {
                value: 'active',
                label: `${t('designMprScreen.filterSection.field3.status2')}`,
              },
            ]}
          />
        </StyledFilterItem>

        <Button type='primary' icon={<SearchOutlined />}>
          {t('designMprScreen.globalBtn.filterBtn', {ns: 'common'})}
        </Button>
      </StyledFilterSection>
    </>
  )
}

export default HeaderSection
