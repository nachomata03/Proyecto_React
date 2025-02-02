import Item from './Item'
export default function ItemList(props) {
  return (<>
      {props.productos.map(({id, title, description, price, stock, img, category, discount}) => (
        <Item 
          key = {id} 
          id = {id}
          title = {title} 
          description = {description} 
          price = {price} 
          stock ={stock} 
          img = {img} 
          category = {category}
          discount = {discount}
          />
      ))}     
  </>)
}





