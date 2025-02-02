import Button from './Button'
import {useState} from 'react'

function ItemCounter (props) {
    const [contador, setContador] = useState(1)

    const {OnSubmitCount, max} = props
    
    function suma(){
        setContador(contador < max ? contador + 1 : max)
    }
    
    function resta(){
        contador == 1 ? setContador(1) : setContador(contador - 1)
    }

  return (<>
            <div className='flex justify-center my-3 border-2'>
                  <Button handleClick={resta} color="white">➖</Button>
                  <span className='px-3 text-2xl'>{contador}</span>
                  <Button handleClick={suma} color="white" >➕</Button>
              </div>
              <div>
                <Button handleClick={() => OnSubmitCount(contador)}>Agregar al Carrito</Button>
              </div>    
          </>
  )
}

export default ItemCounter