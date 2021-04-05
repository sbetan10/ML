import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Store } from './context/store'
import Header from './components/Header'
import FilteredProductsList from './components/FilteredProductsList'
import ProductDetail from './components/ProductDetail'
import CategoriesBreadcrumb from './components/CategoriesBreadcrumb'
import './sass/app.scss';

const App = () => {
  return (
    <Store>
      <Router>
        <div className="grid_container">
          <Header />
          <div className="main">
            <Switch>
              <Route exact path="/items">
                <CategoriesBreadcrumb />
                <FilteredProductsList />
              </Route>
              <Route exact path="/items/:id">
                <CategoriesBreadcrumb />
                <ProductDetail />
              </Route>
              <Route exact path="/">
                <div style={{ textAlign: 'center', padding: '10px', fontSize: '20px' }}>Welcome to Home!</div>
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </Store>
  )
}

export default App;
