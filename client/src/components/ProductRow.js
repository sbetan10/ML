import React from 'react'
import { Link } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles'
import { PriceUtil } from '../utils/PriceUtil'
import shippingIcon from '../assets/ic_shipping.png'

const styles = {
  divide: {
    opacity: '0.5'
  }
}
const ProductRow = props => {
  const { product } = props
  // Sobreescribe los estilos usando el hook de Material-UI
  const classes = makeStyles(styles)()

  return (
    <Link className="link_product_row" to={`/items/${product.id}`}>
      <div className="product_row">
        <div className="img_container">
          <img src={product.picture} alt={product.title} />
        </div>
        <div className="data_container">
          <div className="pricer_container">

            <div className="price">
              ${PriceUtil(product.price.currency)}
              {product.free_shipping && <img src={shippingIcon} alt="shipping" />}
            </div>

            <div className="ubicacion">
              {product.state_name}
            </div>

          </div>
          <div className="title">
            {product.title}
          </div>
        </div>
      </div>
      <Divider variant="middle" className={classes.divide} />
    </Link>
  )
}

export default ProductRow
