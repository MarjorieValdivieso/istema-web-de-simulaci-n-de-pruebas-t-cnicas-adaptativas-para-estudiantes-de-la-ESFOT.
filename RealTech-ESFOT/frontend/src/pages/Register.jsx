import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { Link } from "react-router"

export const Register = () => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="flex flex-col sm:flex-row min-h-screen">

            {/* Formulario de Registro */}
            <div className="w-full sm:w-1/2 min-h-screen bg-white flex justify-center items-center px-6 py-10">
                <div className="w-full max-w-md">

                    <h1 className="text-3xl font-extrabold mb-1 text-center text-blue-950">Registro de Estudiante</h1>
                    <p className="text-gray-500 text-center mb-6 text-sm">Crea tu cuenta institucional en la ESFOT</p> 
                    
                    {/* Formulario */}
                    <form className="space-y-3">

                        {/* Campo nombre */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Nombre</label>
                            <input 
                                type="text" 
                                placeholder="Ingresa tu nombre" 
                                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" 
                                required
                            />
                        </div>

                        {/* Campo apellido */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Apellido</label>
                            <input 
                                type="text" 
                                placeholder="Ingresa tu apellido" 
                                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" 
                                required
                            />
                        </div>

                        {/* Campo dirección */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Dirección</label>
                            <input 
                                type="text" 
                                placeholder="Ingresa tu dirección de domicilio" 
                                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" 
                            />
                        </div>
                        
                        {/* Campo celular */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Celular</label>
                            <input 
                                type="text" 
                                inputMode="tel" 
                                placeholder="Ingresa tu número celular" 
                                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" 
                            />
                        </div>

                        {/* Campo correo electrónico */}
                        <div>
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Correo electrónico institucional</label>
                            <input 
                                type="email" 
                                placeholder="ejemplo@epn.edu.ec" 
                                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900" 
                                required
                            />
                        </div>

                        {/* Campo Contraseña */}
                        <div>
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Contraseña</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="************"
                                    className="w-full rounded-md border border-gray-300 py-2 px-3 pr-10 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                    aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                                >
                                    {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
                                </button>
                            </div>
                        </div>

                        {/* Botón Register */}
                        <div className="pt-2">
                            <button 
                                type="submit"
                                className="bg-blue-900 text-white font-semibold border py-2.5 w-full rounded-xl hover:bg-blue-800 transition duration-300 shadow-sm"
                            >
                                Registrarse
                            </button>
                        </div>

                    </form>

                    {/* Enlace para iniciar sesión si ya tiene una cuenta */}
                    <div className="mt-6 text-sm flex justify-between items-center border-t border-gray-200 pt-4">
                        <span className="text-gray-600">¿Ya posees una cuenta?</span>
                        <Link 
                            to="/login" 
                            className="py-2 px-4 bg-slate-100 text-blue-900 font-semibold border border-blue-200 rounded-xl hover:bg-blue-900 hover:text-white transition duration-300"
                        >
                            Iniciar sesión
                        </Link>
                    </div>

                </div>
            </div>

            {/* Imagen lateral institucional / académica */}
            <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-gradient-to-br from-blue-900 to-blue-950 flex flex-col justify-center items-center text-white p-12 sm:block hidden bg-[url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop')] bg-no-repeat bg-cover bg-center relative">
                <div className="absolute inset-0 bg-blue-950 opacity-75"></div>
                <div className="relative z-10 flex flex-col justify-center h-full max-w-md">
                    <h2 className="text-3xl font-bold mb-4">Únete a ESFOT TEST</h2>
                    <p className="text-blue-100 text-sm leading-relaxed">
                        Regístrate para acceder a simulaciones de pruebas técnicas adaptativas diseñadas para potenciar tu rendimiento académico y profesional en la Escuela de Formación de Tecnólogos.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Register