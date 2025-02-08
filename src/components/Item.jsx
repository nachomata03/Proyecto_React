import Button from "./Button"
import { Link } from "react-router-dom"
export default function Item(props) {
    const {title, description, children, img, id, discount} = props 

  return (
    <div className="card">
        <img src={img} alt="alfajor_jorgito" className={discount ? "m-auto w-52 h-48" : "m-auto w-52 h-52"} />
        <h2 className="text-center text-3xl m-3">{title}</h2>
        <p className="text-center text-base m-2">{description}</p>
        {discount && <span className="text-sm text-green-600 block">Descuento: {discount}%</span>}
        <Link to={"/item/" + id} className="m-2 bg-gray-300 rounded-lg p-0.5 duration-200  hover:scale-105">
          <Button>Ver detalle</Button>
        </Link>
    </div>  
  )
}