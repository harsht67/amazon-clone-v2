import './index.scss'
import App from './App'
import store from './store/store'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)