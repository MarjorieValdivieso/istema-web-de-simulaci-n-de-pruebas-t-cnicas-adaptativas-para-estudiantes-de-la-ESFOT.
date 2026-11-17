import { Router } from "express"
import {
    registro, confirmarMail, login, recuperarPassword, comprobarTokenPassword,
    crearNuevoPassword, perfil, actualizarPerfil, actualizarPassword
} from "../controllers/usuario_controller.js"
import { verificarAutenticacion } from "../middlewares/verificarAutenticacion.js"

const router = Router()

// Rutas públicas
router.post("/registro", registro)
router.get("/confirmar/:token", confirmarMail)
router.post("/login", login)
router.post("/recuperarpassword", recuperarPassword)
router.get("/recuperarpassword/:token", comprobarTokenPassword)
router.post("/nuevopassword/:token", crearNuevoPassword)

// Rutas privadas (requieren JWT)
router.get("/perfil", verificarAutenticacion, perfil)
router.put("/usuario/actualizarpassword/:id", verificarAutenticacion, actualizarPassword)
router.put("/usuario/:id", verificarAutenticacion, actualizarPerfil)

export default router
