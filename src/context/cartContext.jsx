import { createContext, useState } from "react"
import { CreateBuyOrder } from '../data/database';

const cartContext = createContext(`carrito`);

export function CartContextProvider(props) {
    const [ItemsCart, setItemsCart] = useState([]);
    const [orderId, setOrderId] = useState("");

    let productAdded = false;


    async function handleCheckOut(userData){
        try{
            const orderData = {
                buyer: {
                    nombre: userData.nombre, 
                    apellido: userData.apellido,
                    email: userData.email,
                    telefono: userData.telefono,
                    direccion: userData.direccion,
                    ciudad: userData.ciudad,
                    provincia: userData.provincia,
                },
                items: ItemsCart,
                total: totalCart(),
                fecha: new Date().toLocaleDateString('es-AR', { 
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true})
            }

            console.log(orderData)
            const IdFromOrder = await CreateBuyOrder(orderData)

            if (IdFromOrder && IdFromOrder.id) { 
                setOrderId(IdFromOrder.id); 
            } else {
                console.error("No se recibió un ID de orden válido:", IdFromOrder);
                console.log("Hubo un error al procesar tu compra. Por favor, intenta nuevamente.")
            }
        }
        catch (error) {
            console.error("Error en handleCheckOut:", error);
            console.log("Hubo un error al procesar tu compra. Por favor, intenta nuevamente.")
        }
        

    }

    function totalItemsCart(){
        let total = 0;
        ItemsCart.forEach((prod)=> {total += prod.count})
        return total
    }

    function addItem({ id, price, title, img, count, discount, description, stock }) {
        const copyCartItems = [...ItemsCart];
        const foundItem = copyCartItems.find(producto => producto.id === id);
    
        if (foundItem) {
            foundItem.count += count;
        } else {
            copyCartItems.push({ id, price, title, img, count, discount, description, stock });
            productAdded = true
        }
    
        setItemsCart(copyCartItems);
    }

    function removeItem(id){
        setItemsCart(ItemsCart.filter(item => item.id !== id));        
    }

    function clear()
    {
        console.log(`carrito${ItemsCart}`);
        setItemsCart([]);
        console.log(`carrito${ItemsCart}`);
    }

    function totalCart(){
        let total = 0;
        ItemsCart.forEach((prod)=> {total += prod.price * prod.count})
        return total
    }

    return (
        <cartContext.Provider value={{ItemsCart, setItemsCart, totalItemsCart, clear, addItem, removeItem, totalCart, productAdded, handleCheckOut, orderId}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext
