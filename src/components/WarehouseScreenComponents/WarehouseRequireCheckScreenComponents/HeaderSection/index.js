import { StyledTitleSection } from "globalStyles/styles";
import styled from "styled-components";
import variables from "globalStyles/variables.scss";
import { useTranslation } from "react-i18next";

const StyledSubText = styled.div`
  color: ${variables.colorSubText};
  padding-top: 0.6rem;
`;

const HeaderSection = ({ data, headers }) => {
  const { t } = useTranslation(["warehouseRequireCheckScreen"]);

  return (
    <div>
      <StyledTitleSection>{t("title")}</StyledTitleSection>
      <StyledSubText>{t("titleNote")}</StyledSubText>
    </div>
  );
};

export default HeaderSection;
