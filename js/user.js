import { requireAuth } from './guards.js'
import { clearSession } from './session.js'

requireAuth('user')

document.getElementById('logout').addEventListener('click', () => {
  clearSession()
  window.location.href = 'index.html'
})

window.addEventListener('pageshow', (event) => {
  if (event.persisted) {
    window.location.reload()
  }
})
