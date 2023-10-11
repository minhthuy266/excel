import MaterialsReportIcon1 from "assets/icons/MaterialsReportIcon1";
import WarehouseRequireCheck1 from "assets/icons/WarehouseRequireCheck1";
import WarehouseRequireCheck2 from "assets/icons/WarehouseRequireCheck2";
import WarehouseRequireCheck3 from "assets/icons/WarehouseRequireCheck3";
import CardItem from "components/GeneralScreenComponents/MaterialsReport/CardItem";
import variables from "globalStyles/variables.scss";
import { useTranslation } from "react-i18next";
import { StyledCardList } from "./styles";

const MainContent = () => {
  const { t } = useTranslation(["warehouseRequireCheckScreen"]);

  return (
    <StyledCardList>
      <CardItem
        icon={<MaterialsReportIcon1 />}
        color={variables.colorPrimary20}
        text={`${t("headerCard.card1")}`}
        colorPercent={variables.colorPrimary}
        titleTooltip="Lorem"
      />

      <CardItem
        icon={<WarehouseRequireCheck1 />}
        color={variables.colorSuccess20}
        text={`${t("headerCard.card2")}`}
        colorPercent={variables.colorPrimary}
        titleTooltip="Lorem"
      />

      <CardItem
        icon={<WarehouseRequireCheck2 />}
        color={variables.colorPending20}
        text={`${t("headerCard.card3")}`}
        colorPercent={variables.colorPrimary}
        titleTooltip="Lorem"
      />

      <CardItem
        icon={<WarehouseRequireCheck3 />}
        color={variables.colorWarning20}
        text={`${t("headerCard.card4")}`}
        colorPercent={variables.colorPrimary}
        titleTooltip="Lorem"
      />
    </StyledCardList>
  );
};

export default MainContent;
