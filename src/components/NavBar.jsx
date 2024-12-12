import logo from "../../public/img/logo.png"
import Cartwidget from "./Cartwidget"

function NavBar() {
  return (
    <div className="flex flex-row items-center h-24 justify-between bg-violet-500">
      <img src={logo} alt="logo de la tienda" style={{width: `80px`, height: `80px`,}}/>

      <nav>
        <ul className="flex space-x-12 text-lg">
          <li><a href="">Home</a></li>
          <li><a href="">Products</a></li>
          <li><a href="">About Us</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>

      <Cartwidget/>
    </div>
  )
}

export default NavBar