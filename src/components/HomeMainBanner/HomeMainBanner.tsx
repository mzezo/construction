// import { useState, useEffect } from "react"
import { SwiperSlide } from "swiper/react"
import Carousel from "../UI/Carousel"
// import { getData } from "../../services/getData"
import { motion } from "framer-motion"
import { useSwiper } from "swiper/react"
import { useRouter } from "next/router"
import { useTranslation } from "next-i18next"
import { useHomeBannersQuery } from "@/services/getHomeBanners";

export function fadeInOut(duration: number = 0.2) {
  return {
    from: {
      opacity: 0,
      y: 30,
      transition: {
        // type: 'easeInOut',
        duration: duration,
      },
    },
    to: {
      opacity: 1,
      y: 0,
      transition: {
        // type: 'easeInOut',
        duration: duration,
      },
    },
  }
}

const BannerSlide = (banner: any) => {
  const { t } = useTranslation("common");
  const router = useRouter()
  const { locale } = router;
  
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
          <div className="flex flex-col items-start p-8 md:p-20">
            <h1 className="text-2xl md:text-6xl uppercase font-thin">
              <span className="font-bold">{banner?.title}</span>
            </h1>
            <div
              className="uppercase font-bold mb-3"
              style={ locale === 'en' ? {letterSpacing: 15 } : {}}
            >
              {banner?.subTitle}
            </div>
            <p className="max-w-[590px]" style={{textAlign: 'start'}}>{banner?.description}</p>
            <a
              href={banner?.url}
              className="btn-banner btn button-lg black radius-xl btn-aware outline outline-2"
            >
              {t("view-portfolio")}
              <span></span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export function SlideNextButton() {
  const swiper = useSwiper()
  const { t } = useTranslation("common")
  const router = useRouter()
  const { locale } = router

  return (
    <button
      className="text-white px-4 font-bold uppercase"
      onClick={() => swiper.slideNext()}
    >
      {t("next")}
      {locale === "ar" ? (
        <i className="fas fa-long-arrow-alt-left px-2 opacity-50"></i>
      ) : (
        <i className="fas fa-long-arrow-alt-right px-2 opacity-50"></i>
      )}
    </button>
  )
}

export function SlidePrevButton() {
  const swiper = useSwiper()
  const { t } = useTranslation("common")
  const router = useRouter()
  const { locale } = router

  return (
    <button
      className="text-white px-4 font-bold uppercase"
      onClick={() => swiper.slidePrev()}
    >
      {locale === "ar" ? (
        <i className="fas fa-long-arrow-alt-right px-2 opacity-50"></i>
      ) : (
        <i className="fas fa-long-arrow-alt-left px-2 opacity-50"></i>
      )}
      {t("prev")}
    </button>
  )
}

const HomeMainBanner = () => {
  // const [homeBanners, setHomeBanners] = useState<any>([])
  // const [loading, setLoading] = useState(true)

  const router = useRouter()
  const { locale } = router
  const { data: homeBanners, isLoading } = useHomeBannersQuery({}, locale!);

  // useEffect(() => {
  //   getData(`/home-banners?populate=*&locale=${locale}`).then((data) => {
  //     setHomeBanners(data?.data)
  //     setLoading(false)
  //   })
  // }, [locale])

  if (isLoading)
    return (
      <div className="h-[520px] bg-[#121a2d] w-full">
        <div
          className="bg-cover bg-no-repeat bg-center w-full h-full"
          style={{
            backgroundImage: `url('images/background/bg1.jpg')`,
            filter: `blur(6px)`,
          }}
        />
      </div>
    )

  return (
    <div className="bg-[#121a2d] w-full h-[590px]">
      <Carousel>
        {homeBanners?.map((item: any) => (
          <SwiperSlide>
            <BannerSlide key={item?.id} {...item?.attributes} />
          </SwiperSlide>
        ))}
        <div className="flex justify-end px-12 py-4">
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Carousel>
    </div>
  )
}

export default HomeMainBanner
