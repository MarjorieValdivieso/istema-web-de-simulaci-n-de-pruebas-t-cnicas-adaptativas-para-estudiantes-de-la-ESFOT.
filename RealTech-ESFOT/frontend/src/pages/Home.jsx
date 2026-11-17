import { Link } from 'react-router'
import { FaLaptopCode, FaBrain, FaChartLine, FaShieldAlt } from 'react-icons/fa'

export const Home = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
            
            {/* Barra de navegación superior */}
            <header className="bg-blue-950 text-white py-4 px-6 md:px-12 flex justify-between items-center shadow-md">
                <div className="flex items-center space-x-3">
                    <span className="font-extrabold text-xl tracking-wide bg-blue-900 px-3 py-1.5 rounded-xl border border-blue-800">
                        ESFOT TEST
                    </span>
                    <span className="text-sm text-blue-200 hidden sm:inline">Simulación Adaptativa - EPN</span>
                </div>
                <div className="space-x-4">
                    <Link 
                        to="/login" 
                        className="text-sm font-semibold text-blue-200 hover:text-white transition"
                    >
                        Iniciar Sesión
                    </Link>
                    <Link 
                        to="/register" 
                        className="bg-white text-blue-950 font-bold px-4 py-2 rounded-xl text-sm hover:bg-blue-50 transition shadow-sm"
                    >
                        Registrarse
                    </Link>
                </div>
            </header>

            {/* Sección Principal / Hero */}
            <main className="flex-1 flex items-center px-6 md:px-12 py-12">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Contenido de texto */}
                    <div className="space-y-6 text-left">
                        <div className="inline-block bg-blue-100 text-blue-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                            Plataforma Académica Oficial
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-blue-950 leading-tight">
                            Sistema de Simulación de Pruebas Técnicas Adaptativas
                        </h1>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                            Potencia tus habilidades técnicas, evalúa tus conocimientos en programación, bases de datos y arquitectura de software mediante algoritmos adaptativos diseñados para estudiantes de la ESFOT.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Link 
                                to="/login" 
                                className="bg-blue-900 text-white font-bold text-center px-8 py-3.5 rounded-xl hover:bg-blue-800 transition duration-300 shadow-md"
                            >
                                Acceder al Sistema
                            </Link>
                            <Link 
                                to="/register" 
                                className="bg-white text-blue-900 font-bold text-center px-8 py-3.5 rounded-xl border border-blue-200 hover:bg-blue-50 transition duration-300 shadow-sm"
                            >
                                Crear Cuenta Estudiantil
                            </Link>
                        </div>
                    </div>

                    {/* Tarjetas de características técnicas / Ilustración lateral */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
                            <div className="text-blue-900 mb-4 bg-blue-50 w-fit p-3 rounded-xl">
                                <FaBrain size={28} />
                            </div>
                            <h3 className="font-bold text-blue-950 text-lg mb-1">Algoritmo Adaptativo</h3>
                            <p className="text-sm text-gray-500">Preguntas que se ajustan dinámicamente a tu nivel de rendimiento técnico.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
                            <div className="text-blue-900 mb-4 bg-blue-50 w-fit p-3 rounded-xl">
                                <FaLaptopCode size={28} />
                            </div>
                            <h3 className="font-bold text-blue-950 text-lg mb-1">Áreas Tecnológicas</h3>
                            <p className="text-sm text-gray-500">Evaluaciones orientadas a desarrollo web, backend, Java y bases de datos.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
                            <div className="text-blue-900 mb-4 bg-blue-50 w-fit p-3 rounded-xl">
                                <FaChartLine size={28} />
                            </div>
                            <h3 className="font-bold text-blue-950 text-lg mb-1">Métricas en Vivo</h3>
                            <p className="text-sm text-gray-500">Monitoreo detallado de tu progreso, aciertos y reportes de desempeño.</p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition">
                            <div className="text-blue-900 mb-4 bg-blue-50 w-fit p-3 rounded-xl">
                                <FaShieldAlt size={28} />
                            </div>
                            <h3 className="font-bold text-blue-950 text-lg mb-1">Seguridad EPN</h3>
                            <p className="text-sm text-gray-500">Acceso institucional seguro mediante credenciales y correo verificado.</p>
                        </div>
                    </div>

                </div>
            </main>

            {/* Pie de página institucional */}
            <footer className="bg-white border-t border-gray-200 py-6 px-6 text-center text-gray-500 text-sm">
                <p>© 2026 Escuela de Formación de Tecnólogos (ESFOT) - Escuela Politécnica Nacional.</p>
                <p className="text-xs text-gray-400 mt-1">Sistema de Simulación de Pruebas Técnicas Adaptativas</p>
            </footer>

        </div>
    )
}

export default Home