import HeaderDocsSection from "components/GlobalComponents/HeaderDocsSection";
import DocsContainerComponent from "components/GlobalComponents/DocsContainerComponent";
import { getItem } from "util/functionUtil";
import { useTranslation } from "react-i18next";

const DocsScreen = () => {
  const items = [
    getItem("Tất cả", "1"),
    getItem("Dự án A", "2"),
    getItem("Dự án B", "3"),
    getItem("Dự án C", "4"),
  ];

  const { t } = useTranslation(["docsScreen"]);

  const folderList = [
    {
      id: "1",
      title: "Hợp đồng kinh tế",
      date: "18:06 10/02/2023",
    },

    {
      id: "2",
      title: "Hồ sơ dự thầu",
      date: "18:06 10/02/2023",
    },

    {
      id: "3",
      title: "Duyệt thiết kê",
      date: "18:06 10/02/2023",
    },

    {
      id: "4",
      title: "Nhật ký bản vẽ",
      date: "18:06 10/02/2023",
    },
  ];

  return (
    <div>
      <HeaderDocsSection title={`${t("title")}`} />
      <DocsContainerComponent items={items} folderList={folderList} />
    </div>
  );
};

export default DocsScreen;
