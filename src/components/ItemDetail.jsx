  import ItemCounter from './ItemCounter';
  import { useContext } from 'react'; 
  import cartContext from '../context/cartContext';
  import { useState } from 'react';
  import Button from './Button';
  import { NavLink, useLocation } from 'react-router-dom';
import { count } from 'firebase/firestore';

  export default function ItemDetail({id, title, description, img, price, stock, discount, count}) { 
    const [itemAddedToCart, setItemAddedToCart] = useState(false);  
    const { addItem, removeItem }= useContext(cartContext);
    const location = useLocation()

    function HandleAddToCart(count){
      console.log(`Agregaste ${count} al carrito`)
      addItem({id, price, title, img, count, discount, description, stock }) 
      setItemAddedToCart(true);
    }

    return (
      <>
        <div className='mt-12'>
          { location.pathname === `/cart` && <Button handleClick={() => removeItem(id)}>Eliminar</Button>}
          <h2 className='text-5xl mb-2 text-center'>{title}</h2>

          <div className='flex justify-around mt-8 p-3 w-100 text-black text-center'>
            
            <div className='w-50 inline'>
              <img src={img} alt={title} className='w-90 h-80 mx-auto my-2'/>
            </div>
            
            <div className='inline'>
              <p className='text-2xl m-5 '>{description}</p>  
              <h3 className='text-xl m-5'>Precio: ${price}</h3>
              {
                location.pathname === `/cart` 
                ? 
                <span>Unidades seleccionadas: {count}</span>
                : <div>
                  <span className='text-xl m-5 block'>Stock: {stock}</span>
                  {
                    itemAddedToCart 
                    ? 
                    <NavLink to="/cart" className="m-2 bg-gray-300 rounded-lg "><Button>Ver carrito</Button></NavLink> 
                    : 
                    <ItemCounter max = {stock} OnSubmitCount={HandleAddToCart}/>
                  }
                </div>
              }
            </div>
            
          </div>

          <div>
            
          </div>
        </div>
        
      </>
    )
  }

  /* export {itemAddedToCart} */
