import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import searchIcon from '../assets/ic_Search.png'

const SearchBar = () => {
  const [filterText, setFilterText] = useState('')
  let history = useHistory();

  const handleChange = (event) => {
    setFilterText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    // Validación para no hacer la consula con el texto vacio
    if (filterText.trim() !== '') {
      // Se pasa la consulta como Query Parameter
      history.push("/items/?search=" + filterText);
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <input type="text" id="search" value={filterText} placeholder="Nunca dejes de buscar" onChange={handleChange} />
      <button type="submit"><img src={searchIcon} alt="Logo Mercado libre" /></button>
    </form>
  )
}

export default SearchBar
