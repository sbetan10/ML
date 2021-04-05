// Formatea los precios
export const PriceUtil = (priceString) =>{
  return `${priceString.toLocaleString(navigator.language, { minimumFractionDigits: 0 })}`
}
