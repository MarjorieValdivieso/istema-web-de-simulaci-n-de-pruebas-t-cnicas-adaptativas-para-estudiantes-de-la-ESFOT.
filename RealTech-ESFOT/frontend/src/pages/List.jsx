import Table from "../components/list/Table"

const List = () => {
    return (
        <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-md my-6">
            <h1 className='font-black text-3xl text-blue-950'>Gestión de Reactivos y Evaluaciones</h1>
            <hr className='my-4 border-t-2 border-gray-200' />
            <p className='mb-8 text-gray-600'>Este módulo te permite consultar, administrar y gestionar las preguntas y simulaciones registradas en el sistema.</p>
            <Table />
        </div>
    )
}

export default List
