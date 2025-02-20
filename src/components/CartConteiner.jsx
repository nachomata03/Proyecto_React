import { useContext } from 'react'
import cartContext from '../context/cartContext'
import Button from './Button';
import ItemDetail from './ItemDetail';
import { Link } from 'react-router-dom';
import "../App.css"


export default function CartConteiner() {
    const {ItemsCart, removeItem, clear, totalCart} = useContext(cartContext);

    const cartLenght = ItemsCart.length;

    const Carrito = ItemsCart.map((item)=> { return (<div key={item.id}>
                                                        <ItemDetail {...item} id={item.id}/>
                                                    </div>) 
                                          });

  return (
    <div className='m-2'>
      <h1 className='text-center text-5xl mt-5'>Carrito</h1>
      
      <div className='w-full h-80'>
        <div>                                        
            {
              cartLenght === 0 ? 
              <p className='text-center text-3xl m-10'>El carrito esta vacio</p> 
              :
              <Button style="bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 text-white font-bold py-2 px-4 rounded" handleClick={() => clear()}>Eliminar Carrito</Button>
            }
            
            <div className='divCart '>
                {Carrito}
            </div>
            {
              cartLenght > 0 && 
              <div className='flex justify-center w-full py-3'>
                <Link to={"/form"}>
                  <Button style="bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2  text-white font-bold py-2 px-4 rounded">Comprar</Button>
                </Link>
              </div>
            }
        </div>
      </div>    
    </div>
  )
}

