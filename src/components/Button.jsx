export default function Button(props) {
  const {handleClick, children, color} = props
  return (
    <button onClick={handleClick} style={{backgroundColor: color}}>{children}</button>
  )
}