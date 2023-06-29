import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {configureStore} from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import bannerReducer from './helper/Helper.jsx'
import changemovieSlice from './helper/Movielist.jsx'
import hiddenSlice from './helper/Hideen.jsx'

const store = configureStore({
  reducer:{
    movie:bannerReducer,
    changemovie:changemovieSlice,
    hidden:hiddenSlice

  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App/>
    </Provider>
  </React.StrictMode>,
)
