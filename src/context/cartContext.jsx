import { createContext } from "react"
import { useState } from "react"

const cartContext = createContext(`carrito`);

export function CartContextProvider(props) {
    const [ItemsCart, setItemsCart] = useState([]);

    let productAdded = false;

    function totalItemsCart(){
        let total = 0;
        ItemsCart.forEach((prod)=> {total += prod.count})
        return total
    }

    function addItem({ id, price, title, img, count, discount, description }) {
        const copyCartItems = [...ItemsCart];
    
        const foundItem = copyCartItems.find(producto => producto.id === id);
    
        if (foundItem) {
            foundItem.count += count;
        } else {
            copyCartItems.push({ id, price, title, img, count, discount, description });
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

    return (
        <cartContext.Provider value={{ItemsCart, setItemsCart, totalItemsCart, clear, addItem, removeItem}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext
