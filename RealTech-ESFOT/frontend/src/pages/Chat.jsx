import { useState } from "react"

const Chat = () => {
    const [chatIniciado, setChatIniciado] = useState(false)
    const [nombreEstudiante, setNombreEstudiante] = useState("")

    const handleIniciarChat = (e) => {
        e.preventDefault()
        if (nombreEstudiante.trim() !== "") {
            setChatIniciado(true)
        }
    }

    return (
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-md my-6 h-[80vh] flex flex-col justify-between">
            <div>
                <h1 className='font-black text-3xl text-blue-950'>Soporte y Consultas - ESFOT</h1>
                <hr className='my-4 border-t-2 border-gray-200' />
                <p className='mb-6 text-gray-600'>
                    {chatIniciado 
                        ? `Estudiante: ${nombreEstudiante} - Canal de asistencia técnica activa.` 
                        : "Este módulo te permite resolver dudas acerca de las simulaciones y pruebas adaptativas."}
                </p>
            </div>

            {!chatIniciado ? (
                /* Formulario para ingresar al chat / soporte */
                <div className="flex flex-col items-center justify-center flex-1">
                    <form onSubmit={handleIniciarChat} className="w-full max-w-md flex flex-col gap-4">
                        <input
                            type="text"
                            value={nombreEstudiante}
                            onChange={(e) => setNombreEstudiante(e.target.value)}
                            placeholder="Ingresa tu nombre y apellido"
                            required
                            className="w-full rounded-md border border-gray-300 focus:border-blue-900 focus:outline-none focus:ring-1 focus:ring-blue-900 py-2 px-3 text-gray-700"
                        />
                        <button 
                            type="submit"
                            className="py-3 w-full block text-center bg-blue-900 text-white font-semibold rounded-xl hover:bg-blue-800 transition duration-300"
                        >
                            Iniciar Consulta
                        </button>
                    </form>
                </div>
            ) : (
                /* Interfaz del chat / soporte activo */
                <div className="flex flex-col flex-1 justify-between">
                    <div className="flex flex-col space-y-4 p-3 overflow-y-auto flex-1 bg-slate-50 rounded-lg border border-gray-200">
                        <div className="self-start bg-blue-100 text-blue-900 p-3 rounded-lg max-w-md text-sm">
                            <p className="font-bold">Soporte ESFOT</p>
                            <p>Hola {nombreEstudiante}, ¿en qué podemos ayudarte con tu prueba técnica adaptativa el día de hoy?</p>
                        </div>
                    </div>

                    <div className="border-t-2 border-gray-200 pt-4 mt-4">
                        <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
                            <input 
                                type="text" 
                                placeholder="Escribe tu mensaje o duda técnica..." 
                                className="flex-1 focus:outline-none focus:border-blue-900 text-gray-700 placeholder-gray-400 px-3 bg-gray-100 rounded-lg py-3 border border-gray-300"
                            />
                            <button 
                                type="submit"
                                className="inline-flex items-center justify-center rounded-lg px-6 py-3 transition duration-300 text-white bg-blue-900 hover:bg-blue-800 focus:outline-none font-bold"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chat