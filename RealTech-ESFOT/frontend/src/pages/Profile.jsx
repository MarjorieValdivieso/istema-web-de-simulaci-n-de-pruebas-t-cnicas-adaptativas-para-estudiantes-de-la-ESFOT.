import CardPassword from '../components/profile/CardPassword'
import { CardProfile } from '../components/profile/CardProfile'
import FormProfile from '../components/profile/FormProfile'

const Profile = () => {
    const fecha = new Date().toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    
    return (
        <>
            {/* Cabecera del perfil */}
            <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ background: 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #1E40AF 100%)' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white" style={{ transform: 'translate(30%, -30%)' }} />
                    <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white" style={{ transform: 'translate(-20%, 20%)' }} />
                </div>
                <div className="relative p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-2xl font-black text-white">Información de la Cuenta</h1>
                        <p className="mt-0.5 text-sm text-blue-200">Este módulo te permite gestionar tu perfil de usuario en la ESFOT</p>
                    </div>
                    <p className="text-sm font-medium text-blue-200 bg-blue-950/40 px-3 py-1.5 rounded-lg border border-blue-800/50 capitalize">{fecha}</p>
                </div>
            </div>

            {/* Contenido principal de perfiles y contraseñas */}
            <div className='flex justify-around gap-x-8 flex-wrap gap-y-8 md:flex-nowrap my-6'>
                
                {/* Formulario de perfil */}
                <div className='w-full md:w-1/2'>
                    <FormProfile />
                </div>

                {/* Tarjetas de visualización y cambio de contraseña */}
                <div className='w-full md:w-1/2 space-y-6'>
                    <CardProfile />
                    <CardPassword />
                </div>
            </div>
        </>
    )
}

export default Profile