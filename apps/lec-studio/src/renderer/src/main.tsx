import React from 'react'
import * as ReactDOM from 'react-dom/client'

import '@styles/global.scss'
import Root from './Root'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Root />
	</React.StrictMode>,
)
