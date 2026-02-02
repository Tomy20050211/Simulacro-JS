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

document.body.insertAdjacentHTML('beforeend', `
    <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl shadow-xl w-[90%] max-w-md p-6 text-center">
        
        <div class="text-green-500 text-5xl mb-4">✅</div>

        <h2 class="text-2xl font-bold mb-2">¡Usuario creado!</h2>
        <p class="text-gray-600 mb-6">
          El usuario se creó exitosamente.
        </p>

        <button 
          onclick="this.closest('.fixed').remove()"
          class="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Aceptar
        </button>
      </div>
    </div>
  `)
})
