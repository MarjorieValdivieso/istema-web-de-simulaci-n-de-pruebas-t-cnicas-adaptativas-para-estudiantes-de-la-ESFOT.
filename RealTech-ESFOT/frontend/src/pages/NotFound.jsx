import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-slate-50 px-4">
            {/* Icono de error 404 */}
            <div className="mb-6 text-blue-900 bg-blue-100 p-6 rounded-full">
                <FaExclamationTriangle className="text-6xl" />
            </div>

            <div className="flex flex-col items-center justify-center max-w-md text-center bg-white p-8 rounded-2xl shadow-md border border-gray-100 w-full">
                <span className="text-5xl font-black text-blue-900">404</span>
                <p className="text-2xl md:text-3xl font-extrabold text-blue-950 mt-2">Página no encontrada</p>
                <p className="text-gray-600 mt-4 text-base">
                    Lo sentimos, la ruta a la que intentas acceder no existe en el sistema de pruebas adaptativas de la ESFOT.
                </p>
                <Link 
                    to="/" 
                    className="p-3 mt-8 w-full text-center bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition duration-300 shadow-sm"
                >
                    Regresar al inicio
                </Link>
            </div>
        </div>
    );
};

export default NotFound;