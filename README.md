# RealTech-ESFOT – Backend (API RESTful)

**Tema 6:** Desarrollo de un sistema web para la simulación de pruebas técnicas basadas en casos de estudio de entornos empresariales reales y niveles de complejidad adaptativos para estudiantes de la ESFOT.

**Stack:** Node.js · Express 5 · MongoDB (Mongoose) · JWT · bcryptjs · Nodemailer

---

## Sprint 0 – Configuración del ambiente (Backend)

| # | Tarea | Estado |
|---|-------|--------|
| 1 | Instalar Node.js, MongoDB y Postman/Thunder Client | ✔ |
| 2 | Crear carpeta `backend` e iniciar proyecto (`npm init -y`) | ✔ |
| 3 | Habilitar ES Modules (`"type": "module"`) y scripts `start` / `dev` | ✔ |
| 4 | Instalar dependencias: `express mongoose dotenv bcryptjs jsonwebtoken nodemailer cors` | ✔ |
| 5 | Estructura de carpetas: `controllers / routers / models / middlewares / helpers / config` | ✔ |
| 6 | Archivo `.env` y `.env.example` (puerto, BD, JWT, SMTP) + `.gitignore` | ✔ |
| 7 | Servidor Express (`server.js`) con `express.json()`, `cors` y manejo de errores | ✔ |
| 8 | Conexión a MongoDB (`database.js`) | ✔ |
| 9 | Repositorio GitHub y ramas por integrante | ✔ |

**Ejecución**
```bash
npm install
cp .env.example .env     # completar valores
npm run dev
```

## Sprint 1 – Módulo Usuarios (Estudiantes / Docentes)

Equivalente al "Módulo Veterinarios" del ejemplo: gestión de cuentas y acceso, base para los siguientes módulos (casos de estudio, pruebas, motor adaptativo).

**Modelo `Usuario`:** nombre, apellido, email (único), password (cifrado), celular, carrera, semestre, `nivelComplejidad` (basico | intermedio | avanzado), `rol` (estudiante | docente | admin), status, token, confirmEmail.

| Historia de usuario | Método | Endpoint | Acceso |
|---|---|---|---|
| Registrarme como estudiante | POST | `/api/registro` | Público |
| Confirmar cuenta por correo | GET | `/api/confirmar/:token` | Público |
| Iniciar sesión (JWT) | POST | `/api/login` | Público |
| Solicitar recuperación de password | POST | `/api/recuperarpassword` | Público |
| Validar token de recuperación | GET | `/api/recuperarpassword/:token` | Público |
| Crear nuevo password | POST | `/api/nuevopassword/:token` | Público |
| Ver mi perfil | GET | `/api/perfil` | JWT |
| Actualizar mi perfil | PUT | `/api/usuario/:id` | JWT |
| Cambiar mi password | PUT | `/api/usuario/actualizarpassword/:id` | JWT |

### Ejemplos (Postman)
```
POST /api/registro        { "nombre":"Ana","apellido":"Pérez","email":"ana@epn.edu.ec","password":"123456" }
POST /api/login           { "email":"ana@epn.edu.ec","password":"123456" }
GET  /api/perfil          Header: Authorization: Bearer <token>
```

---

## Registro de avance del Scrum Master

**RealTech-ESFOT**
### Distribución de actividades prácticas

| Integrante | Backend | Frontend |
|:---|:---:|:---:|
| Emely Bone | ✅ Cumple |  No cumple |
| Marjorie Valdivieso | ✅ Cumple | ✅ Cumple |
| Maria Jose Paredes |  No cumple | ✅ Cumple |



