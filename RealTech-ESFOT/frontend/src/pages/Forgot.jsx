import { Link } from 'react-router'

export const Forgot = () => {
    return (
        <div className="flex flex-col sm:flex-row h-screen">
            {/* Formulario de recuperación */}
            <div className="w-full sm:w-1/2 h-screen bg-white flex justify-center items-center px-6">
                <div className="md:w-4/5 sm:w-full max-w-md">
                    <h1 className="text-3xl font-extrabold mb-2 text-center text-blue-950">¿Olvidaste tu contraseña?</h1>
                    <p className="text-gray-500 text-center mb-8 text-sm">
                        No te preocupes, ingresa tu correo institucional para enviarte las instrucciones de recuperación.
                    </p>

                    {/* Formulario */}
                    <form>
                        {/* Campo correo electrónico */}
                        <div className="mb-4">
                            <label className="mb-2 block text-sm font-semibold text-gray-700">Correo institucional</label>
                            <input 
                                type="email" 
                                placeholder="ejemplo@epn.edu.ec" 
                                className="block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                                required
                            />
                        </div>

                        {/* Botón Enviar correo */}
                        <div className="mb-3">
                            <button 
                                type="submit"
                                className="bg-blue-900 text-white font-semibold border py-2.5 w-full rounded-xl mt-4 hover:bg-blue-800 transition duration-300 shadow-sm"
                            >
                                Enviar instrucciones
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 text-xs border-b border-gray-200 py-2" />

                    {/* Enlace para iniciar sesión si ya posee una cuenta */}
                    <div className="mt-4 text-sm flex justify-between items-center">
                        <span className="text-gray-600">¿Ya recordaste tu contraseña?</span>
                        <Link 
                            to="/login" 
                            className="py-2 px-4 bg-slate-100 text-blue-900 font-semibold border border-blue-200 rounded-xl hover:bg-blue-900 hover:text-white transition duration-300"
                        >
                            Iniciar sesión
                        </Link>
                    </div>
                </div>
            </div>

            {/* Imagen lateral académica / tecnológica */}
            <div className="w-full sm:w-1/2 h-1/3 sm:h-screen bg-gradient-to-br from-blue-900 to-blue-950 flex flex-col justify-center items-center text-white p-12 sm:block hidden bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop')] bg-no-repeat bg-cover bg-center relative">
                <div className="absolute inset-0 bg-blue-950 opacity-60"></div>
                <div className="relative z-10 flex flex-col justify-center h-full max-w-md">
                    <h2 className="text-3xl font-bold mb-4">Simulador ESFOT</h2>
                    <p className="text-blue-100 text-sm leading-relaxed">
                        Recupera el acceso a tus evaluaciones técnicas adaptativas y mantén tu progreso académico al día.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Forgot
