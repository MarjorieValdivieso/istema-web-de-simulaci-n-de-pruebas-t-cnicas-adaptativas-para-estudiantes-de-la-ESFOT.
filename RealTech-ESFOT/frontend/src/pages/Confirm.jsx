import { Link } from 'react-router'
import { FaCheckCircle } from 'react-icons/fa'

export const Confirm = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50 px-4">
            
            {/* Icono o Imagen de éxito */}
            <div className="mb-6 text-blue-900">
                <FaCheckCircle className="text-8xl" />
            </div>

            <div className="flex flex-col items-center justify-center max-w-md text-center bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full">
                <p className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-4">¡Cuenta Confirmada!</p>
                
                <p className="text-gray-600 mt-4 text-base">
                    Tu correo ha sido verificado con éxito. Ya puedes acceder al sistema de simulaciones adaptativas de la ESFOT.
                </p>

                <Link 
                    to="/login" 
                    className="p-3 mt-8 w-full text-center bg-blue-900 text-white font-semibold border rounded-xl hover:bg-blue-800 transition duration-300 shadow-sm"
                >
                    Iniciar Sesión
                </Link>
            </div>

        </div>
    )
}
