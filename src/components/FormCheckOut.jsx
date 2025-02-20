import Button from "./Button"
import "../App.css"
import { useState, useContext } from 'react';
import cartContext from '../context/cartContext'
import DivForm from "./DivForm";
export default function FormCheckOut() {

  const {handleCheckOut, orderId} = useContext(cartContext);

  const [userData, setUserData] = useState({
    nombre: "", 
    apellido: "", 
    email: "",
    telefono:"",
    provincia: "",
    ciudad: "",
    direccion: ""    
  });

  const array = Object.keys(userData);
  
    
  async function handleSubmit(evt){
    evt.preventDefault()
    await handleCheckOut(userData)
  }

  function onInputChange(evt){
    const inputName = evt.target.name
    const newUserData = {...userData}
    newUserData[inputName] = evt.target.value
    setUserData(newUserData)
    return userData
  }

  if(orderId) return (
    <div className="ConteinerOrderIDFlex">
      <div className="ConteinerOrderID">
        <h2>Gracias por tu compra!!</h2>
        <h3>El ID de tu compra es: <span className="font-bold font-mono text-rose-600">{orderId}</span></h3>
        <p>Guarde ese ID para consultar el estado de tu compra</p>
      </div>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} >
      <div className="DivConteinerForm">
        <h2>Ingresa tus datos</h2>
        {array.map(item => (
            <DivForm 
              key={item}
              type="text"
              onChange={onInputChange}
              userData={userData[item]} 
              field={item}
            >
              {item}
            </DivForm>
          ))}
          
          <span className="flex justify-center my-1">
            <Button 
              style = "bg-indigo-500 hover:bg-indigo-700 focus:outline-none focus:ring-2 text-white font-bold py-2 px-4 rounded"
              disabled={!(userData.nombre !=="" && userData.apellido !=="" && userData.email !=="" && userData.telefono !=="" && userData.direccion !=="" && userData.ciudad !=="" && userData.provincia !=="")}
              > 
                Finalizar compra
            </Button>
          </span>
      </div>
    </form>
  )
}
