import React from "react"

interface ButtonProps {
	onClick: () => void
	children: null | string | React.ReactNode
	disabled: boolean
	type: 'button' | 'submit' | 'reset'
}
const Button = (props: ButtonProps) => {
	const { onClick, children, disabled, type } = props
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			type={type}>
			{children}
		</button>
  )
}

export default Button
