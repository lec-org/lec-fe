import { Cards, Clock, ClockData, DayThings } from '@views/Main/pages'
import { Login, Main } from '@views/index'
import { createHashRouter, RouteObject } from 'react-router-dom'

export const _routes: RouteObject[] = [
	{
		path: '/',
		element: <Main />,
		children: [
			{
				// * 打卡页面
				path: '/clock',
				element: <Clock />,
			},
			{
				// * 统计打卡数据
				path: '/statistics',
				element: <ClockData />,
			},
			{
				// * 日程
				path: '/schedule',
				element: <DayThings />,
			},
			{
				// * 抽奖
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
	createHashRouter(_routes)
