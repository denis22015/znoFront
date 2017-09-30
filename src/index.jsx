import React from 'react'
import { render } from 'react-dom'
//import { Provider } from 'react-redux'
import StartPage from './containers/StartPage.jsx'
import { BrowserRouter } from 'react-router-dom';

//import './styles/app.css'
//import configureStore from './store/configureStore'

//const store = configureStore()

render(
    <BrowserRouter >
      <StartPage />
    </BrowserRouter>,
  document.getElementById('root')
)
