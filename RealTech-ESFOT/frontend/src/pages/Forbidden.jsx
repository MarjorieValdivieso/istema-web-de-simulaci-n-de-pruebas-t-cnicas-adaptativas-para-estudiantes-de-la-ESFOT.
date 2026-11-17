import { Link } from 'react-router'
import { FaLock } from 'react-icons/fa'

export const Forbidden = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50 px-4">
            
            {/* Icono de acceso restringido */}
            <div className="mb-6 text-red-700 bg-red-100 p-6 rounded-full">
                <FaLock className="text-6xl" />
            </div>

            <div className="flex flex-col items-center justify-center max-w-md text-center bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full">
                <p className="text-3xl md:text-4xl font-extrabold text-blue-950 mt-4">Acceso Denegado</p>

                <p className="text-gray-600 mt-4 text-base">
                    Lo sentimos, no cuentas con los permisos necesarios para acceder a este módulo de simulaciones adaptativas de la ESFOT.
                </p>

                <Link 
                    to="/dashboard" 
                    className="p-3 mt-8 w-full text-center bg-blue-900 text-white font-semibold border rounded-xl hover:bg-blue-800 transition duration-300 shadow-sm"
                >
                    Regresar al Panel
                </Link>
            </div>
        </div>
    )
}

export default Forbidden
