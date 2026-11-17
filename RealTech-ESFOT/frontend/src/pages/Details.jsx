/* eslint-disable no-unused-vars */
import { useState } from "react"
// Puedes renombrar o adaptar estos componentes posteriormente según tus tablas de exámenes/reactivos
import TableTreatments from "../components/treatments/Table"
import ModalTreatments from "../components/treatments/Modal"

const Details = () => {
    const [simulaciones, setSimulaciones] = useState(["demo"])

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md my-6">
            <div>
                <h1 className='font-black text-3xl text-blue-950'>Detalles de la Evaluación</h1>
                <hr className='my-4 border-t-2 border-gray-200' />
                <p className='mb-8 text-gray-600'>Este módulo te permite visualizar la información detallada del estudiante y su rendimiento en las pruebas adaptativas.</p>
            </div>

            <div>
                <div className='m-5 flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className="w-full md:w-2/3">
                        <ul className="list-disc pl-5 space-y-4">
                            {/* Datos del Estudiante */}
                            <li>
                                <span className="text-blue-900 font-bold text-xl">Datos del Estudiante</span>
                                <ul className="pl-5 mt-2 space-y-2">
                                    <li className="text-md">
                                        <span className="text-gray-600 font-bold">Cédula: </span>
                                        <span className="text-gray-800">1750000000</span>
                                    </li>
                                    <li className="text-md">
                                        <span className="text-gray-600 font-bold">Nombres completos: </span>
                                        <span className="text-gray-800">María José Paredes</span>
                                    </li>
                                    <li className="text-md">
                                        <span className="text-gray-600 font-bold">Carrera / Programa: </span>
                                        <span className="text-gray-800">ESFOT - Desarrollo de Software</span>
                                    </li>
                                    <li className="text-md">
                                        <span className="text-gray-600 font-bold">Correo institucional: </span>
                                        <span className="text-gray-800">marja.paredes@epn.edu.ec</span>
                                    </li>
                                </ul>
                            </li>

                            {/* Datos de la Prueba Adaptativa */}
                            <li>
                                <span className="text-blue-900 font-bold text-xl">Detalles de la Simulación</span>
                                <ul className="pl-5 mt-2 space-y-2">
                                    <li className="text-md">
                                        <span className="text-gray-600 font-bold">Área técnica: </span>
                                        <span className="text-gray-800">Programación Web & Backend</span>
                                    </li>
                                    <li className="text-md">
                                        <span className="text-gray-600 font-bold">Nivel alcanzado: </span>
                                        <span className="text-gray-800">Intermedio - Avanzado</span>
                                    </li>
                                    <li className="text-md">
                                        <span className="text-gray-600 font-bold">Fecha de evaluación: </span>
                                        <span className="text-gray-800">2026-06-15</span>
                                    </li>
                                    <li className="text-md flex items-center gap-2">
                                        <span className="text-gray-600 font-bold">Estado: </span>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                            Completado
                                        </span>
                                    </li>
                                    <li className="text-md">
                                        <span className="text-gray-600 font-bold">Observación: </span>
                                        <span className="text-gray-800">Excelente dominio en estructuras lógicas y consultas SQL.</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Icono o Imagen lateral temática */}
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 flex items-center justify-center">
                        <img 
                            src="https://cdn-icons-png.flaticon.com/512/3281/3281289.png" 
                            alt="Evaluación técnica" 
                            className='h-48 w-48 object-contain' 
                        />
                    </div>
                </div>

                <hr className='my-6 border-t-2 border-gray-200' />

                {/* Sección de Historial / Reactivos */}
                <div className='flex justify-between items-center mb-6'>
                    <div>
                        <h3 className='font-bold text-xl text-blue-950'>Historial de Reactivos Respondidos</h3>
                        <p className='text-sm text-gray-600'>Este módulo te permite revisar el detalle de preguntas respondidas en la simulación</p>
                    </div>

                    <button className="px-5 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 font-semibold transition">
                        Exportar Reporte
                    </button>
                </div>
                
                {/* Mostrar los registros / historial */}
                {
                    simulaciones.length == 0
                        ?
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                            <span className="font-medium">No existen registros de evaluaciones previas.</span>
                        </div>
                        :
                        <TableTreatments treatments={simulaciones} />
                }
            </div>
        </div>
    )
}

export default Details
