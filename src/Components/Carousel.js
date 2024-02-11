import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import chair from '../Assets/chair2.jpg';
import bed from '../Assets/bed1_564x637.jpg';
import dresser from '../Assets/dresser.jpg';
import sofa1 from '../Assets/sofa1.jpg';
import table from '../Assets/table_564x637.jpg';
import table3 from '../Assets/table3.jpg';
import './Carousel.css';

const Carousel = () => {
  return (
      
  <div className='carousel' >
    <h2>Most Sold Products</h2>
     <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={bed} alt=""/>
          <div className="case-btn">
          <button className='bttn' type='btn'>Bed</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={table} alt=""/>
          <div className="case-btn">
          <button className='bttn' type='btn'>Nesting table</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={chair} alt=""/>
          <div className="case-btn">
          <button className='bttn' type='btn'>Sofa</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={dresser} alt=""/>
          <div className="case-btn">
          <button className='bttn' type='btn'>Dresser</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={table3} alt=""/>
          <div className="case-btn">
          <button className='bttn' type='btn'>Book Stand</button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={sofa1} alt=""/>
          <div className="case-btn">
          <button className='bttn' type='btn'>Sofa</button>
          </div>
        </SwiperSlide>
      </Swiper>

  </div>
  
  )
}

export default Carousel
