import { useContext } from 'react'
import cartContext from '../context/cartContext'
import Item from './Item';
import Button from './Button';
import { CreateBuyOrder } from '../data/database';
import ItemDetail from './ItemDetail';

export default function CartConteiner() {
    const {ItemsCart, removeItem, clear, totalCart} = useContext(cartContext);

    const cartLenght = ItemsCart.length;

    async function handleCheckOut(){
      const orderData = {
        buyer: {
          nombre, 
          apellido,
          email
        },
        items: ItemsCart,
        total: totalCart(),
        fecha: new date()
      }

      await CreateBuyOrder(orderData)
    }

    const Carrito = ItemsCart.map((item)=> { return (<div key={item.id}>
                                                        <ItemDetail {...item} id={item.id}/>
                                                        {/* <Item {...item} id={item.id}/> */}
                                                    </div>) 
                                          });

    


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
                
            </div>
        </div>
    </div>    
    </>
  )
}