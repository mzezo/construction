import { motion, useAnimation } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useInView } from "react-intersection-observer";
import { fadeInUp } from "src/utils/Motion/FadeInUp";
import { getData } from "../../services/getData";
import qs from "qs";
import { Navigation } from "swiper";
import "swiper/css/navigation";

const ContactForm = () => {
  const [latestProject, setLatestProject] = useState<any>({});

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    const query = qs.stringify(
      {
        sort: ["date:desc"],
        populate: "*",
      },
      {
        encodeValuesOnly: true,
      }
    );
    getData(`/projects?${query}`).then((data) => {
      console.log("Latest Project", data?.data?.data[0]);
      setLatestProject(data?.data?.data[0]);
    });
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      {/* TODO: fix the container issue */}
      <div className="flex flex-col md:flex-row md:h-screen items-center bg-white">
        <div className="h-full w-full md:w-1/2 shrink-0 bg-[#ebebeb] flex items-center relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1.4}
            speed={500}
            loop={true}
            touchRatio={1.5}
            navigation={true}
            modules={[Navigation]}
            effect={"flip"}
            pagination={{ clickable: true }}
            className="mySwiper absolute w-[110%]"
            style={{ position: "absolute", width: "106%" }}
          >
            <div className="w-full md:w-[53vw] h-[350px] -mr-20 md:h-[70%] flex items-center overflow-hidden">
              {latestProject?.attributes?.images?.data?.map((item: any) => (
                <SwiperSlide>
                  <div className="w-full">
                    <img
                      src={
                        item?.attributes?.url ||
                        "images/portfolio/portfolio-box2/pic1.jpg"
                      }
                      alt=""
                      className="w-full h-[440px] bg-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
        {/* </motion.div> */}

        <div className="md:w-1/2 w-full p-5">
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={fadeInUp(1)}
            className="wow fadeInUp"
          >
            <div
              className="about-bx1-content wow fadeIn md:pl-10"
              data-wow-delay="0.2s"
              data-wow-duration="2s"
            >
              <h2>Our latest project {latestProject?.attributes?.name}</h2>
              <p>{latestProject?.attributes?.description}</p>
              <div className="m-b30">
                <ul className="list-details">
                  <li>
                    <strong>Clients:</strong>
                    <span>{latestProject?.attributes?.client}</span>
                  </li>
                  <li>
                    <strong>Completion:</strong>
                    <span>{latestProject?.attributes?.date}</span>
                  </li>
                  <li>
                    <strong>Project Type:</strong>
                    <span>
                      {
                        latestProject?.attributes?.category?.data?.attributes
                          ?.name
                      }
                    </span>
                  </li>
                </ul>
              </div>
              <div className="">
                <a
                  href="https://www.youtube.com/watch?v=Dj6CKxQue7U"
                  className="popup-youtube video btn button-lg black radius-xl btn-aware btn-video btn-aware outline outline-2"
                >
                  <i className="fa fa-play"></i>
                  <span></span>
                </a>
                <a
                  href="carousel-showcase.html"
                  className="btn button-lg black radius-xl btn-aware outline outline-2"
                >
                  View Portfolio<span></span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
