import { SpinnerCircular } from 'spinners-react';

export default function Loader() {
  return (
    <div className='flex flex-col justify-center items-center relative top-40'>
        <SpinnerCircular
            size={50} 
            thickness={100} 
            speed={115} 
            color="rgba(156, 57, 172, 1)" 
            secondaryColor="rgba(0, 0, 0, 0.2)" 
        />
        <p className='text-center color-black'>Loading...</p>
    </div>
    
  )
}
