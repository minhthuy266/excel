import {SearchOutlined} from '@ant-design/icons'
import {Button, Select} from 'antd'
import {StyledTitleSection} from 'globalStyles/styles'
import {useTranslation} from 'react-i18next'
import {MdOutlineUploadFile} from 'react-icons/md'
import {
  StyledFilterItem,
  StyledFilterSection,
  StyledHeaderWrapper,
  StyledLabel,
} from './styles'

const HeaderSection = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

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

  const {t} = useTranslation(['designScreen', 'common'])

  return (
    <div>
      <StyledHeaderWrapper>
        <StyledTitleSection>{t('designBOMScreen.title')}</StyledTitleSection>

        <div>
          <Button type='primary' icon={<MdOutlineUploadFile />}>
            &nbsp; {t('designBOMScreen.btnGroup.uploadBOM')}
          </Button>
        </div>
      </StyledHeaderWrapper>

      <StyledFilterSection>
        <StyledFilterItem>
          <StyledLabel>
            {t('designBOMScreen.filterSection.project')}
          </StyledLabel>

          <Select
            mode='multiple'
            allowClear
            style={{
              width: '90%',
            }}
            placeholder='Please select'
            defaultValue={['1']}
            onChange={handleChange}
            options={options}
          />
        </StyledFilterItem>

        <StyledFilterItem>
          <StyledLabel>
            {t('designBOMScreen.filterSection.status.title')}
          </StyledLabel>

          <Select
            defaultValue='active'
            style={{
              width: '85%',
            }}
            onChange={handleChange}
            options={[
              {
                value: 'inactive',
                label: `${t('designBOMScreen.filterSection.status.status1')}`,
              },
              {
                value: 'active',
                label: `${t('designBOMScreen.filterSection.status.status2')}`,
              },
            ]}
          />
        </StyledFilterItem>

        <Button type='primary' icon={<SearchOutlined />}>
          {t('globalBtn.filterBtn', {ns: 'common'})}
        </Button>
      </StyledFilterSection>
    </div>
  )
}

export default HeaderSection
