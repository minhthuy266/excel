import variables from "globalStyles/variables.scss";

const MaterialsReportIcon1 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke={variables.colorPrimary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      data-lucide="pie-chart"
      className="lucide lucide-pie-chart"
    >
      <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
      <path d="M22 12A10 10 0 0 0 12 2v10z" />
    </svg>
  );
};

export default MaterialsReportIcon1;