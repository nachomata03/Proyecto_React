import Button from "./Button"

function Cardproduct(props) {
    const {titulo, texto, children, img} = props 
  return (
    <div className="card">
        <img src={img} alt="alfajor_jorgito" className="m-auto w-52 h-52"/>
        <h2 className="text-center text-2xl m-3">{titulo}</h2>
        <p className="text-center text-ms m-2">{texto}</p>
        <Button>{children}</Button>
    </div>
  )
}

export default Cardproduct