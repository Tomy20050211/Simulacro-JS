const URL = 'http://localhost:3000'

export async function getUsers() {
  const res = await fetch(`${URL}/users`)
  return res.json()
}

export async function createUser(user) {
  const res = await fetch(`${URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  })
  return res.json()
}

// -------- ORDERS --------

export async function getOrders() {
  const res = await fetch(`${URL}/orders`)
  return res.json()
}

export async function createOrder(order) {
  const res = await fetch(`${URL}/orders`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order)
  })
  return res.json()
}

export async function deleteOrder(id) {
  await fetch(`${URL}/orders/${id}`, {
    method: 'DELETE'
  })
}
