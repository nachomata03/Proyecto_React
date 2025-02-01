import Item from './Item'
export default function ItemList(props) {
  return (<>
      {props.productos.map(({id, title, description, price, stock, img, category, discount}) => (
        <Item 
          key = {id} 
          id = {id}
          titulo = {title} 
          texto = {description} 
          precio = {price} 
          stock ={stock} 
          img = {img} 
          categoria = {category}
          descuento = {discount}
          />
      ))}     
  </>)
}





