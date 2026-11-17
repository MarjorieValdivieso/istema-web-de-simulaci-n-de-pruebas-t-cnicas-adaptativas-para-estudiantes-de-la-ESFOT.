import { useState } from 'react'
import { FaLock } from 'react-icons/fa'

const Reset = () => {
    // Puedes cambiar temporalmente a true para visualizar el formulario de cambio de contraseña
    const [tokenback, setTokenBack] = useState(true);

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50 px-4">
            
            {/* Icono institucional de seguridad */}
            <div className="mb-6 text-blue-900 bg-blue-100 p-6 rounded-full shadow-sm">
                <FaLock className="text-5xl" />
            </div>

            <div className="flex flex-col items-center justify-center max-w-md w-full bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center">
                <h1 className="text-2xl md:text-3xl font-extrabold text-blue-950 mb-1">
                    Restablecer Contraseña
                </h1>
                <p className="text-gray-500 text-sm mb-6">
                    Por favor, ingresa tu nueva contraseña para la plataforma ESFOT
                </p>

                {tokenback ? (
                    <form className="w-full space-y-4 text-left">
                        <div>
                            {/* Campo nueva contraseña */}
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Nueva contraseña</label>
                            <input 
                                type="password" 
                                placeholder="Ingresa tu nueva contraseña"
                                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                                required
                            />
                        </div>

                        <div>
                            {/* Campo repetir contraseña */}
                            <label className="mb-1 block text-sm font-semibold text-gray-700">Confirmar contraseña</label>
                            <input 
                                type="password" 
                                placeholder="Repite tu contraseña"
                                className="w-full rounded-md border border-gray-300 py-2 px-3 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900"
                                required
                            />
                        </div>

                        <div className="pt-2">
                            <button 
                                type="submit"
                                className="bg-blue-900 text-white font-semibold border py-2.5 w-full rounded-xl hover:bg-blue-800 transition duration-300 shadow-sm"
                            >
                                Actualizar Contraseña
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 w-full" role="alert">
                        <span className="font-medium">Token inválido o expirado.</span> Solicita un nuevo enlace de recuperación.
                    </div>
                )}
            </div>
        </div>
    )
}

export default Reset
