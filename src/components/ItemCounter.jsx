import Button from './Button'
import {useState} from 'react'

function ItemCounter (props) {
    const [contador, setContador] = useState(1)
    
    function suma(){
        setContador(contador < props.max ? contador + 1 : props.max)
    }
    
    function resta(){
        contador == 1 ? setContador(1) : setContador(contador - 1)
    }

  return (
    <div className='flex justify-center my-3 border-2'>
        <Button onClick={resta} color="white">➖</Button>
        <span className='px-3 text-2xl'>{contador}</span>
        <Button onClick={suma} color="white" >➕</Button>
    </div>
  )
}

export default ItemCounter