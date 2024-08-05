import useMount from '@lec/hooks/src/useMount'
import { Children } from 'react'
import { useNavigate } from 'react-router-dom'
interface INavLinkMenuProps {
	children: JSX.Element[]
	defaultUrl: string
	defaultKey?: string
	defaultClassName?: string
	activeClassName?: string
	className?: string
}

const NavLinkMenu = ({
	className,
	defaultUrl,
	children,
}: INavLinkMenuProps) => {
	const navigator = useNavigate()

	useMount(() => {
		navigator(defaultUrl)
	})
	return (
		<nav className={className}>
			{Children.map(children, (child) => child)}
		</nav>
	)
}

export default NavLinkMenu
