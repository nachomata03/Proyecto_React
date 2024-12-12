import React from 'react'

function Itemslistconteiner() {
  return (
    <div className='Greeting'>
      <div className='flex flex-col items-center relative top-32'>
        <h1 style={{fontSize: `2.8rem`, color: `rgb(255,255,255)`, textAlign:`center`}}>¡Bienvenidos a Santas Golosinas!</h1>
        <div className='w-2/3 mt-10'>
          <p style={{color: `rgb(255,255,255)`, fontSize: `1.3rem`}}>Nuestra misión es ofrecerte los mejores dulces y golosinas de las mejores marcas y emprendedores locales. Disfruta de una experiencia única con nuestra variada selección, pensada especialmente para ti.</p>
        </div>
      </div>
    </div>
  )
}

export default Itemslistconteiner