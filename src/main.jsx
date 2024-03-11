// import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import App from './App'

const notes = [
  {
    id:1,
    content: 'HTML is easy',
    important: true
  },
  {
    id:2,
    content: 'Browser can only run JS',
    important: false
  },
  {
    id:3,
    content: 'GET and POST are most important',
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>,
)
