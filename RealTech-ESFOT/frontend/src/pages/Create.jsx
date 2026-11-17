import { Form } from '../components/create/Form'

const Create = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 bg-white rounded-xl shadow-md my-6">
            <h1 className='font-black text-3xl text-blue-950'>Registrar Nuevo Reactivo / Pregunta</h1>
            <hr className='my-4 border-t-2 border-gray-200' />
            <p className='mb-8 text-gray-600'>
                Este módulo te permite agregar nuevas preguntas técnicas, categorías y niveles de dificultad para las pruebas adaptativas de la ESFOT.
            </p>
            <Form />
        </div>
    )
}

export default Create
