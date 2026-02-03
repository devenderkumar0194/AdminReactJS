import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: '📊' },
  {
    label: 'User',
    icon: '👥',
    children: [
      { to: '/users', label: 'List' },
      { to: '/users/new', label: 'Add' },
    ],
  },
]

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
    isActive ? 'bg-sidebar-active text-white' : 'hover:bg-sidebar-hover text-slate-300'
  }`

const nestedLinkClass = ({ isActive }) =>
  `flex items-center gap-2 py-2.5 px-4 pl-10 rounded-lg transition-colors text-sm ${
    isActive ? 'bg-sidebar-active text-white' : 'hover:bg-sidebar-hover text-slate-300'
  }`

export function Sidebar() {
  const location = useLocation()
  const isUserSectionActive = location.pathname.startsWith('/users')
  const [userOpen, setUserOpen] = useState(isUserSectionActive)

  useEffect(() => {
    if (isUserSectionActive) setUserOpen(true)
  }, [isUserSectionActive])

  return (
    <aside className="w-64 bg-sidebar-bg text-slate-200 flex flex-col shrink-0">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold text-white">Admin Panel</h1>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          if (item.to) {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </NavLink>
            )
          }
          const isOpen = item.label === 'User' ? userOpen : false
          const setOpen = item.label === 'User' ? setUserOpen : () => {}
          const hasActiveChild = item.children?.some((c) => location.pathname === c.to || location.pathname.startsWith(c.to + '/'))
          return (
            <div key={item.label} className="space-y-0.5">
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors w-full text-left ${
                  hasActiveChild ? 'bg-sidebar-active/50 text-white' : 'hover:bg-sidebar-hover text-slate-300'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
                <span className={`transition-transform ${isOpen ? 'rotate-90' : ''}`}>▶</span>
              </button>
              {isOpen && item.children?.map((child) => (
                <NavLink
                  key={child.to}
                  to={child.to}
                  className={nestedLinkClass}
                >
                  <span>{child.label}</span>
                </NavLink>
              ))}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
