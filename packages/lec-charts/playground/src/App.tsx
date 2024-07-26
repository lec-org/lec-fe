import { simpleTicks } from '@lec/charts/src/scale/linear'
import { useState } from 'react'
import { ceil, floor, nice, ticks, tickStep } from '../../src/scale/utils'
const App = () => {
  let d0 = 0.1
  let d1 = 9.9
  const val = ticks(d0, d1, 6);
  console.log(val)
  ;[d0, d1] = nice([0.1, 9.9], {
    floor: (x) => floor(x, ticks),
    ceil: (x) => ceil(x, ticks),
  });
  console.log(d0, d1)
  const data  = simpleTicks(d0, d1, 6)
	return <div>{`[${data}]`}</div>
}

export default App
