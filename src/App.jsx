import './App.css'
import NavBar from './components/NavBar'
import ItemsListConteiner from './components/ItemsListConteiner'
import ItemDetailConteiner from './components/ItemDetailConteiner'

import { BrowserRouter, Routes, Route} from 'react-router-dom'

import { CartContextProvider } from './context/cartContext'
import CartConteiner from './components/CartConteiner'

import FormCheckOut from './components/FormCheckOut'


function App(){
    return (
    <>
    <CartContextProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <header><NavBar/></header>
        <Routes>
            <Route path='/' element={<section className='bienvenida'>
                                        <ItemsListConteiner>¡Bienvenido a Santas Golosinas!</ItemsListConteiner>
                                        </section>}>
            </Route>
            <Route path='/item/:itemId' element={<section>
                                              <ItemDetailConteiner/>
                                            </section>}>
            </Route>
            <Route path='/category/:categoryIDs' element={<section className='bienvenida'>
                                        <ItemsListConteiner>¡Bienvenido a Santas Golosinas!</ItemsListConteiner>
                                        </section>}>
            </Route>
            <Route path='/cart' element={<CartConteiner/>}></Route>  
            <Route path='/form' element={<FormCheckOut/>}></Route>
          </Routes>
      </BrowserRouter>
    </CartContextProvider>
    </>
  )
}

export default App
