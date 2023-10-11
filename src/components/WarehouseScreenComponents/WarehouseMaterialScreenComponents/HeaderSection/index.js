import { StyledTitleSection } from "globalStyles/styles";
import { useTranslation } from "react-i18next";

const HeaderSection = ({ data, headers }) => {
  const { t } = useTranslation(["warehouseMaterialScreen"]);

  return (
    <div>
      <StyledTitleSection>{t("title")}</StyledTitleSection>
    </div>
  );
};

export default HeaderSection;
