import React, { useContext, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import { addCategories } from '../context/actionCreator'
import { ProductInitial } from '../context/initialState'
import { Context } from '../context/store'
import ProductRow from './ProductRow'
import { config } from '../config/config'
import { fetchProducts } from '../services/productsService'

const styles = {
  circularProgress: {
    marginLeft: '50%'
  }
}
const FilteredProductsList = () => {
  const { dispatch } = useContext(Context)
  const [productsState, setProducts] = useState({ isLoading: true, product: { author: { name: '', lastName: '' }, item: [ProductInitial] } })
  // Permite obtener el queryParams de la url
  let query = new URLSearchParams(useLocation().search);
  // Sobreescribe los estilos usando el hook de Material-UI
  const classes = makeStyles(styles)()

  useEffect(() => {
    async function fetch() {
      // Se consulta los productos según el query
      const response = await fetchProducts(query.get("search"))
      setProducts({ isLoading: false, products: response })
      // Se envía con al estado global de la aplicación las categorias de los productos encontrados
      dispatch(addCategories(response.categories))
    }
    fetch()
  }, [dispatch, query.get("search")])

  // Función que itera la lista de productos y los retorna como ProductRow
  const renderProductsRows = () => {
    const rows = []
    // Si no tenemos productos, entonces no hacemos nada
    if (productsState.products.items) {
      let productCount = 0;
      productsState.products.items.every(product => {
        rows.push(<ProductRow key={product.id} product={product} />)
        productCount++
        // Se agrega condicional para limitar la cantidad de productos a renderizar. la cantidad se obtien desde los properties
        if (productCount === parseInt(config.totalProductsShown)) {
          return false;
        }
        return true
      })
    }
    return rows
  }

  // Se muestra el Loading mientras se obtiene la lista de productos
  if (productsState.isLoading) return (<CircularProgress className={classes.circularProgress} />)

  // Si la API no encuentra ningun product relacionado con la busqueda, retornamos la pagina de porducstNotFound
  if (productsState.products.items.length === 0) {
    return (
      <div className="product_not_found">
        {config.mjBusquedaNoEncontrada}
      </div>
    )
  } else {
    return (
      <div className="filtered_products_list">
        {renderProductsRows()}
      </div>
    )
  }
}

export default FilteredProductsList
