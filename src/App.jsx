
import './App.css'
import NavBar from './Compunents/Navbar'
import SighUp from './Compunents/SignUp'
import { BrowserRouter, Route,  Routes } from 'react-router-dom'
import Hero from './Compunents/Hero'
import SignIn from './Compunents/SignIn'

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path='/' element={<Hero />} />
      <Route path='/Signup' element={<SighUp />} />
      <Route path='/SignIn' element={<SignIn />} />
    </Routes>
    </BrowserRouter>


      
    </>
  )
}

export default App
