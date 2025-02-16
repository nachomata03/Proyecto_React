export default function DivForm({children, type, onChange, userData, field}) {
  return (
    <div className="DivForm">
        <label htmlFor={field}>{children}:</label>
        <input 
            value = {userData} 
            onChange={onChange} 
            type={type} 
            placeholder={`Ingrese su ${children}`} 
            name={field}
        />
        </div>
  )
}
