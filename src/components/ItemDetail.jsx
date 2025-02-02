import ItemCounter from './ItemCounter';
import { useContext } from 'react'; 
import cartContext from '../context/cartContext';
import { useState } from 'react';
import Button from './Button';
import { NavLink } from 'react-router-dom';

export default function ItemDetail({id, title, description, img, price, stock, discount}) { 
  const [itemAddedToCart, setItemAddedToCart] = useState(false);
  const { addItem }= useContext(cartContext);

  function HandleAddToCart(count){
    console.log(`Agregaste ${count} al carrito`)
    addItem({id, price, title, img, count, discount, description }) 
    setItemAddedToCart(true); 
  }

  return (
    <>
      <div>
        <div className='flex flex-col mt-1 p-3 w-2/3 text-black text-center'>
          <h2 className='text-3xl mb-2'>{title}</h2>
          <img src={img} alt={title} className='w-80 h-80 mx-auto my-2'/>
          <p className='text-xl m-2 '>{description}</p>
          <h3 className='text-xl m-2'>Price: ${price}</h3>
          <span className='text-xl m-2'>Stock: {stock}</span>
          {
            itemAddedToCart 
            ? 
            <NavLink to="/cart" className="m-2 bg-gray-300 rounded-lg p-0.5 duration-200  hover:scale-105"><Button>Ver carrito</Button></NavLink> 
            : 
            <ItemCounter max = {stock} OnSubmitCount={HandleAddToCart}/>
          }
        </div>

        <div>
          
        </div>
      </div>
      
    </>
  )
}

/* export {itemAddedToCart} */
