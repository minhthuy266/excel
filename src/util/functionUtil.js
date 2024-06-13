export const getItem = (label, key, icon, children) => {
  return {
    key,
    icon,
    children,
    label,
  }
}

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}