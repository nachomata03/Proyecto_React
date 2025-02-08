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
        <div className='mt-12'>
          <h2 className='text-5xl mb-2 text-center'>{title}</h2>

          <div className='flex justify-around mt-8 p-3 w-100 text-black text-center'>
            
            <div className='w-50 inline'>
              <img src={img} alt={title} className='w-90 h-80 mx-auto my-2'/>
            </div>
            
            <div className='inline'>
              <p className='text-2xl m-5 '>{description}</p>  
              <h3 className='text-xl m-5'>Precio: ${price}</h3>
              <span className='text-xl m-5 block'>Stock: {stock}</span>
              {
                itemAddedToCart 
                ? 
                <NavLink to="/cart" className="m-2 bg-gray-300 rounded-lg "><Button>Ver carrito</Button></NavLink> 
                : 
                <ItemCounter max = {stock} OnSubmitCount={HandleAddToCart}/>
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
