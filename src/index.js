import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStlye from './constants/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStlye />
    <App />
  </React.StrictMode>
)
