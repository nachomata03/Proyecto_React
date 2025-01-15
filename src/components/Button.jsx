export default function Button(props) {
  const {onClick, children, color} = props
  return (
    <button onClick={onClick} style={{backgroundColor: color}}>{children}</button>
  )
}