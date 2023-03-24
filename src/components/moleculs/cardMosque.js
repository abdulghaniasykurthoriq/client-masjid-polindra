import React from 'react'
import Arraad from '../../assets/ar-raad.png'

function CardMosque() {
  return (
    <div style={{backgroundColor:'#adb5fa'}} className='p-8 rounded-[25px] flex flex-col items-center'>
        <img src={Arraad} alt="ar-raad" />
        <div className='text-center'>
            <p>
            “...Ingatlah, hanya dengan mengingat Allah hati menjadi tentram
            </p>
            <p className='mt-6'>
            (Ar-Ra’d : 28)
            </p>
        </div>
    </div>
  )
}

export default CardMosque