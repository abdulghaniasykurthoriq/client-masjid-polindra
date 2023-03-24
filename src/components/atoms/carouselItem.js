import React from 'react'
import Bg from '../../assets/bgPost.png'


function CarouselItem({curent,title,body, prev,next}) {
  return (
    <div id={curent} className="carousel-item relative w-full 
      bg-red-200
      flex
      items-center
      justify-center
      h-60">
        <div className='absolute h-60'>
          <img src={Bg} alt='bg' className='h-full' />
        </div>
        <div className='z-10 px-[80px]'>
          <p className='text-2xl font-bold pb-8'>{title}</p>
          <p>{body}</p>
        </div>
    <div className="absolute z-20 flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href={prev} className="btn btn-circle">❮</a> 
      <a href={next} className="btn btn-circle">❯</a>
    </div>
  </div> 
  )
}

export default CarouselItem