import React from 'react'
import CarouselItem from '../atoms/carouselItem'

function Carousel() {
  return (
    <div className="carousel w-full">
        <CarouselItem
            curent='slide1'
            prev='#slide2'
            next='#slide2'
            title="MAU DIBANGUNKAN RUMAH DI SURGA?"
            body="“Siapa yang membangun masjid karena Allah, maka Allah akan membangun baginya semisal itu di surga”
            (HR. Bukhari)"
         />
        <CarouselItem
            curent='slide2'
            prev='#slide1'
            next='#slide1'
            src='https://banner2.cleanpng.com/20180728/ryx/kisspng-hamburger-button-computer-icons-menu-number-list-5b5c089f664156.0146657315327581754189.jpg'
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