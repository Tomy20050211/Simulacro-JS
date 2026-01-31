const URL = 'http://localhost:3000/users'

export async function getUsers() {
  const res = await fetch(URL)
  return await res.json()
}

export async function createUser(user) {
  await fetch(URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
}
