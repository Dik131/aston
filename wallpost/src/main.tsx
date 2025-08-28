import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import  App  from './app/App'
import { ThemeProvider } from './shared/lib/theme/ThemeContext';
import { store } from './app/providers/store/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
