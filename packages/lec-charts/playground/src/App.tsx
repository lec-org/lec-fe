import { simpleTicks } from '@lec/charts/src/scale/linear'
import { useState } from 'react'
const App = () => {
	const ticks = simpleTicks(0.1, 9.9, 6)
	console.log(ticks)
	const [data, setData] = useState(ticks)
	return <div>{`[${data}]`}</div>
}

export default App
