import { HoverEvents } from '@react-types/shared'
import { useState } from 'react'

interface HoverProps extends HoverEvents {
	isDisabled: boolean
}

const useHover = (props: HoverProps) => {
	const [isHovered, setIsHovered] = useState(false)
}

export default useHover
