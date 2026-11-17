import { useState } from "react"
import { MdVisibility, MdVisibilityOff } from "react-icons/md"
import { Link } from "react-router"

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex flex-col sm:flex-row h-screen">

            {/* Imagen lateral institucional / tecnológica */}
            <div className="hidden sm:block sm:w-1/2 bg-gradient-to-br from-blue-900 to-blue-950 relative bg-[url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center">
                <div className="absolute inset-0 bg-blue-950 opacity-75"></div>
                <div className="relative z-10 flex flex-col justify-center items-center h-full text-white p-12 text-center">
                    <h2 className="text-4xl font-extrabold mb-4">ESFOT TEST</h2>
                    <p className="text-blue-200 max-w-md text-sm leading-relaxed">
                        Plataforma de evaluación y simulación de pruebas técnicas adaptativas para el desarrollo profesional estudiantil.
                    </p>
                </div>
            </div>

            {/* Formulario de Login */}
            <div className="w-full sm:w-1/2 flex justify-center items-center bg-white px-6">
                <div className="w-full max-w-md">

                    <h1 className="text-3xl font-extrabold text-center text-blue-950">Bienvenido(a)</h1>
                
                    <p className="text-gray-500 text-center my-3 text-sm">Por favor ingresa tus credenciales institucionales</p>

                    {/* Formulario */}
                    <form className="mt-6">

                        {/* Campo Correo */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Correo institucional</label>
                            <input
                                type="email"
                                placeholder="ejemplo@epn.edu.ec"
                                className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 px-3 py-2 text-gray-700 text-sm"
                                required
                            />
                        </div>

                        {/* Campo Contraseña */}
                        <div className="mb-4">
                            <label className="block text-sm font-semibold mb-1 text-gray-700">Contraseña</label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="************"
                                    className="w-full rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-900 px-3 py-2 pr-10 text-gray-700 text-sm"
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

                        {/* Botón login */}
                        <Link to="/dashboard" className="block w-full py-2.5 text-center bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition duration-300 shadow-sm mt-6">
                            Iniciar sesión
                        </Link>

                    </form>

                    {/* Separador */}
                    <div className="mt-6 flex items-center text-gray-400">
                        <hr className="flex-1 border-gray-200" />
                        <span className="px-3 text-xs uppercase tracking-wider text-gray-400">O</span>
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    {/* Botón Google */}
                    <button className="w-full mt-4 flex items-center justify-center border border-gray-300 py-2.5 rounded-xl text-sm font-medium text-gray-700 hover:bg-slate-50 transition">
                        <img className="w-5 mr-2" src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" />
                        Acceder con Google Institucional
                    </button>

                    {/* Enlace para olvidaste tu contraseña */}
                    <div className="mt-5 text-xs border-b border-gray-200 pb-4 text-left">
                        <Link to="/forgot/id" className="text-blue-800 hover:underline font-medium">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </div>

                    {/* Enlaces para volver o registrarse */}
                    <div className="mt-4 flex justify-between items-center text-sm">
                        <Link to="/" className="text-gray-600 hover:text-blue-900 underline">Regresar al inicio</Link>
                        <Link to="/register" className="py-2 px-4 bg-slate-100 text-blue-900 font-semibold border border-blue-200 rounded-xl hover:bg-blue-900 hover:text-white transition duration-300">Registrarse</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;