import { useContext } from "react"
import cartContext from "../context/cartContext"
import { NavLink } from "react-router-dom";

export default function CartWidget() {
  
  const context = useContext(cartContext);
  
  return (
    <div>
        <span className="bg-[#ffeec6] text-black px-2 rounded-2xl absolute top-3 right-9">{context.totalItemsCart()}</span>
        <NavLink to="/cart" className={`mr-7`}>
          <span className="mr-12">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
          </span>
        </NavLink>
    </div>
  )
}