import React from "react"
import { SwiperSlide } from "swiper/react"
import Carousel from "../UI/Carousel"

const HomeMainBanner = () => {
  return (
    <div className="bg-[#121a2d] w-full">
      <Carousel>
        <SwiperSlide>
          <div className="h-[520px] bg-[#121a2d] w-full">
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-full"
              style={{ backgroundImage: `url("/images/background/bg1.jpg")` }}
            >
              <div className="p-20">
                <h1 className="text-6xl uppercase font-thin">
                  <span className="font-bold">interior</span> design
                </h1>
                <div className="uppercase font-bold mb-3" style={{letterSpacing: 15}}>architecture agency</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae pariatur architecto quo?
                </p>
                <a
                  href="carousel-showcase.html"
                  className="btn button-lg black radius-xl btn-aware outline outline-2"
                >
                  View Portfolio<span></span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[520px] bg-[#121a2d] w-full">
            <div
              className="bg-cover bg-no-repeat bg-center w-full h-full"
              style={{ backgroundImage: `url("/images/background/bg1.jpg")` }}
            >
              <div className="p-20">
                <h1 className="text-6xl uppercase font-thin">
                  <span className="font-bold">interior</span> design
                </h1>
                <div className="uppercase font-bold mb-3" style={{letterSpacing: 15}}>architecture agency</div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Beatae pariatur architecto quo?
                </p>
                <a
                  href="carousel-showcase.html"
                  className="btn button-lg black radius-xl btn-aware outline outline-2"
                >
                  View Portfolio<span></span>
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Carousel>
    </div>
  )
}

export default HomeMainBanner
