import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const navItems = [
  { 
    to: '/dashboard', 
    label: 'Dashboard', 
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    badge: null
  },
  {
    label: 'Users',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    children: [
      { to: '/users', label: 'User List', icon: '📋' },
      { to: '/users/new', label: 'Add User', icon: '➕' },
    ],
    badge: '2'
  },
  {
    label: 'Settings',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    children: [
      { to: '/settings/profile', label: 'Profile Settings', icon: '👤' },
      { to: '/settings/security', label: 'Security', icon: '🔒' },
      { to: '/settings/preferences', label: 'Preferences', icon: '⚙️' },
    ],
    badge: null
  }
]

const linkClass = ({ isActive }) =>
  `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ease-in-out ${
    isActive 
      ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/20' 
      : 'text-slate-300 hover:bg-slate-800/50 hover:text-white hover:shadow-md'
  }`

const nestedLinkClass = ({ isActive }) =>
  `flex items-center gap-3 py-2.5 px-4 pl-12 rounded-lg transition-all duration-200 ease-in-out text-sm ${
    isActive 
      ? 'bg-slate-700/50 text-white font-medium' 
      : 'text-slate-400 hover:bg-slate-800/30 hover:text-slate-200'
  }`

export function Sidebar() {
  const { user } = useAuth()
  const location = useLocation()
  const [openSections, setOpenSections] = useState({})
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const searchRef = useRef(null)

  // Initialize open sections based on current location
  useEffect(() => {
    const activeSections = {}
    navItems.forEach(item => {
      if (item.children) {
        const isActive = item.children.some(child => 
          location.pathname === child.to || location.pathname.startsWith(child.to + '/')
        )
        activeSections[item.label] = isActive
      }
    })
    setOpenSections(activeSections)
  }, [location.pathname])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const toggleSection = (label) => {
    setOpenSections(prev => ({
      ...prev,
      [label]: !prev[label]
    }))
  }

  const filteredItems = navItems.filter(item => {
    if (!searchQuery) return true
    const matchesLabel = item.label.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesChildren = item.children?.some(child => 
      child.label.toLowerCase().includes(searchQuery.toLowerCase())
    )
    return matchesLabel || matchesChildren
  })

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-900 to-slate-800 text-slate-200 flex flex-col shrink-0 border-r border-slate-700/50 shadow-2xl">
      {/* Header */}
      <div className="p-5 border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
            Admin Panel
          </h1>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-lg hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        {/* Search Bar */}
        {isSearchOpen && (
          <div ref={searchRef} className="relative mb-3">
            <input
              type="text"
              placeholder="Search menu..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              autoFocus
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* User Profile Section */}
        <div className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-xl">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
            {user?.name?.charAt(0)?.toUpperCase() || 'A'}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">{user?.name || 'Admin User'}</p>
            <p className="text-xs text-slate-400 truncate">{user?.email || 'admin@example.com'}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto custom-scrollbar">
        {filteredItems.map((item) => {
          if (item.to) {
            return (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            )
          }
          
          const isOpen = openSections[item.label] || false
          const hasActiveChild = item.children?.some((c) => 
            location.pathname === c.to || location.pathname.startsWith(c.to + '/')
          )
          
          return (
            <div key={item.label} className="space-y-1">
              <button
                type="button"
                onClick={() => toggleSection(item.label)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full text-left transition-all duration-200 ease-in-out ${
                  hasActiveChild 
                    ? 'bg-slate-800/50 text-white shadow-md' 
                    : 'text-slate-300 hover:bg-slate-800/30 hover:text-white'
                }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                <span className="font-medium flex-1">{item.label}</span>
                {item.badge && (
                  <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="ml-2 pl-2 border-l-2 border-slate-700/50 space-y-1">
                  {item.children?.map((child) => (
                    <NavLink
                      key={child.to}
                      to={child.to}
                      className={nestedLinkClass}
                    >
                      <span className="text-base">{child.icon}</span>
                      <span>{child.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700/50 bg-slate-900/30 backdrop-blur-sm">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>v1.0.0</span>
          <span>© 2024</span>
        </div>
      </div>
    </aside>
  )
}
