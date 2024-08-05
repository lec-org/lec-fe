import { useCallback, useState } from 'react'

const useUpdate = () => {
	const [, forceUpdate] = useState({})

	return useCallback(() => forceUpdate({}), [])
}

export default useUpdate
