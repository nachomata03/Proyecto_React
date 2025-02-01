import Button from "./Button"
import ItemCounter from "./ItemCounter"
import { Link } from "react-router-dom"

export default function Item(props) {
    const {titulo, texto, children, img, id, descuento} = props 
  return (
    <div className="card">
        <img src={img} alt="alfajor_jorgito" className={descuento ? "m-auto w-52 h-48" : "m-auto w-52 h-52"} />
        <h2 className="text-center text-3xl m-3">{titulo}</h2>
        <p className="text-center text-base m-2">{texto}</p>
        {descuento && <span className="text-sm text-green-600 block">Descuento: {descuento}%</span>}
        <Link to={"item/" + id} className="m-2 bg-gray-300 rounded-lg p-0.5 duration-200  hover:scale-105">
          <Button>Ver detalle</Button>
        </Link>
    </div>
  )
}