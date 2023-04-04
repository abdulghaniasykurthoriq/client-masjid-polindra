import React from 'react'
import Bg from '../../assets/bgPost.png'


function CarouselItem({curent,title,body, prev,next}) {
  return (
    <div id={curent} className="carousel-item relative w-full 
      flex
      items-center
      justify-center
      h-60">
        {/* <div className='absolute h-60'> */}
          {/* PERLU PERBAIKAN DI BAGIAN IMG */}

          {/* <img src={Bg} alt='bg' className='h-full w-full' />
        </div> */}
        <div className='z-10 px-[80px] lg:px-0'>
          <p className=' text-lg lg:text-2xl font-bold pb-8'>{title}</p>
          <p className=' max-w-sm w-full xl:max-w-xl'>{body}</p>
        </div>
    <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={prev} className="btn btn-circle">❮</a> 
      <a href={next} className="btn btn-circle">❯</a>
    </div>
  </div> 
  )
}

export default CarouselItem