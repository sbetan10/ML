import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import logoML from '../assets/Logo_ML.png'

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logoML">
        <img src={logoML} alt="logoML" />
      </Link>
      <div className="search">
        <SearchBar />
      </div>
    </div>
  )
}

export default Header
