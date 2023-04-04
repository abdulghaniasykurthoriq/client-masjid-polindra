import React, { useEffect } from 'react'
import CarouselItem from '../atoms/carouselItem'

function Carousel() {

  useEffect(() => {
    // let i =1 ;
    // setInterval(() => {
    //   if(i<3){
    //     window.location(`#slide${i}`)
    //     i++;
    //   }else{
    //     window.location('#slide1')
    //   }
    // },3000)
  }, [])
  
  return (
    <div className="carousel w-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <CarouselItem
            curent='slide1'
            prev='#slide3'
            next='#slide2'
            title="MAU DIBANGUNKAN RUMAH DI SURGA?"
            body="“Siapa yang membangun masjid karena Allah, maka Allah akan membangun baginya semisal itu di surga”
            (HR. Bukhari)"
         />
        <CarouselItem
            curent='slide2'
            prev='#slide1'
            next='#slide3'
            title="MAU DIBANGUNKAN RUMAH DI DUNIA?"
            body="“Siapa yang membangun masjid karena Allah, maka Allah akan membangun baginya semisal itu di surga”
            (HR. Bukhari)"
        />
        <CarouselItem
            curent='slide3'
            prev='#slide2'
            next='#slide1'
            title="MAU DIBANGUNKAN RUMAH DI CELENG?"
            body="“Siapa yang membangun masjid karena Allah, maka Allah akan membangun baginya semisal itu di surga”
            (HR. Bukhari)"
        />
  {/* <div id="slide2" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>
  )
}

export default Carousel