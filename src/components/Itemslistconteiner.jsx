import {useState, useEffect} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import {getDataByCategory} from '../data/getdata'
import getData from '../data/getdata' 
import Loader from './Loader'

export default function ItemsListConteiner(props) {

  const [products, setProducts] = useState(null)
  const {categoryIDs} = useParams();

  useEffect(() => {
      if(categoryIDs === undefined){
        async function getproducts() {
          const response = await getData();
          setProducts(response);
        }
    
        getproducts();
      }else{
        async function getProductsByCategory() {
          const response = await getDataByCategory(categoryIDs);
          setProducts(response);
        }
  
        getProductsByCategory();
      }
    }, [categoryIDs])

    if(!products)
      return <Loader/>

  return (
    <>
      <div className='Greeting'>
          <div className='flex flex-col items-center relative top-32'>
            <h1 style={{fontSize: `2.8rem`, color: `rgb(255,255,255)`, textAlign:`center`}}>{props.children}</h1>
            <div className='w-2/3 mt-10'>
              <p style={{color: `rgb(255,255,255)`, fontSize: `1.3rem`}}>Nuestra misión es ofrecerte los mejores dulces y golosinas de las mejores marcas y emprendedores locales. Disfruta de una experiencia única con nuestra variada selección, pensada especialmente para ti.</p>
            </div>
          </div>
        </div>

      <div className='flex flex-row flex-wrap justify-between gap-5 m-5'><ItemList productos={products}/></div>
    </>
      
  )
}
