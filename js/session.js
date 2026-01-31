const KEY = 'user'

export function saveSession(user) {
  localStorage.setItem(KEY, JSON.stringify(user))
}

export function getSession() {
  return JSON.parse(localStorage.getItem(KEY))
}

export function clearSession() {
  localStorage.removeItem(KEY)
}
