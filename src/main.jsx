import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './Components/store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)

/*Import the Provider component from the react-redux library, which allows the Redux store to be accessed by all components in the application.

Import the Redux store from the store.js file.

Wrap the App with the Provider component and pass the Redux store as a prop. This allows every component access to the details of store.js.*/