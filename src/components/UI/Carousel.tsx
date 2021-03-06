import { Swiper } from 'swiper/react';
import { Autoplay } from "swiper";

// Import Swiper styles
import 'swiper/css';

const Carousel: React.FC<any> = ({ children }) => {
  return (
    <Swiper
      observeParents= {true}
      observer= {true} 
      spaceBetween={50}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      modules={[Autoplay]}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {children}

    </Swiper>
  )
}

export default Carousel