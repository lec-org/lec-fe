import { asideNav } from "@/constants/nav"
import { Outlet, useNavigate } from "react-router-dom"

export default function Home() {
  const navigator = useNavigate()
  return (
    <div>
      <aside>
        <h1>Sidebar</h1>
        <p>This is the sidebar</p>
        {
          asideNav.map((item, index) =>
            <span
              className="nav-item"
              key={index + item.label + item.path}
              onClick={() => navigator(item.path)}
            >
              {item.label}
            </span>)
        }
      </aside>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}
