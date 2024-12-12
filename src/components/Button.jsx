function Button(props) {
    const {children} = props
  return (
    <button style={{backgroundColor: "#9400ff"}}>{children}</button>
  )
}

export default Button