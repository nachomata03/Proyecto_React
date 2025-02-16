import Button from "./Button"
import "../App.css"
import { useState, useContext } from 'react';
import cartContext from '../context/cartContext'
import DivForm from "./DivForm";
export default function FormCheckOut() {

  const {handleCheckOut} = useContext(cartContext);

  const [userData, setUserData] = useState({
    nombre: "", 
    apellido: "", 
    email: "",
    telefono:"",
    direccion: "",
    ciudad: "",
    provincia: ""
  });

  const array = Object.keys(userData);
  
    
  function handleSubmit(evt){
    evt.preventDefault()
    handleCheckOut(userData)
  }

  function onInputChange(evt){
    const inputName = evt.target.name
    const newUserData = {...userData}
    newUserData[inputName] = evt.target.value
    setUserData(newUserData)
    return userData
  }

  return (
    <form onSubmit={handleSubmit} >
      <div className="DivConteiner">
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
          
          <span className="flex justify-center">
            <Button
              disabled={!(userData.nombre !=="" && userData.apellido !=="" && userData.email !=="" && userData.telefono !=="" && userData.direccion !=="" && userData.ciudad !=="" && userData.provincia !=="")}>
                Finalizar compra
            </Button>
          </span>
      </div>
    </form>
  )
}
