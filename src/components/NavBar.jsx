import logo from "../../public/img/logo.png"
import CartWidget from "../components/CartWidget"
import { Link, NavLink } from "react-router-dom"

function NavBar() {
  return (
    <div className="flex flex-row items-center h-24 justify-between bg-violet-500">
      <NavLink to="/"><img src={logo} alt="logo de la tienda" style={{width: `80px`, height: `80px`,}}/></NavLink>

      <nav>
      <div>
          <ul className="flex items-center justify-between space-x-64 text-2xl mb-6 mt-3">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/Item">Detalle</NavLink></li>
          </ul>
        </div>

        <div>
          <ul className="flex space-x-44 text-lg pb-3 ">
            <li><NavLink to="/category/alfajores">Alfajores</NavLink></li>
            <li><NavLink to="/category/dulces">Dulces</NavLink></li>
            <li><NavLink to="/category/combos">Combos</NavLink></li>
          </ul>
        </div>
      </nav>

      <CartWidget/>
    </div>
  )
}

export default NavBar