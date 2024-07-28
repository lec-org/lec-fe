import React from 'react'
import './button.scss'
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?:
		| 'primary'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'link'
		| 'icon'
		| 'with-icon'
		| 'loading'
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ onClick, children, disabled, variant, className, ...props }, ref) => {
		return (
			<button
				className={['lec-button', `btn-${variant}`, className].join(
					' ',
				)}
				onClick={onClick}
				disabled={disabled}
				ref={ref}
				{...props}>
				{children}
			</button>
		)
	},
)

export default Button
