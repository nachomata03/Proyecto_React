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
            
            <div className='divCart '>
                {Carrito}
            </div>
            {
              cartLenght > 0 && 
              <div className='flex justify-center w-full'>
                <Link to={"/form"}>
                  <Button>Comprar</Button>
                </Link>
              </div>
            }
        </div>
    </div>    
    </>
  )
}

