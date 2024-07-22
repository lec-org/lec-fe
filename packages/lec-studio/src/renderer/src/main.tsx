import React from 'react'
import * as ReactDOM from 'react-dom/client'

import Root from './Root'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
)
