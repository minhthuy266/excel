import MaterialsReport from 'components/GeneralScreenComponents/MaterialsReport'
import ProjectReport from 'components/GeneralScreenComponents/ProjectReport'
import {GeneralScreenWrapper} from './styles'

const GeneralScreen = () => {
  return (
    <GeneralScreenWrapper>
      <MaterialsReport />
      <ProjectReport />
    </GeneralScreenWrapper>
  )
}
export default GeneralScreen
