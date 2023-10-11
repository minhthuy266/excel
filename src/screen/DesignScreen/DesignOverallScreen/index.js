import {MPRSection} from 'components/DesignScreenComponents/DesignOverallScreenComponents/MPRSection'
import DocsContainerComponent from 'components/GlobalComponents/DocsContainerComponent'
import HeaderDocsSection from 'components/GlobalComponents/HeaderDocsSection'
import {useTranslation} from 'react-i18next'
import {getItem} from 'util/functionUtil'

const DesignOverallScreen = () => {
  const items = [
    getItem('Tất cả', '1'),
    getItem('Dự án A', '2'),
    getItem('Dự án B', '3'),
    getItem('Dự án C', '4'),
  ]

  const folderList = [
    {
      id: '1',
      title: 'Bản phác thảo',
      date: '18:06 10/02/2023',
    },

    {
      id: '2',
      title: 'Bản 2D',
      date: '18:06 10/02/2023',
    },

    {
      id: '3',
      title: 'Bản 3D',
      date: '18:06 10/02/2023',
    },

    {
      id: '4',
      title: 'File Tekla',
      date: '18:06 10/02/2023',
    },
  ]

  const {t} = useTranslation(['designScreen'])

  return (
    <div>
      <HeaderDocsSection title={`${t('designOverallScreen.title')}`} />
      <DocsContainerComponent items={items} folderList={folderList} />
      <MPRSection />
    </div>
  )
}

export default DesignOverallScreen
