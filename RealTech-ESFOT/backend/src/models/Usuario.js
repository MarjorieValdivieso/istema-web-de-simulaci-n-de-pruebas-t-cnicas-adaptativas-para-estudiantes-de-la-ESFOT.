import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import { randomBytes } from "node:crypto"

const { Schema, model } = mongoose

const usuarioSchema = new Schema({
    nombre: { type: String, required: true, trim: true },
    apellido: { type: String, required: true, trim: true },
    celular: { type: String, trim: true, default: null },
    carrera: { type: String, trim: true, default: null },
    semestre: { type: Number, min: 1, max: 6, default: null },
    email: { type: String, required: true, trim: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    // Nivel de complejidad actual (se ajustará con el motor adaptativo en sprints posteriores)
    nivelComplejidad: {
        type: String,
        enum: ["basico", "intermedio", "avanzado"],
        default: "basico"
    },
    rol: {
        type: String,
        enum: ["estudiante", "docente", "admin"],
        default: "estudiante"
    },
    status: { type: Boolean, default: true },
    token: { type: String, default: null },
    confirmEmail: { type: Boolean, default: false }
}, { timestamps: true })

// Cifrar el password
usuarioSchema.methods.encryptPassword = async function (passwordUser) {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(passwordUser, salt)
}

// Comparar el password ingresado con el de la BDD
usuarioSchema.methods.matchPassword = async function (passwordUser) {
    return await bcrypt.compare(passwordUser, this.password)
}

// Crear token (OTP) para correos, no es JWT
usuarioSchema.methods.createToken = function () {
    const tokenGenerado = randomBytes(16).toString("hex")
    this.token = tokenGenerado
    return tokenGenerado
}

export default model("Usuario", usuarioSchema)
