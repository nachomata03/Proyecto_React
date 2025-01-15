import './App.css'
import NavBar from './components/NavBar'
import ItemsListConteiner from './components/ItemsListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner'

import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App(){
    return (
    <>
      {/* <section className='bienvenida'><ItemsListConteiner>¡Bienvenido a Santas Golosinas!</ItemsListConteiner></section>
      <section><ItemDetailConteiner/></section> */}
      <BrowserRouter>
        <header><NavBar/></header>
        <Routes>
            <Route path='/' element={<section className='bienvenida'>
                                        <ItemsListConteiner>¡Bienvenido a Santas Golosinas!</ItemsListConteiner>
                                        </section>}>
            </Route>
            <Route path='/item/:id' element={<section>
                                              <ItemDetailConteiner/>
                                            </section>}>
            </Route>
            <Route path='/category/:categoryIDs' element={<section className='bienvenida'>
                                        <ItemsListConteiner>¡Bienvenido a Santas Golosinas!</ItemsListConteiner>
                                        </section>}>
            </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
