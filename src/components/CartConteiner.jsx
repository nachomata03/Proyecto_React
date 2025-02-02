import { useContext } from 'react'
import cartContext from '../context/cartContext'
import Item from './Item';
import Button from './Button';

export default function CartConteiner() {
    const {ItemsCart, removeItem, clear} = useContext(cartContext);

    const Carrito = ItemsCart.map((item)=> <Item key={item.id} {...item}/>);

    const cartLenght = ItemsCart.length;

  return (
    <div>
        <h1>Carrito</h1>
        <div>
            {cartLenght === 0 ? <p>El carrito esta vacio</p> :<Button handleClick={() => clear()}>Eliminar Carrito</Button>}
            <div>
                {Carrito}
                <Button handleClick={() => removeItem(Carrito.id)}>Eliminar</Button>

                {ItemsCart.map((item)=> <Item key={item.id} {...item}/>)}
            </div>
        </div>
    </div>
  )
}