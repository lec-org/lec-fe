/**
 * 观察掘金发现许多页面都包含了一个header，因此我们将其抽象为一个组件，并在这里使用。 
 */
import '@/assets/css/root.scss'
import { Outlet } from 'react-router-dom'
import { Header, SideNav } from '@/components'

export default function Root() {
  
  return (
    <>
      <div className="main-header-box">
        <Header />
      </div>
      <main className="container">
        <div className="index-nav">
          <SideNav />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </main>
    </>
  )
}
