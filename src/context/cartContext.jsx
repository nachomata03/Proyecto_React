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
        <cartContext.Provider value={{ItemsCart, setItemsCart, totalItemsCart, clear, addItem, removeItem, totalCart, productAdded}}>
            {props.children}
        </cartContext.Provider>
    )
}

export default cartContext
