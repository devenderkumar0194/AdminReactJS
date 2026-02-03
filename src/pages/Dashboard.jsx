import { useAuth } from '../context/AuthContext'

const stats = [
  { label: 'Total Users', value: '—', icon: '👥', color: 'bg-primary-500' },
  { label: 'Active Sessions', value: '1', icon: '🔐', color: 'bg-emerald-500' },
  { label: 'Reports', value: '—', icon: '📄', color: 'bg-amber-500' },
]

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Dashboard</h1>
      <p className="text-slate-600 mb-8">
        Hello, <strong>{user?.name}</strong>. Here’s an overview of your admin panel.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(({ label, value, icon, color }) => (
          <div
            key={label}
            className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex items-center gap-4"
          >
            <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center text-2xl`}>
              {icon}
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{label}</p>
              <p className="text-2xl font-bold text-slate-800">{value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
