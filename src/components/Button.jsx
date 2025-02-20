export default function Button(props) {
  const {handleClick, children, style, disabled} = props
  return (
    <button disabled={disabled} onClick={handleClick} className={style} >{children}</button>
  )
}
