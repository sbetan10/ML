export const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.REACT_APP_PORT,
  totalProductsShown: process.env.REACT_APP_TOTAL_PRODUCTS_SHOWN,
  mjBusquedaNoEncontrada: process.env.REACT_APP_MENSAJE_BUSQUEDA_NO_ENCONTRADA
};
