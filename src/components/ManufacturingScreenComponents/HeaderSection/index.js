import { Button, Input, Select } from "antd";
import { StyledTitleSection } from "globalStyles/styles";
import {
  StyledFilterItem,
  StyledFilterSection,
  StyledHeaderWrapper,
  StyledLabel,
} from "./styles";
import { SearchOutlined } from "@ant-design/icons";
import { FaFileExport } from "react-icons/fa";
import { CSVLink } from "react-csv";
import { useTranslation } from "react-i18next";

const HeaderSection = ({ data, headers }) => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const { t } = useTranslation(["manufacturingScreen", "common"]);

  return (
    <div>
      <StyledHeaderWrapper>
        <StyledTitleSection>{t("title")}</StyledTitleSection>

        <div>
          <CSVLink
            data={data}
            headers={headers}
            filename={`${t("title")}.csv`}
            onClick={() => {
              console.log("clicked");
            }}
          >
            <Button type="primary">
              <FaFileExport /> &nbsp;{" "}
              {t("globalBtn.excelExportBtn", { ns: "common" })}
            </Button>
          </CSVLink>
        </div>
      </StyledHeaderWrapper>

      <StyledFilterSection>
        <StyledFilterItem>
          <StyledLabel>{t("filterSection.field1")}</StyledLabel>

          <Input placeholder={`${t("filterSection.fieldPlaceholder1")}`} />
        </StyledFilterItem>

        <StyledFilterItem>
          <StyledLabel>{t("filterSection.field2")}</StyledLabel>

          <Input placeholder={`${t("filterSection.fieldPlaceholder2")}`} />
        </StyledFilterItem>

        <StyledFilterItem>
          <StyledLabel>{t("filterSection.progress.label")}</StyledLabel>

          <Select
            defaultValue="pendingPayment"
            style={{
              width: "100%",
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
