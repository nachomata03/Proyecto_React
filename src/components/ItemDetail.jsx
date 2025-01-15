import ItemCounter from './ItemCounter';

export default function ItemDetail({title, description, img, price, stock}) { 
  return (
    <div className='flex flex-col mt-1 p-3 bg-rose-800 w-2/3 text-white text-center'>
      <h2 className='text-3xl mb-2'>{title}</h2>
      <img src={img} alt={title} className='w-80 h-80 mx-auto my-2'/>
      <p className='text-xl m-2 '>{description}</p>
      <h3 className='text-xl m-2'>Price: ${price}</h3>
      <span className='text-xl m-2'>Stock: {stock}</span>
      <ItemCounter max = {stock}/>
  </div>
  )
}
