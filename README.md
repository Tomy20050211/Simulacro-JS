# Simulacro-JS
# 🔐 Login con Roles + CRUD de Pedidos (JSON Server)

Proyecto frontend desarrollado con **HTML, JavaScript (ES Modules)** y **JSON Server** que implementa:

- Autenticación básica (login / register)
- Manejo de sesiones con `localStorage`
- Control de acceso por roles (`admin` / `user`)
- CRUD de pedidos
- Persistencia de datos simulada con JSON Server

> ⚠️ **IMPORTANTE – ADVERTENCIA ACADÉMICA**
>
> Este proyecto está pensado como **base de aprendizaje**.
>  
> ❗ **NO se recomienda usar este código tal cual para entregas académicas o proyectos evaluados.**
>  
> Si vas a usarlo como referencia:
> - Cambia nombres de variables y funciones
> - Modifica la estructura del HTML
> - Ajusta estilos y flujos
> - Agrega o elimina funcionalidades
>
> El objetivo es **entender la lógica**, no copiar el proyecto completo.

---

## 🚀 Tecnologías usadas

- HTML5
- JavaScript Vanilla (ES Modules)
- Tailwind CSS (CDN)
- JSON Server
- LocalStorage (sesión)

---

## 📂 Estructura del proyecto

```txt
/
├─ index.html        # Login y Register
├─ user.html         # Panel de usuario
├─ admin.html        # Panel de administrador
├─ js/
│  ├─ main.js        # Login / Register
│  ├─ auth.js        # Lógica de autenticación
│  ├─ api.js         # Comunicación con JSON Server
│  ├─ session.js    # Manejo de sesión
│  ├─ guards.js     # Protección por rol
│  ├─ user.js       # CRUD de pedidos (user)
│  ├─ admin.js      # Visualización de pedidos (admin)
│  └─ dom.js         # Referencias al DOM
└─ db.json           # Base de datos simulada
