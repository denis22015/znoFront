import React from 'react'
import { render } from 'react-dom'
//import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import './../vendor/font-awesome/css/font-awesome.min.css'
import './../vendor/bootstrap/css/bootstrap.min.css'


//import './styles/app.css'
//import configureStore from './store/configureStore'

//const store = configureStore()

render(
    <div >
      <App />
    </div>,
  document.getElementById('root')
)
