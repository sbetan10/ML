import React, { useContext } from 'react'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { Context } from '../context/store';

const styles = {
  link: {
    fontSize: '14px',
    color: 'inherit'
  }
}

const CategoriesBreadcrumb = () => {
  // Obtiene las categorias desde las variables globales
  const { globalState } = useContext(Context)
  const { categories } = globalState
  // Sobreescribe los estilos usando el hook de Material-UI
  const classes = makeStyles(styles)()

  const render = () => {
    const rows = []
    // Itera las categorias para crear los elementos de la lista para el breadcrumb
    categories.forEach((category, index) => {
      rows.push(<Link className={classes.link} key={index}>{category}</Link>)
    });
    return rows
  }

  if (categories) return (
    <div className="categories_breadcrumb">
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {render()}
      </Breadcrumbs>
    </div>
  )

  // Si las categorias no se han cargado, no se muestra el componente
  return (<></>)
}

export default CategoriesBreadcrumb
