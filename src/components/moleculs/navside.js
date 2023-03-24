import React, { useEffect, useState } from 'react'
import eMasjid from '../../assets/e-masjid.png'
import btnKajianGray from '../../assets/kajianku_gray.png'
import btnKajianBlue from '../../assets/kajianku_blue.png'
import useMediaQuery from '../../helpers/mediaQuery'

function Navside() {
//     const isDesktop = useMediaQuery('(min-width:960px)');
//   if(isDesktop){
//     setIsShow(false)
//   }
    const [isShow, setIsShow] = useState(false)
    const isDesktop = useMediaQuery('(min-width:960px)');
    useEffect(() => {
        if(isDesktop){
            setIsShow(false)
        }
    });
    
    const handleShow = () => {
        setIsShow(!isShow);
    }
  return (
    <div className='relative '>
        <div onClick={handleShow} className='bg-red-200 w-14 h-14 rounded-full absolute  left-3 top-3'></div>

        <div style={{backgroundColor:'#d2d6fb'}} className={isShow ? 'hidden' : '' +' w-full z-30 fixed lg:relative lg:flex-col  h-screen lg:w-80'}>
        <div onClick={handleShow} className='lg:hidden bg-red-200 w-14 h-14 rounded-full absolute right-10 top-10 z-50'></div>
        
        <div className='flex justify-center pt-8 lg:px-4 pb-16 lg:pb-2'>
            <img className='w-48 ' src={eMasjid} alt="e-masjid"/>
        </div>
        <p className='hidden lg:flex lg:pt-8 lg:pl-4'>Akses Saya</p>
        <div className=' w-full lg:w-4/5 bg-blue-300 lg:rounded-tr-[25px] lg:rounded-br-[25px] py-2 my-2 '>
            <div className='flex items-center lg:justify-start text-2xl justify-center lg:pl-6'>
                {/* <img className='w-12 pr-4' src={btnKajianGray} alt=""/> */}
                <img className='w-12 pr-4' src={btnKajianBlue} alt=""/>
                <p className='text-blue-700'>Kajianku</p>
            </div>
        </div>
        <div className='w-full lg:w-4/5 -2 my-2 '>
            <div className='flex items-center text-2xl justify-center lg:justify-start lg:pl-6'>
                <img className='w-12 pr-4' src={btnKajianGray} alt=""/>
                <p>Donasi</p>
            </div>
        </div>

    </div>
    </div>
    
  )
}

export default Navside