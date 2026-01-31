import { dom } from './dom.js'
import { login, register } from './auth.js'
import { saveSession } from './session.js'

dom.btnLogin.addEventListener('click', async () => {
  try {
    dom.error.textContent = ''

    const user = await login(
      dom.email.value,
      dom.password.value
    )

    saveSession(user)

    if (user.role === 'admin') {
      window.location.href = 'admin.html'
    } else {
      window.location.href = 'user.html'
    }

  } catch (err) {
    dom.error.textContent = err.message
  }
})

// REGISTER
dom.btnRegister.addEventListener('click', async () => {
  await register(
    dom.regEmail.value,
    dom.regPassword.value
  )

  alert('Usuario registrado')
})
