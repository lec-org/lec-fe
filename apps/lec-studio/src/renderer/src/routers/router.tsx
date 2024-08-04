import { Cards, Clock, ClockData, Login, Main } from '@renderer/pages'
import { createHashRouter, RouteObject } from 'react-router-dom'

const routes: RouteObject[] = [
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/clock',
				element: <Clock />,
			},
			{
				// * 统计打卡数据
				path: '/statistics',
				element: <ClockData />,
			},
			{
				path: '/lottery',
				element: <Cards />,
			},
		],
	},
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: '*',
		element: <div>404 Not Found</div>,
	},
]
export const router: ReturnType<typeof createHashRouter> =
	createHashRouter(routes)
