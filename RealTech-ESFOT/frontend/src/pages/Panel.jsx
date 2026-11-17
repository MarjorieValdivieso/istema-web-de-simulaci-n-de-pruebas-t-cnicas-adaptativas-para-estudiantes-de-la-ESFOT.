export default function Panel() {
  const inputCls = "w-full rounded-md border border-gray-300 px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-900";

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      
      <h1 className='font-black text-3xl text-blue-950'>Panel de Métricas Generales</h1>
      <hr className='my-4 border-t-2 border-gray-200' />

      {/* Resultados generales / Métricas de la ESFOT */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-900">
          <p className="text-sm font-semibold text-gray-500">Estudiantes Registrados</p>
          <p className="text-3xl font-extrabold text-blue-950 mt-2">120</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-800">
          <p className="text-sm font-semibold text-gray-500">Preguntas en Banco</p>
          <p className="text-3xl font-extrabold text-blue-950 mt-2">185</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-700">
          <p className="text-sm font-semibold text-gray-500">Simulaciones Hoy</p>
          <p className="text-3xl font-extrabold text-blue-950 mt-2">14</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">
          <p className="text-sm font-semibold text-gray-500">Nivel Promedio</p>
          <p className="text-3xl font-extrabold text-blue-950 mt-2">Intermedio</p>
        </div>

      </section>

      <h1 className='font-black text-3xl text-blue-950'>Gestión y Configuración de Pruebas</h1>
      <hr className='my-4 border-t-2 border-gray-200' />

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Formulario de Configuración de Prueba / Reactivo */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
          <h2 className="text-xl font-bold text-blue-950 mb-2">Asignar Simulación Adaptativa</h2>
          <p className="text-sm text-gray-500 mb-4">Configura parámetros iniciales para la prueba técnica del estudiante.</p>
          <hr className="mb-4 border-gray-200" />

          <form className="space-y-4">

            <div>
              <label htmlFor="estudiante" className="text-sm font-medium text-gray-700 block mb-1">Cédula o Nombre del Estudiante</label>
              <input id="estudiante" className={inputCls} placeholder="Ej. María José Paredes" />
            </div>

            <div>
              <label htmlFor="categoria" className="text-sm font-medium text-gray-700 block mb-1">Área Tecnológica</label>
              <input id="categoria" className={inputCls} placeholder="Ej. Desarrollo Web, Java Spring Boot, SQL" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nivel" className="text-sm font-medium text-gray-700 block mb-1">Nivel Inicial</label>
                <select id="nivel" className={inputCls}>
                  <option>Básico</option>
                  <option>Intermedio</option>
                  <option>Avanzado</option>
                </select>
              </div>
              <div>
                <label htmlFor="tiempo" className="text-sm font-medium text-gray-700 block mb-1">Tiempo Límite (min)</label>
                <input id="tiempo" type="number" defaultValue="30" className={inputCls} />
              </div>
            </div>

            <div>
              <label htmlFor="observacion" className="text-sm font-medium text-gray-700 block mb-1">Observaciones (opcional)</label>
              <input id="observacion" className={inputCls} placeholder="Prueba de suficiencia ciclo 2026-A" />
            </div>

            <button type="button" className="w-full bg-blue-900 text-white font-semibold rounded-xl py-3 hover:bg-blue-800 transition shadow-sm">
              Generar Simulación
            </button>

          </form>
        </div>

        {/* Listado de Últimas Evaluaciones */}
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
              <h2 className="text-xl font-bold text-blue-950">
                Simulaciones Recientes:{" "}
                <span className="font-normal text-sm text-gray-600 block sm:inline">
                  {new Date().toLocaleDateString("es-EC")}
                </span>
              </h2>

              <button type="button" className="bg-slate-100 text-blue-900 font-semibold border border-blue-200 rounded-xl py-2 px-4 hover:bg-blue-900 hover:text-white transition w-full sm:w-auto text-sm">
                Actualizar Lista
              </button>
            </div>

            <p className="text-sm text-gray-500 mb-4">Registro en tiempo real de pruebas técnicas concluidas por los estudiantes.</p>
            <hr className="mb-4 border-gray-200" />

            <ul className="divide-y divide-gray-100 overflow-y-auto max-h-[360px]">
              <li className="py-3 flex justify-between items-center">
                <div>
                  <p className="font-bold text-blue-950">Estudiante: María José Paredes</p>
                  <p className="text-sm text-gray-600">Área: Backend & Base de Datos</p>
                  <p className="text-sm text-gray-600">Puntaje obtenido: <span className="font-semibold text-green-700">88/100</span></p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-900 font-bold px-3 py-1.5 rounded-lg self-center">
                  Avanzado
                </span>
              </li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-gray-200 text-center">
            <span className="text-xs text-gray-400">Sistema Adaptativo ESFOT - EPN</span>
          </div>
        </div>
        
      </section>

    </div>
  )
}