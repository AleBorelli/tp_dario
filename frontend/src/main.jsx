import React from 'react'
import ReactDOM from 'react-dom/client'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import SSRProvider from 'react-bootstrap/SSRProvider';
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <SSRProvider>
        <App/>
      </SSRProvider>
    </Provider>
  </React.StrictMode>
)
