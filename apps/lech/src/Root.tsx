/**
 * 观察掘金发现许多页面都包含了一个header，因此我们将其抽象为一个组件，并在这里使用。 
 */
import '@/assets/css/root.css'
import { subNavRoutes } from './constants/route'
import { Outlet } from 'react-router-dom'

export default function Root() {
  
  return (
    <>
      <div className="header">
        <h1>欢迎来到Lech</h1>
        <p>lec tech stack</p>
      </div>
      <main className="container">
        <div className="index-nav">
          <nav className="side-navigation-wrap">
            {
              subNavRoutes.map((route, index) => (
              <div 
                key={index + route.path + route.label}
                className="nav-item-wrap"
              >
                <div className="nav-item-content">
                  <a href={route.path} className='nav-item'>
                    <div className="icon"></div>
                    <div className="nav-item-text">{route.label}</div>
                  </a>
                </div>
              </div>))
            }
          </nav>
        </div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  )
}
