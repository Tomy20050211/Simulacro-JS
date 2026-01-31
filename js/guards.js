import { getSession, clearSession } from './session.js'

export function requireAuth(role) {
  const user = getSession()

  if (!user || user.role !== role) {
    clearSession()
    window.location.replace('index.html') 
  }
}
