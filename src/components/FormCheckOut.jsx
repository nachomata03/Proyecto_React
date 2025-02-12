import Button from "./Button"
import "../App.css"
import { useState, useContext } from 'react';
import cartContext from '../context/cartContext'
export default function FormCheckOut() {

  const {handleCheckOut} = useContext(cartContext);

  const [userData, setUserData] = useState({
    nombre: "", 
    apellido: "", 
    email: ""})
    
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
    <form onSubmit={handleSubmit} className="flex flex-col w-1/3">
      <div className="DivForm">
        <label htmlFor="name">Nombre:</label>
        <input 
          value = {userData.nombre} 
          onChange={onInputChange} 
          type="text" 
          placeholder="Ingrese su nombre" 
          name="nombre"/>
    </div>
    <div className="DivForm">
        <label htmlFor="apellido">Apellido:</label>
        <input 
          value = {userData.apellido} 
          onChange={onInputChange} 
          type="text" 
          placeholder="Ingrese su apellido" 
          name="apellido"/>
    </div>
    <div className="DivForm">
        <label htmlFor="email">Email:</label>
        <input 
          value = {userData.email} 
          onChange={onInputChange}
          type="text" 
          placeholder="Ingrese su email" 
          name="email"/>
    </div>
      <Button 
        disabled={!(userData.nombre !=="" && userData.apellido !=="" && userData.email !=="")}>
          Finalizar compra
      </Button>
    </form>
  )
}
