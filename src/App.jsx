import './App.css'
import Cardproduct from './components/Cardproduct'
import NavBar from './components/NavBar'
import Itemslistconteiner from './components/Itemslistconteiner'
import Fantoche from "../public/img/fantoche_tripe_negro.png"
import Jorgito from "../public/img/jorgito.png"
import Picodulce from "../public/img/picoDulce.png"

function App(){
  return (
    <>
      <header><NavBar/></header>
      <section className='bienvenida'><Itemslistconteiner>¡Bienvenido a Santas Golosinas!</Itemslistconteiner></section>
      <section className='sectionMain'>
        <Cardproduct titulo="Fantoche" texto="Alfajor triple de dulce de leche y chocolate / blanco por 24 unidades." img={Fantoche}>Comprar</Cardproduct>
        <Cardproduct titulo="Jorgito" texto="Alfajor Jorgito negro" img={Jorgito}>Comprar</Cardproduct>
        <Cardproduct titulo="Pico Dulce" texto="Chupetines pico dulce pack 48 unidades SIN T.A.C.C." img={Picodulce}>Comprar</Cardproduct>
      </section>
    </>
  )
}

export default App
