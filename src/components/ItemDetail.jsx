import ItemCounter from './ItemCounter';
import { useContext } from 'react'; 
import cartContext from '../context/cartContext';
import { useState } from 'react';
import Button from './Button';
import { NavLink, useLocation } from 'react-router-dom';
import { count } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';  


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
    <div className="item-detail-container">
        <div className={location.pathname === `/cart` ? `divDetailCart` : 'divDetail'}>
            {location.pathname === `/cart` && <span className='btnEliminarCart'>
                <Button handleClick={() => removeItem(id)}>
                    <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ "--fa-primary-color": "#ffffff" }}
                        size="xl"
                    />
                </Button>
            </span>}

            <h2 className='text-3xl my-4 text-center'>{title}</h2>
            
            <div className={location.pathname === `/cart` ? `divDetailCartFlex` : 'divDetailFlex'}>

                <div className='w-1/2 flex justify-center'> 
                    <img src={img} alt={title} className={location.pathname === `/cart` ? 'item-imageCart' : 'item-image'} />
                </div>
                
                {location.pathname === `/cart` 
                    ?
                    <div className='descriptionCart'>
                        <p className='text-lg text-green-500 inline'>Precio por unidad: ${price}</p>
                        <p className='text-lg inline'>Cantidad: {count}</p>
                        <p className='text-lg'>Subtotal: ${price * count}</p>
                    </div>
                    :
                    <div className='description-container'> 
                        <p className='text-xl m-5'>{description}</p>
                        <h3 className='text-lg m-5'>Precio: ${price}</h3>       
                        {itemAddedToCart 
                            ?
                            <span>
                                <NavLink to="/cart">
                                    <Button style= "bg-fuchsia-500 hover:bg-fuchsia-900 focus:outline-none focus:ring-2 text-white font-bold py-2 px-4 rounded">Ver carrito</Button>
                                </NavLink>
                            </span>
                            :
                            <ItemCounter max={stock} OnSubmitCount={HandleAddToCart}/>
                        }
                    </div>
                }
                
            </div>
        </div>  
    </div> 
)
}

