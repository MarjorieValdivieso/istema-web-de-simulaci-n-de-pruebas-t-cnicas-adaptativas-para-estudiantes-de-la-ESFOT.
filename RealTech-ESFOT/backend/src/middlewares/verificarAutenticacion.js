import jwt from "jsonwebtoken"
import Usuario from "../models/Usuario.js"

const verificarAutenticacion = async (req, res, next) => {
    const { authorization } = req.headers
    if (!authorization) return res.status(401).json({ msg: "Acceso denegado: token no enviado" })

    try {
        const token = authorization.split(" ")[1]
        const { id, rol } = jwt.verify(token, process.env.JWT_SECRET)
        const usuario = await Usuario.findById(id).select("-password -token -createdAt -updatedAt -__v")
        if (!usuario) return res.status(404).json({ msg: "Usuario no encontrado" })
        req.usuarioHeader = usuario
        req.rol = rol
        next()
    } catch (error) {
        return res.status(401).json({ msg: "Token inválido o expirado" })
    }
}

// Restringe el acceso a ciertos roles
const permitirRoles = (...roles) => (req, res, next) => {
    if (!roles.includes(req.rol)) return res.status(403).json({ msg: "No tienes permisos para esta acción" })
    next()
}

export { verificarAutenticacion, permitirRoles }
