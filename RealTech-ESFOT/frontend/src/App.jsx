import { BrowserRouter, Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import Login from './pages/Login'
import { Register } from './pages/Register'
import { Forgot } from './pages/Forgot'
import { Confirm } from './pages/Confirm'
import { NotFound } from './pages/NotFound'
import Dashboard from './layout/Dashboard'
import Profile from './pages/Profile'
import Panel from './pages/Panel'
// Importa tus componentes adaptados para exámenes/preguntas en lugar de los genéricos o de veterinaria:
import QuestionList from './pages/List' // (Antes List)
import TestDetails from './pages/Details'     // (Antes Details)
import CreateTest from './pages/Create'       // (Antes Create)
import UpdateTest from './pages/Update'       // (Antes Update)
import Reset from './pages/Reset'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Rutas Públicas */}
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='forgot/:id' element={<Forgot/>}/>
          <Route path='confirm/:token' element={<Confirm/>}/>
          <Route path='reset/:token' element={<Reset/>}/>
          <Route path='*' element={<NotFound />} />

          {/* Rutas Privadas / Dashboard del Estudiante o Administrador */}
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Panel/>}/>
            <Route path='profile' element={<Profile/>}/>
            <Route path='questions' element={<QuestionList/>}/> {/* Gestión de preguntas/exámenes */}
            <Route path='details/:id' element={<TestDetails/>}/>
            <Route path='create' element={<CreateTest/>}/>
            <Route path='update/:id' element={<UpdateTest/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App