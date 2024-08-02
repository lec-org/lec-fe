import React from "react"
import './input.scss'

interface InputProps {
	value?: string
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
	placeholder?: string
	type?: string
	disabled?: boolean
	className?: string
	style?: React.CSSProperties
	id?: string
	name?: string
	autoFocus?: boolean
	maxLength?: number
	minLength?: number
	readOnly?: boolean
	required?: boolean
	pattern?: string
	title?: string
	inputMode?: string
	list?: string
	autoComplete?: string
}
const Input = (props: InputProps) => {
	const { value, onChange, placeholder, type, disabled, className } = props
	return (
		<input
			value={value}
			onChange={onChange}
			placeholder={placeholder}
			type={type}
			disabled={disabled}
			className={[className, 'lec-input'].join(' ')}
		/>
	)
}

export default Input