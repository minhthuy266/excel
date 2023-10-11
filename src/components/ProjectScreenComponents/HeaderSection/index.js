import { SearchOutlined } from "@ant-design/icons";
import { Button, Input, Select } from "antd";
import { StyledTitleSection } from "globalStyles/styles";
import { useTranslation } from "react-i18next";
import { AiOutlinePlus } from "react-icons/ai";
import { FaFileExport } from "react-icons/fa";
import {
  StyledFilterItem,
  StyledFilterSection,
  StyledHeaderWrapper,
  StyledLabel,
} from "./styles";

const HeaderSection = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { t } = useTranslation(["projectScreen", "common"]);

  return (
    <div>
      <StyledHeaderWrapper>
        <StyledTitleSection>{t("title")}</StyledTitleSection>

        <div style={{ display: "flex", alignItems: "center" }}>
          <Button type="primary">
            <FaFileExport /> &nbsp;{" "}
            {t("globalBtn.excelExportBtn", { ns: "common" })}
          </Button>
          <Button>
            <AiOutlinePlus />
            &nbsp; {t("btn")}
          </Button>
        </div>
      </StyledHeaderWrapper>

      <StyledFilterSection>
        <StyledFilterItem>
          <StyledLabel>{t("filterSection.code")}</StyledLabel>

          <Input placeholder={t("filterSection.codePlaceholder")} />
        </StyledFilterItem>

        <StyledFilterItem>
          <StyledLabel>{t("filterSection.customer")}</StyledLabel>

          <Input placeholder={t("filterSection.customerPlaceholder")} />
        </StyledFilterItem>

        <StyledFilterItem>
          <StyledLabel>{t("filterSection.progress.label")}</StyledLabel>

          <Select
            defaultValue="pendingPayment"
            style={{
              width: "80%",
            }}
            onChange={handleChange}
            options={[
              {
                value: "pendingPayment",
                label: `${t("filterSection.progress.option1")}`,
              },
              {
                value: "confirmed",
                label: `${t("filterSection.progress.option2")}`,
              },
              {
                value: "packing",
                label: `${t("filterSection.progress.option3")}`,
              },
              {
                value: "shipping",
                label: `${t("filterSection.progress.option4")}`,
              },
              {
                value: "completed",
                label: `${t("filterSection.progress.option5")}`,
              },
            ]}
          />
        </StyledFilterItem>

        <Button type="primary" icon={<SearchOutlined />}>
          {t("globalBtn.filterBtn", { ns: "common" })}
        </Button>
      </StyledFilterSection>
    </div>
  );
};

export default HeaderSection;
