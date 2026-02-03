const STORAGE_KEY = 'admin_users'

const defaultUsers = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'User', status: 'active' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Editor', status: 'active' },
  { id: '3', name: 'Bob Wilson', email: 'bob@example.com', role: 'User', status: 'inactive' },
]

function getUsers() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) return JSON.parse(stored)
  } catch {}
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultUsers))
  return defaultUsers
}

function saveUsers(users) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users))
}

export function fetchUsers() {
  return Promise.resolve(getUsers())
}

export function fetchUserById(id) {
  const users = getUsers()
  const user = users.find((u) => u.id === id)
  return Promise.resolve(user || null)
}

export function createUser(data) {
  const users = getUsers()
  const id = String(Date.now())
  const newUser = { id, ...data, status: data.status || 'active' }
  users.push(newUser)
  saveUsers(users)
  return Promise.resolve(newUser)
}

export function updateUser(id, data) {
  const users = getUsers()
  const index = users.findIndex((u) => u.id === id)
  if (index === -1) return Promise.reject(new Error('User not found'))
  users[index] = { ...users[index], ...data }
  saveUsers(users)
  return Promise.resolve(users[index])
}

export function deleteUser(id) {
  const users = getUsers().filter((u) => u.id !== id)
  saveUsers(users)
  return Promise.resolve()
}
