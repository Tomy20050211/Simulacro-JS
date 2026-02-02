import { requireAuth } from './guards.js'
import { clearSession } from './session.js'
import { getOrders, getUsers } from './api.js'

requireAuth('admin')

const list = document.getElementById('orders')

document.getElementById('logout').addEventListener('click', () => {
  clearSession()
  location.href = 'index.html'
})

async function render() {
  const orders = await getOrders()
  const users = await getUsers()

  list.innerHTML = ''

  orders.forEach(o => {
    const user = users.find(u => u.id === o.userId)

    list.innerHTML += `
      <li>
        ${o.product} - ${o.status} 
        (usuario: ${user.email})
      </li>
    `
  })
}

render()
