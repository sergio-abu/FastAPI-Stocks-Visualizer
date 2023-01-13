import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import BottomBar from './components/BottomBar'
import TopBar from './components/TopBar'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TopBar />
    <App />
    <BottomBar />
  </React.StrictMode>,
)
