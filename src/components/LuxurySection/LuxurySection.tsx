import { getData } from "@/services/getData";
import { useEffect, useState } from "react";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
const qs = require("qs");
import { useSwiper } from "swiper/react";

import "swiper/css/navigation";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const query = qs.stringify(
  {
    filters: {
      featured: {
        $eq: true,
      },
    },
    populate: "*",
  },
  {
    encodeValuesOnly: true,
  }
);

export function SlideNextButton() {
  const swiper = useSwiper();

  return (
    <button className="text-white px-4 font-bold uppercase" onClick={() => swiper.slideNext()}>
       next
       <i className="fas fa-long-arrow-alt-right px-2 opacity-50"></i>
    </button>
  );
}

export function SlidePrevButton() {
  const swiper = useSwiper();

  return (
    <button  className="text-white px-4 font-bold uppercase" onClick={() => swiper.slidePrev()}>
      <i className="fas fa-long-arrow-alt-left px-2 opacity-50"></i>
       prev
    </button>
  );
}

function LuxurySection() {
  const [projects, setProjects] = useState<any>([]);
  // const swiper = useSwiper();

  useEffect(() => {
    getData(`/projects?${query}`).then((data) => {
      setProjects(data?.data?.data);
    });
  }, []);

  return (
    <div
      className="h-screen bg-white relative mb-20"
      style={{
        backgroundImage: "url(images/background/bg9.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="pt-20">
          <h2 className="head-title text-5xl">
            The Luxury Residence In Forest
          </h2>
          <p className="font-normal text-black">
            Meh synth Schlitz, tempor duis single-origin coffee ea next level
            ethnic fingerstache fanny pack nostrud. Photo booth anim 8-bit
            hella,{" "}
          </p>
          <a
            href="contact-us-1.html"
            className="btn btn-lg radius-xl black m-r10 m-b10"
          >
            Contact Us
          </a>
          <a
            href="portfolio-2.html"
            className="btn btn-lg radius-xl black m-b10"
          >
            View Portfolio
          </a>
        </div>
      </div>

      {/* TODO: create slider */}
      <div className="w-full h-[430px] absolute -bottom-20">
        <Swiper
          className="container h-full"
          modules={[Autoplay, Navigation]}
          // autoplay={{
          //   delay: 5000,
          //   disableOnInteraction: false,
          // }}
        >
          {projects?.map((project: any) => (
            <SwiperSlide
              className="flex items-center"
              style={{
                backgroundImage:
                  `url(${project?.attributes?.image?.data?.attributes?.url})` ??
                  `url(images/projects/project/img1.jpg)`,
                // backgroundSize: "cover",
                // backgroundPosition: "center",
              }}
            >
              <div className="flex justify-end px-12 py-4 absolute bottom-0 right-0">
                <SlidePrevButton />
                <SlideNextButton />
              </div>
              <div className="bg-white w-1/2 p-10">
                <ul className="list-details">
                  <li>
                    <strong>Clients:</strong>
                    <span>{project?.attributes?.client}</span>
                  </li>
                  <li>
                    <strong>Completion:</strong>
                    <span>{project?.attributes?.date}</span>
                  </li>
                  <li>
                    <strong>Project Type:</strong>
                    <span>
                      {project?.attributes?.category?.data?.attributes?.name}
                    </span>
                  </li>
                  <li>
                    <strong>Architects:</strong>
                    <span>Logan Cee</span>
                  </li>
                  <li>
                    <a
                      href="portfolio-2.html"
                      className="btn outline outline-2 button-lg black m-t10 radius-xl btn-aware"
                    >
                      View Portfolio<span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default LuxurySection;
