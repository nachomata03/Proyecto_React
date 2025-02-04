import { useContext } from 'react'
import cartContext from '../context/cartContext'
import Item from './Item';
import Button from './Button';

export default function CartConteiner() {
    const {ItemsCart, removeItem, clear} = useContext(cartContext);

    const Carrito = ItemsCart.map((item)=> <Item key={item.id} {...item}/>);

    const cartLenght = ItemsCart.length;

  return (
    <>
      <h1 className='text-center text-5xl mt-5'>Carrito</h1>
      
      <div className='w-fit h-80'>
        <div>
            {
              cartLenght === 0 ? 
              <p className='text-center text-3xl m-10'>El carrito esta vacio</p> 
              :
              <Button handleClick={() => clear()}>Eliminar Carrito</Button>
            }
            
            <div className='flex gap-5 border-black border-solid border-4 rounded-2xl mx-3 my-5'>
                {Carrito}
                {cartLenght != 0 && <Button handleClick={() => removeItem(Carrito.id)}>Eliminar</Button>}
            </div>
        </div>
    </div>    
    </>
  )
}