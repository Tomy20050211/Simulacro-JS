import { getUsers, createUser } from './api.js'

export async function login(email, password) {
  const users = await getUsers()

  const user = users.find(u =>
    u.email === email && u.password === password
  )

  if (!user) {
    throw new Error('Usuario o contraseña incorrectos')
  }

  return user
}

export async function register(email, password) {
  const newUser = {
    email,
    password,
    role: 'user'
  }

  await createUser(newUser)
}
