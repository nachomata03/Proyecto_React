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
                        size="2xl"
                    />
                </Button>
            </span>}

            <h2 className='text-3xl my-4 text-center'>{title}</h2>

            <div className='flex justify-center items-center mt-8 p-3 w-full text-black'> {/* Centrado vertical y horizontal */}

                <div className='image-container'> {/* Contenedor para la imagen */}
                    <img src={img} alt={title} className='item-image' />
                </div>

                <div className='description-container'> {/* Contenedor para la descripción */}
                    <p className='text-xl m-5'>{description}</p>
                    <h3 className='text-lg m-5'>Precio: ${price}</h3>
                    {location.pathname === `/cart` ?
                        <span>Cantidad: {count}</span> :
                        <div>
                            <span className='text-lg m-5 block'>Stock: {stock}</span>
                            {itemAddedToCart ?
                                <NavLink to="/cart" className="m-2 bg-gray-300 rounded-lg "><Button>Ver carrito</Button></NavLink> :
                                <ItemCounter max={stock} OnSubmitCount={HandleAddToCart} />
                            }
                        </div>
                    }
                </div>
            </div>
        </div>  
      </div> 
    )
  }

