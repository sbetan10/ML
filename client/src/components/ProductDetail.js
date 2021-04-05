import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles'
import { addCategories } from '../context/actionCreator'
import { ProductInitial } from '../context/initialState'
import { Context } from '../context/store';
import { config } from '../config/config'
import { fetchDescriptionProduct, fetchProduct, fetchCategoriesProduct } from '../services/productsService'
import { PriceUtil } from '../utils/PriceUtil'

const styles = {
  circularProgress: {
    marginLeft: '50%'
  }
}
const ProductDetail = () => {
  // Se obtiene el id del producto que será buscado
  let { id } = useParams()
  const [productState, setProductState] = useState({ isLoading: true, product: { author: { name: '', lastName: '' }, item: ProductInitial } })
  const [descriptionProduct, setDescriptionProduct] = useState('')
  const { dispatch } = useContext(Context)
  // Sobreescribe los estilos usando el hook de Material-UI
  const classes = makeStyles(styles)()

  useEffect(() => {
    async function fecth() {
      // Se consula el producto por su id
      const productResponse = await fetchProduct(id)
      // Solo si el producto fue entontrado, realizamos las demas tareas
      if (productResponse.item) {
        setProductState({ isLoading: false, product: productResponse })
        // Se consulta la descripción del producto por su id
        const descriptionProduct = await fetchDescriptionProduct(id)
        setDescriptionProduct(descriptionProduct.description)
        // Se consulta las categorias del producto
        const categoriesProduct = await fetchCategoriesProduct(productResponse.item.category_id)
        dispatch(addCategories(categoriesProduct.categories))
      } else {
        // En caso de no encontrar el producto, desactivamos el loading
        setProductState({ isLoading: false })
      }
    }
    fecth()
  }, [dispatch, id])

  if (productState.isLoading) {
    return (<CircularProgress className={classes.circularProgress} />)
  }

  if (productState.product && productState.product.item) {
    return (
      <div className="product_detail">
        <div className="img_product">
          <img src={productState.product.item.picture} alt={productState.product.item.title} />
        </div>

        <div className="title_product">
          <div className="stock">
            {productState.product.item.condition === 'new' ? 'Nuevo - ' : 'Usado - '}
            {productState.product.item.sold_quantity} Vendidos
          </div>
          <div className="title">
            {productState.product.item.title}
          </div>
          <div className="price">
            ${PriceUtil(productState.product.item.price.currency)}
          </div>
          <button>
            Comprar
          </button>
        </div>

        <div className="description_product">
          <div className="title">
            Descripción del producto
          </div>
          <div className="descripcion">
            {descriptionProduct}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div style={{ textAlign: 'center', fontSize: '25px' }}>
        {config.mjBusquedaNoEncontrada}
      </div>
    )
  }

}

export default ProductDetail
