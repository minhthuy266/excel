import variables from "globalStyles/variables.scss";

const WarehouseRequireCheck2 = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={variables.colorPending20}
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      icon-name="credit-card"
      data-lucide="credit-card"
      class="lucide lucide-credit-card"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  );
};

export default WarehouseRequireCheck2;