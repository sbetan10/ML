import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { Context, store } from './context/store'

describe('App', () => {

  it('renders without crashig', () => {
    const div = document.createElement('div')
    ReactDom.render((
      <Context.Provider value={store}>
        <App />
      </Context.Provider>
    ), div)
    ReactDom.unmountComponentAtNode(div)
  });
})
