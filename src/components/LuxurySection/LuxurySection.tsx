import { getData } from "@/services/getData"
import { useEffect, useState } from "react"
import { Autoplay, Navigation } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
const qs = require("qs")
import { useSwiper } from "swiper/react"

import "swiper/css/navigation"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { useTranslation } from "next-i18next"

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
)

export function SlideNextButton() {
  const swiper = useSwiper()
  const { t } = useTranslation("common")

  return (
    <button
      className="text-white px-4 font-bold uppercase"
      onClick={() => swiper.slideNext()}
    >
      {t("next")}
      <i className="fas fa-long-arrow-alt-right px-2 opacity-50"></i>
    </button>
  )
}

export function SlidePrevButton() {
  const swiper = useSwiper()
  const { t } = useTranslation("common")

  return (
    <button
      className="text-white px-4 font-bold uppercase"
      onClick={() => swiper.slidePrev()}
    >
      <i className="fas fa-long-arrow-alt-left px-2 opacity-50"></i>
      {t("prev")}
    </button>
  )
}

function LuxurySection() {
  const [projects, setProjects] = useState<any>([])
  // const swiper = useSwiper();

  const { t } = useTranslation("common")

  useEffect(() => {
    getData(`/projects?${query}`).then((data) => {
      setProjects(data?.data?.data)
    })
  }, [])

  return (
    <div
      className="h-screen bg-white relative mb-20"
      style={{
        backgroundImage: "url(images/background/bg9.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="md:pt-8">
          <h2 className="head-title text-5xl">
            {t("The Luxury Residence In Forest")}
          </h2>
          <p className="font-normal text-black">
            {t("random-paragraph").substring(0, 100)}
          </p>
          <a
            href="contact-us-1.html"
            className="btn btn-lg radius-xl black m-r10 m-b10"
          >
            {t("contact-us")}
          </a>
          <a
            href="portfolio-2.html"
            className="btn btn-lg radius-xl black m-b10"
          >
            {t("view-portfolio")}
          </a>
        </div>
      </div>

      {/* TODO: create slider */}
      <div className="w-full h-[430px] absolute md:-bottom-20">
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
              <div className="bg-white w-[90%] md:w-1/2 p-10">
                <ul className="list-details">
                  <li>
                    <strong>{t("client")}</strong>
                    <span>{project?.attributes?.client}</span>
                  </li>
                  <li>
                    <strong>{t("completion")}</strong>
                    <span>{project?.attributes?.date}</span>
                  </li>
                  <li>
                    <strong>{t("project-type")}</strong>
                    <span>
                      {project?.attributes?.category?.data?.attributes?.name}
                    </span>
                  </li>
                  <li>
                    <strong>{t("architects")}</strong>
                    <span>Logan Cee</span>
                  </li>
                  <li>
                    <a
                      href="portfolio-2.html"
                      className="btn outline outline-2 button-lg black m-t10 radius-xl btn-aware"
                    >
                      {t("view-portfolio")}
                      <span></span>
                    </a>
                  </li>
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default LuxurySection
