import { useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'

export default function RouterContext() {
  const params = useParams()
  const location = useLocation()

  useEffect(() => {
    console.log('params updates', params)
  }, [params])

  useEffect(() => {
    console.log('location updates', location)
  }, [location])

  return (
    <div>
      {/* 你的路由内容 */}
      <p>Current path: {location.pathname}</p>
    </div>
  );
}
