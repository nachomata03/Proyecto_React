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
                  <Button handleClick={resta}>➖</Button>
                  <span className='px-3 text-2xl border-solid border-black border-2 rounded-lg'>{contador}</span>
                  <Button handleClick={suma}>➕</Button>
              </div>
              <div className='my-2'>
                <Button handleClick={() => OnSubmitCount(contador)} style = "bg-fuchsia-300 hover:bg-fuchsia-500 focus:outline-none focus:ring-2 text-black font-bold py-2 px-4 rounded">Agregar al Carrito</Button>
              </div>    
          </>
  )
}

export default ItemCounter