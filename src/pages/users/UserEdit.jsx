import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { fetchUserById, updateUser } from '../../services/userService'
import { userSchema, validate } from '../../validators'

const ROLES = ['User', 'Editor', 'Admin']
const STATUSES = ['active', 'inactive']

export default function UserEdit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: '',
    email: '',
    role: 'User',
    status: 'active',
  })

  useEffect(() => {
    fetchUserById(id)
      .then((user) => {
        if (user) setForm({
          name: user.name,
          email: user.email,
          role: user.role || 'User',
          status: user.status || 'active',
        })
        else setError('User not found')
      })
      .catch(() => setError('Failed to load user'))
      .finally(() => setLoading(false))
  }, [id])

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
    setSaving(true)
    try {
      await updateUser(id, validation.value)
      navigate('/users')
    } catch (err) {
      setError(err.message || 'Failed to update user')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-10 w-10 border-2 border-primary-500 border-t-transparent" />
      </div>
    )
  }

  if (error && !form.name) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <p className="text-red-600">{error}</p>
        <button
          onClick={() => navigate('/users')}
          className="mt-4 text-primary-600 hover:underline"
        >
          Back to Users
        </button>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-800">Edit User</h1>
        <p className="text-slate-600 mt-1">Update user details.</p>
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
              disabled={saving}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg disabled:opacity-50"
            >
              {saving ? 'Saving...' : 'Save Changes'}
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
