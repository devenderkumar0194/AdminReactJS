import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function Profile() {
  const { user } = useAuth()
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/dashboard')
  }

  return (
    <div className="p-6">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-slate-800">User Profile</h1>
            <button
              onClick={handleBack}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
            >
              ← Back to Dashboard
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <div className="px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
                  {user?.name || 'N/A'}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <div className="px-4 py-3 bg-slate-50 rounded-lg border border-slate-200">
                  {user?.email || 'N/A'}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <h2 className="text-lg font-semibold text-slate-800 mb-4">Account Information</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  This is your admin account profile. You can manage your account settings here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}