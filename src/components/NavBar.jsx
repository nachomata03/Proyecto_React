import logo from "../../public/img/logo.png"
import Cartwidget from "./Cartwidget"

function NavBar() {
  return (
    <div className="flex flex-row items-center h-24 justify-between bg-violet-500 sombra-nav">
      <img src={logo} alt="logo de la tienda" style={{width: `80px`, height: `80px`,}}/>

      <nav>
        <ul className="flex space-x-12 text-lg">
          <li>Home</li>
          <li>Products</li>
          <li>About Us</li>
          <li>Contact</li>
        </ul>
      </nav>

      <Cartwidget/>
    </div>
  )
}

export default NavBar