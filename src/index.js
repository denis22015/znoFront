import React from 'react'
import { render } from 'react-dom'
//import { Provider } from 'react-redux'
import App from './containers/App'
//import './styles/app.css'
//import configureStore from './store/configureStore'

//const store = configureStore()

render(
    <div >
      <App />
    </div>,
  document.getElementById('root')
)
