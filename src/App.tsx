
import './App.css'
import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom'


//PAGE
import { Cadastro, Home, Login, ListUsuarios, CadastroP, ListP } from "@/page"
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} >Login</Route>
          <Route path='/home' element={<Home />} >Home</Route>
          <Route path='/cadastro' element={<Cadastro />} >Cadastro</Route>
          <Route path='/listaUsuarios' element={<ListUsuarios />} >Cadastro</Route>
          <Route path='/cadastroP' element={<CadastroP />} >Cadastro</Route>
          <Route path='/listaProdutos' element={<ListP />} >Cadastro</Route>

        </Routes>

      </Router>

    </>
  )
}
export default App

