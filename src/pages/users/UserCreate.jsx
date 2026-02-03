import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../../services/userService'
import { userSchema, validate } from '../../validators'

const ROLES = ['User', 'Editor', 'Admin']
const STATUSES = ['active', 'inactive']

export default function UserCreate() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'active',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setErrors({})
    const validation = validate(userSchema, form)
    if (validation.error) {
      setErrors(validation.errors || {})
      return
    }
    setLoading(true)
    try {
      await createUser(validation.value)
      navigate('/users')
    } catch (err) {
      setError(err.message || 'Failed to create user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Add User</h1>
        <p className="text-slate-600 mt-1">Create a new user in the system.</p>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 text-red-600 text-sm">{error}</div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${errors.role ? 'border-red-500' : 'border-slate-300'}`}
            >
              {ROLES.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
            {errors.role && (
              <p className="mt-1 text-sm text-red-600">{errors.role}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Status</label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none ${errors.status ? 'border-red-500' : 'border-slate-300'}`}
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.status && (
              <p className="mt-1 text-sm text-red-600">{errors.status}</p>
            )}
          </div>
          <div className="flex gap-3 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg disabled:opacity-50"
            >
              {loading ? 'Creating...' : 'Create User'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/users')}
              className="px-4 py-2 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
