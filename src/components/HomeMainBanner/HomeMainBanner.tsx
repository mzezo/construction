import { useState, useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import Carousel from "../UI/Carousel";
import { getData } from "../../services/getData";
import { motion } from "framer-motion";
import { useSwiper } from 'swiper/react';
import image from "next/image";

export function fadeInOut (duration:number = 0.2) {
  return {
    from: { 
      opacity: 0,
      y: 30,
      transition: {
        // type: 'easeInOut',
        duration: duration,
      } 
    },
    to: { 
      opacity: 1,
      y: 0,
      transition: {
        // type: 'easeInOut',
        duration: duration,
      } 
    },
  }
}

const BannerSlide = (banner: any) => {
  return (
    <div className="h-[520px] bg-[#121a2d] w-full">
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-full"
        style={{
          backgroundImage: `url(${banner?.imageSrc?.data?.attributes?.url})`,
        }}
      >
        <motion.div
          layout
					initial="from"
					animate="to"
					exit="from"
          variants={fadeInOut(0.8)}
        >
          <div className="p-20">
            <h1 className="text-6xl uppercase font-thin">
              <span className="font-bold">{banner?.title}</span>
            </h1>
            <div
              className="uppercase font-bold mb-3"
              style={{ letterSpacing: 15 }}
            >
              {banner?.subTitle}
            </div>
            <p className="max-w-[590px]">{banner?.description}</p>
            <a
              href={banner?.url}
              className="btn-banner btn button-lg black radius-xl btn-aware outline outline-2"
            >
              View Portfolio<span></span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const HomeMainBanner = () => {
  const [homeBanners, setHomeBanners] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const swiper = useSwiper();

  useEffect(() => {
    getData("/home-banners?populate=*").then((data) => {
      setHomeBanners(data?.data);
      setLoading(false);
    });
  }, []);

  if (loading)  return (
    <div className="h-[520px] bg-[#121a2d] w-full">
      <div
        className="bg-cover bg-no-repeat bg-center w-full h-full"
        style={{
          backgroundImage: `url('images/background/bg1.jpg')`,
          filter: `blur(8px)`
        }}
      />
    </div>
  )

  return (
    <div className="bg-[#121a2d] w-full h-[590px]">
      <Carousel>
        {homeBanners?.data?.map((item: any, index: number) => (
          <SwiperSlide>
            <BannerSlide key={item?.id} {...item?.attributes} />
          </SwiperSlide>
        ))}
        <div className="flex justify-end px-12 py-4">
          <button className="text-white px-4 font-bold uppercase">
            <i className="fas fa-long-arrow-alt-left px-2 opacity-50"></i> prev
          </button>
          <button onClick={() => swiper?.slideNext()} className="text-white px-4 font-bold uppercase">
            next
            <i className="fas fa-long-arrow-alt-right px-2 opacity-50"></i>
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeMainBanner;
