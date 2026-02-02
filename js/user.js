import { requireAuth } from './guards.js'
import { clearSession, getSession } from './session.js'
import { getOrders, createOrder, deleteOrder } from './api.js'

requireAuth('user')

const user = getSession()

const productInput = document.getElementById('product')
const ordersList = document.getElementById('orders')

document.getElementById('logout').addEventListener('click', () => {
  clearSession()
  location.href = 'index.html'
})

document.getElementById('addOrder').addEventListener('click', async () => {
  if (!productInput.value) return

  await createOrder({
    product: productInput.value,
    status: 'pendiente',
    userId: user.id
  })

  productInput.value = ''
  render()
})

async function render() {
  const orders = await getOrders()
  const myOrders = orders.filter(o => o.userId === user.id)

  ordersList.innerHTML = ''

  myOrders.forEach(o => {
    ordersList.innerHTML += `
      <li>
        ${o.product} - ${o.status}
        <button onclick="deleteOrder(${o.id})">❌</button>
      </li>
    `
  })
}

window.deleteOrder = async (id) => {
  await deleteOrder(id)
  render()
}

render()
