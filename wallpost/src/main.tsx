import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from './app/App'
import { ThemeProvider } from './shared/lib/theme/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
