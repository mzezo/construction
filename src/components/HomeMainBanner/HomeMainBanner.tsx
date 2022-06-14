import React from 'react';
import { SwiperSlide } from 'swiper/react';
import Carousel from '../UI/Carousel';

const HomeMainBanner = () => {
  return (
    <div className='bg-[#121a2d] w-full h-[640px]'>
      <Carousel>
        <SwiperSlide>
          <div className='h-[520px] bg-[#121a2d] w-full'> 
            {/* <div className='bg-[url("/bg1.jpg")] bg-cover bg-no-repeat bg-center' style={{backgroundImage: `url(require("images/background/bg4.jpg"))`}}/> */}
            <img src="images/background/bg1.jpg" className='pl-12' alt="" />
            <span></span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='h-[520px] bg-[#121a2d] w-full'> 
            <img src="images/background/bg3.jpg" className='pl-12' alt="" />
          </div>
        </SwiperSlide>
      </Carousel>
    </div>
  )
}

export default HomeMainBanner