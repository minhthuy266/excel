import {Button, Input} from 'antd'
import {StyledTitleSection} from 'globalStyles/styles'
import {
  StyledFilterItem,
  StyledFilterSection,
  StyledHeaderWrapper,
  StyledLabel,
} from './styles'
import {SearchOutlined} from '@ant-design/icons'
import {FaFileExport} from 'react-icons/fa'
import {useTranslation} from 'react-i18next'

const HeaderSection = () => {
  const {t} = useTranslation(['expensesScreen', 'common'])

  return (
    <div>
      <StyledHeaderWrapper>
        <StyledTitleSection>{t('title')}</StyledTitleSection>

        <div>
          <Button type='primary' icon={<FaFileExport />}>
            &nbsp; {t('globalBtn.excelExportBtn', {ns: 'common'})}
          </Button>
        </div>
      </StyledHeaderWrapper>

      <StyledFilterSection>
        <StyledFilterItem>
          <StyledLabel>{t('filterSection.code')}</StyledLabel>

          <Input placeholder={`${t('filterSection.codePlaceholder')}`} />
        </StyledFilterItem>

        <StyledFilterItem>
          <StyledLabel>{t('filterSection.customer')}</StyledLabel>

          <Input
            placeholder={`${t('filterSection.customerPlaceholder')}`}
            width='100px'
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
